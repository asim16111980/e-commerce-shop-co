"use client";

import clsx from "clsx";
import { Ticket, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const PromoBar = () => {
  const t = useTranslations("common");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={clsx(
        "w-full min-h-9 bg-gray-100 px-8 py-2",
        isOpen ? "block" : "hidden"
      )}
    >
      <div className="flex justify-center gap-5">
        <Ticket className="text-gray-900" />
        <p className="flex items-center gap-2 text-center text-xs font-semibold text-gray-700">
          {t("promoBar")}
        </p>
        <button
          type="button"
          aria-label="Close promo bar"
          onClick={() => setIsOpen(false)}
          className="size-4 text-gray-700"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default PromoBar;
