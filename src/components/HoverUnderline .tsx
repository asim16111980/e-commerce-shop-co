import clsx from "clsx";
const HoverUnderline = () => {
  const transitionClass = "transition duration-300 ease-in-out";
  return (
    <span
      className={clsx(
        "absolute inset-0 origin-left scale-x-0 h-full group-hover:scale-x-100 border-b border-b-blue-600",
        transitionClass
      )}
    ></span>
  );
};

export default HoverUnderline;
