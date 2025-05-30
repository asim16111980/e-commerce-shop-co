import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);
  return <></>;
}
