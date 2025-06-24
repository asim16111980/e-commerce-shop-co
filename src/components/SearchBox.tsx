import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

const SearchBox = () => {
  const t = useTranslations("header");

  return (
    <div className="w-full h-11 flex items-center gap-2 bg-white border-gray-600 border rounded-md px-4">
      <Search className="min-w-4 min-h-4 text-black" />
      <input
        type="search"
        className="min-w-32 max-w-full flex-1 text-gray-600 border-0 outline-0 text-sm"
        placeholder={t("searchPlaceholder")}
      />
    </div>
  );
};

export default SearchBox;
