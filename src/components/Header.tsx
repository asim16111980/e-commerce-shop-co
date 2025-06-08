import { CircleUser, Menu, Search, ShoppingCart } from "lucide-react";
import LangSwitcher from "./LangSwitcher";
import { useTranslations } from "next-intl";
import NavMenu from "./NavMenu";

const Header = () => {
  const t = useTranslations("header");

  return (
    <div className="flex items-center bg-white text-black">
      <NavMenu />
      <h1 className="text-2xl font-bold uppercase">{t("title")}</h1>
      <Search />
      <ShoppingCart />
      <CircleUser />
      <LangSwitcher />
    </div>
  );
};

export default Header;
