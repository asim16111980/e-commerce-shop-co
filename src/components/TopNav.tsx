import { useTranslations } from "next-intl";

const TopNav = () => {
  const t = useTranslations("common");
  return (
    <div className="flex justify-center bg-black text-white">
      <p className="text-center py-1">
        <span className="text-xs">{t("topNav.text")}</span>
        <span className="text-xs font-bold">
          <a href="#">{t("topNav.link")}</a>
        </span>
      </p>
    </div>
  );
};

export default TopNav;
