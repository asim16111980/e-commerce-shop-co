"use client";

import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { MoveRight, Ticket, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const PromoBar = () => {
  const t = useTranslations("common");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={clsx(
        "w-full min-h-9 md:h-10 bg-gray-100 px-8 py-2",
        isOpen ? "block" : "hidden"
      )}
    >
      <div className="size-full flex justify-center items-center gap-5">
        <div className="flex item-center gap-3 sm:mx-auto">
          <p className="flex items-center text-center gap-2 md:gap-3">
            <Ticket className="text-gray-900" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              {t("promoBar.text")}
            </span>
          </p>
          <span className="hidden sm:block ">
            <Link
              href=""
              className="flex items-center text-blue-500 gap-0.5 border-b border-blue-500"
            >
              <span className="capitalize text-sm font-medium">
                {t("promoBar.link")}
              </span>
            <MoveRight />
            </Link>
          </span>
        </div>
        <button
          type="button"
          aria-label="Close promo bar"
          onClick={() => setIsOpen(false)}
          className="size-4 flex items-center justify-center text-gray-700"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default PromoBar;
