import { getLangDir } from "rtl-detect";
import "../globals.css";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import TopNav from "@/components/TopNav";
import Header from "@/components/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const direction = getLangDir(locale);

  const isSupportedLocale = hasLocale(routing.locales, locale);
  if (!isSupportedLocale) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} dir={direction}>
      <body className="min-h-screen">
        <NextIntlClientProvider>
          <TopNav />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
