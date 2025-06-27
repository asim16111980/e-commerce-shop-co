import { Link } from "@/i18n/navigation";
import { cardProps } from "@/types/components";
import clsx from "clsx";
import { MoveLeft, MoveRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Card = ({ title, image,classes }: cardProps) => {
  const tComponent = useTranslations("component");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  return (
    <div className={clsx("relative flex flex-wrap items-end bg-gray-100 text-gray-900 p-8",classes)}>
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="capitalize sm:text-4xl text-3xl font-medium">{tComponent(`card.${title}`)}</h3>
          <span className="w-fit">
            <Link
              href="#"
              className="flex items-center gap-1 border-b border-b-gray-900"
            >
              <span className="capitalize sm:text-base text-sm font-medium">
                {tCommon("shopLink")}
              </span>
              {locale === "ar" ? <MoveLeft /> : <MoveRight />}
            </Link>
          </span>
          </div>
          <Image src={`/images/cards/${image}`} alt={image} fill className="mix-blend-multiply"/>
    </div>
  );
};

export default Card;
