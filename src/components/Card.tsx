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
    <div className={clsx("",classes)}>
      <div>
        <h3>{tComponent(`card.${title}`)}</h3>
        <p>
          <span className="hidden sm:block ">
            <Link
              href="#"
              className="flex items-center text-blue-500 gap-0.5 border-b border-blue-500"
            >
              <span className="capitalize text-sm font-medium">
                {tCommon("shopLink")}
              </span>
              {locale === "ar" ? <MoveLeft /> : <MoveRight />}
            </Link>
          </span>
        </p>
          </div>
          {/* <Image src={image} alt={image} width={10 } height={10 } />
           */}
          <Image src={image} alt={image}/>
    </div>
  );
};

export default Card;
