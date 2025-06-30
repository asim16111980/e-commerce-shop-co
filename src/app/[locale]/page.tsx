import { getTranslations, setRequestLocale } from "next-intl/server";
// import { Link } from "@/i18n/navigation";
import Carousel from "@/components/Carousel";
import { CARDS } from "@/constants/components";
import Card from "@/components/Card";
import clsx from "clsx";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tHome = await getTranslations("home");
  const tCommon = await getTranslations("common");
  const tComponent = await getTranslations("component");
  const sectionPadding = "px-[clamp(2rem,8vw,10rem)]";

  setRequestLocale(locale);
  return (
    <div className="w-full">
      {/* Slider Section */}
      <section className={clsx("flex flex-col gap-8 pb-10", sectionPadding)}>
        <Carousel />
        <section className="flex flex-col sm:flex-row sm:items-center gap-6">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium text-gray-900 sm:text-gray-600">
            {tHome("sliderSection.title")}
          </h2>
          <p className="text-sm sm:text-base">
            <span className="font-semibold sm:font-normal text-gray-700 me-2">
              {tCommon("appTitle")}
            </span>
            <span className="text-gray-600">
              {tHome("sliderSection.subtitle")}
            </span>
          </p>
        </section>
      </section>
      {/* Banner Grid Section */}
      <section
        className={clsx(
          "w-full h-[770px] sm:h-[clamp(450px,5vw,660px)] grid gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-6 grid-cols-1 grid-rows-4",
          sectionPadding
        )}
      >
        {CARDS.map((card, index) => {
          const baseClass =
            index === 0
              ? `row-span-2 sm:h-full sm:col-span-1`
              : `sm:col-span-1 items-end`;
          return (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              classes={baseClass}
            />
          );
        })}
      </section>
      {/* Product Carousel Section */}
      <section className={clsx("w-full flex flex-col gap-10 sm:gap-12 py-8 sm:pt-12", sectionPadding)}>
        <SectionHeader
          title={tComponent("sectionHeader.productCarousel.title")}
          link={tComponent("sectionHeader.productCarousel.link")}
        />
        <ProductCard discount={0} hasWishlistIcon={false} image={""} rating={0} title={""} netPrice={0} price={0} />
        <div>

        </div>
      </section>
    </div>
  );
}
