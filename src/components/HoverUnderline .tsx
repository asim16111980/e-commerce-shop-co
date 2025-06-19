import clsx from "clsx";
import { useLocale } from "next-intl";
const HoverUnderline = () => {
  const transitionClass = "transition duration-300 ease-in-out";
  const locale = useLocale();

  return (
    <span
      className={clsx(
        "absolute inset-0 scale-x-0 h-full group-hover:scale-x-100 border-b border-b-blue-500",
        transitionClass,
        locale === "ar" ? "origin-right" : "origin-left"
      )}
    ></span>
  );
};

export default HoverUnderline;
