import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t =await getTranslations("home");

  setRequestLocale(locale);
  return <div className="w-full">
    {/* Slider Section */}
    <section className="flex gap-8 px-40 pb-10">
      <section>
        <h2>{t("sliderSection.title")}</h2>
        <p>{t("sliderSection.subtitle")}</p>
      </section>
    </section>
  </div>;
}
