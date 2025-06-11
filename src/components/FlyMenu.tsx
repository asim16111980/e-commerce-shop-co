import { X } from "lucide-react";
import SearchBox from "./SearchBox";
import { useTranslations } from "next-intl";
import { navLinks } from "@/constants/navLinks";
import { Link } from "@/i18n/navigation";

const NavMenu = () => {
  const t = useTranslations("header");
  return (
    <div className="w-screen h-screen bg-black bg-opacity-35 absolute top-0 start-0 z-50">
      <div className="w-11/12 h-full bg-white p-6 flex flex-col">
        <div className="flex flex-col items-start gap-4">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-base font-medium text-black uppercase">
              {t("title")}
            </h1>
            <X className="text-gray-500" />
          </div>
          <SearchBox />
          <nav className="w-full flex flex-col justify-between">
            <ul className="flex flex-col gap-4">
              {navLinks.map((navLink) => (
                <li key={navLink.link} className="w-full h-10 border-b border-b-gray-200 transition duration-200 hover:bg-gray-100">
                  <Link  href={navLink.href} className="text-gray-900 text-sm font-medium">
                    {t(`navLabels.${navLink.link}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
