import { Link } from "@/i18n/navigation";
import { BannerCardProps } from "@/types/components";
import clsx from "clsx";
import { MoveLeft, MoveRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Card = ({ title, image, classes }: BannerCardProps) => {
  const tComponent = useTranslations("component");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  return (
    <section
      className={clsx(
        "relative flex flex-wrap bg-gray-100 text-gray-900 p-8",
        classes
      )}
    >
      <div className="w-full h-auto flex flex-col gap-2 sm:gap-3">
        <h3 className="capitalize md:text-3xl text-2xl font-medium">
          {tComponent(`card.${title}`)}
        </h3>
        <Link
          href="#"
          className="group w-fit flex items-center gap-1 border-b border-b-gray-900"
        >
          <span className="capitalize sm:text-base text-sm font-medium">
            {tCommon("shopLink")}
          </span>
          {locale === "ar" ? (
            <MoveLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
          ) : (
            <MoveRight className="size-4 group-hover:-translate-x-0.5 transition-transform" />
          )}
        </Link>
      </div>
      <Image
        src={`/images/cards/${image}`}
        alt={image}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="mix-blend-multiply pointer-events-none select-none"
      />
    </section>
  );
};

export default Card;
