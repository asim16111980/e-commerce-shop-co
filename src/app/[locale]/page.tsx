import { getTranslations, setRequestLocale } from "next-intl/server";
// import { Link } from "@/i18n/navigation";
import Carousel from "@/components/Carousel";
import { CARDS } from "@/constants/components";
import Card from "@/components/Card";

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
        <section className="flex flex-col sm:flex-row gap-6">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium text-gray-900 sm:text-gray-600">
            {tHome("sliderSection.title")}
          </h2>
          <p className="text-sm sm:text-base">
            <span className="font-semibold sm:font-normal text-gray-700">
              {tCommon("appTitle")}{" "}
            </span>
            <span className="text-gray-600">
              {tHome("sliderSection.subtitle")}
            </span>
          </p>
        </section>
      </section>
      {/* Banner Grid Section */}
      <section className="grid grid-cols-2 sm:grid-rows-2 gap-4 h-[600px] sm:h-auto sm:grid-cols-1 grid-rows-none">
        {CARDS.map((card, index) => {
          const baseClass =
            index === 0
              ? `row-span-2  h-full sm:row-span-1 sm:col-span-1`
              : ` sm:col-span-1`;
          return <Card title="" image="" classes={baseClass} />;
        })}
      </section>
    </div>
  );
}
