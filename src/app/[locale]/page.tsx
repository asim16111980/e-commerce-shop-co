import { getTranslations, setRequestLocale } from "next-intl/server";
// import { Link } from "@/i18n/navigation";
import Carousel from "@/components/Carousel";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tHome = await getTranslations("home");
  const tCommon = await getTranslations("common");

  setRequestLocale(locale);
  return (
    <div className="w-full">
      {/* Slider Section */}
      <section className="flex flex-col gap-8 xl:px-40 md:px-14 px-8 pb-10">
        <Carousel />
        <section className="flex flex-col sm:flex-row items-center gap-6">
          <h2 className="text-5xl sm:text-7xl font-medium text-gray-900">
            {tHome("sliderSection.title")}
          </h2>
          <p className="text-sm sm:text-base">
            <span className="font-semibold sm:font-normal text-gray-700">{tCommon("appTitle")} </span>
            <span className="text-gray-600">{tHome("sliderSection.subtitle")}</span>
          </p>
        </section>
      </section>
    </div>
  );
}
