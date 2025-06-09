import { CircleUser, Search, ShoppingCart } from "lucide-react";
import LangSwitcher from "./LangSwitcher";
import { useTranslations } from "next-intl";
import NavMenu from "./NavMenu";

const Header = () => {
  const t = useTranslations("header");

  return (
    <div className="w-full min-h-16 flex items-center gap-1 bg-white text-black shadow-md">
      <NavMenu />
      <h1 className="flex-1 text-2xl font-bold uppercase">{t("title")}</h1>
      <Search />
      <ShoppingCart />
      <CircleUser />
      <LangSwitcher />
    </div>
  );
};

export default Header;
