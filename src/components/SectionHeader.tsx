import { Link } from "@/i18n/navigation";
import { SectionHeaderProps } from "@/types/components";
import { MoveLeft, MoveRight } from "lucide-react";
import { useLocale } from "next-intl";

const SectionHeader = ({ title, link }: SectionHeaderProps) => {
  const locale = useLocale();
  return (
    <header className="w-full flex items-end justify-between">
      <h2 className="text-[clamp(34px,5vw,40px)] font-medium text-black">
        {title}
      </h2>
      <span className="w-fit">
        <Link
          href="#"
          className="flex items-center gap-1 text-sm sm:text-base font-medium text-gray-900 border-b border-b-gray-900"
        >
          <span className="capitalize sm:text-base text-sm font-medium">
            {link}
          </span>
          {locale === "ar" ? <MoveLeft /> : <MoveRight />}
        </Link>
      </span>
    </header>
  );
};

export default SectionHeader;
