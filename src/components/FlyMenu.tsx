import { X } from "lucide-react";
import SearchBox from "./SearchBox";
import { useTranslations } from "next-intl";
import { navLinks } from "@/constants/navLinks";
import { Link } from "@/i18n/navigation";

const NavMenu = () => {
  const t = useTranslations("header");
  return (
    <div className="w-screen h-screen bg-black bg-opacity-35 absolute top-0 start-0 z-50">
      <div className="w-11/12 h-full bg-white p-6 flex flex-col items-start/">
        <div className="flex flex-col items-start gap-4">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-base font-medium text-black uppercase">
              {t("title")}
            </h1>
            <X className="text-gray-500" />
          </div>
          <SearchBox />
          <nav className="flex gap-4">
            <ul>
              {navLinks.map((navLink) => (
                <Link key={navLink.link} href={navLink.href}>
                  {t(`navLabels.${[navLink.link]}`)}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
