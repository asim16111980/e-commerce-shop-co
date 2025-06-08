"use client";

import { Menu, MenuButton, MenuItem, MenuItems,Transition } from "@headlessui/react";
import { ChevronDown, Check } from "lucide-react";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "@/types/languages";
import { LANGUAGE_LABELS } from "@/constants/locales";
import { Fragment } from "react";
import { clsx } from "clsx";
const LangSwitcher = () => {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <Menu as="div" className="w-fit ms-auto">
        {({ open }) => (
      <>
        <MenuButton className="flex items-center gap-1 rounded-3xl border px-2 py-1 bg-white text-black text-xs data-[active]:ring-2 data-[active]:ring-blue-300">
          {LANGUAGE_LABELS[currentLocale]}
          <ChevronDown
            className={clsx(
              "size-4 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            className="absolute mt-2 rounded bg-white p-2 shadow-lg z-10 flex flex-col gap-2 text-black"
            anchor={{ to: "bottom", gap: 8 }}
          >
            {routing.locales.map((locale) => (
              <MenuItem
                key={locale}
                as="div"
                onClick={() => handleChangeLocale(locale)}
                className="flex items-center justify-between gap-2 rounded px-2 py-1 text-sm transition-colors data-[focus]:bg-gray-100 cursor-pointer"
              >
                {LANGUAGE_LABELS[locale]}

                <span
                  className={clsx(
                    "transition-opacity duration-200",
                    currentLocale === locale ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Check className="size-4 text-green-600" />
                </span>
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </>
    )}
      {/* <MenuButton className="flex items-center gap-1 rounded-3xl border px-2 py-1 bg-white text-black text-xs data-[active]:ring-2 data-[active]:ring-blue-300">
        {LANGUAGE_LABELS[currentLocale]}
        <ChevronDown className="size-4" />
      </MenuButton>

      <MenuItems
        className="absolute mt-2 min-w-full rounded bg-white p-2 shadow-lg z-10 flex flex-col gap-2 text-black data-[open]:animate-fadeIn"
        anchor={{ to: "bottom", gap: 8 }}
      >
        {routing.locales.map((locale) => (
          <MenuItem
            key={locale}
            as="div"
            onClick={() => handleChangeLocale(locale)}
            className="flex items-center justify-between gap-2 rounded px-2 py-1 text-sm transition-colors data-[focus]:bg-gray-100"
          >
            {LANGUAGE_LABELS[locale]}
            {currentLocale === locale && (
              <Check className="size-4 text-green-600" />
            )}
          </MenuItem>
        ))}
      </MenuItems> */}
    </Menu>
  );
};

export default LangSwitcher;

// "use client";

// import { LANGUAGE_LABELS } from "@/Constants/locales";
// // import { usePathname, useRouter } from "@/i18n/navigation";
// import { routing } from "@/i18n/routing";
// import { Locale } from "@/types/languages";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { Check, ChevronDown } from "lucide-react";
// // import { useLocale, useTranslations } from "next-intl";
// import { useLocale } from "next-intl";

// // import { useState } from "react";
// // import Flag from "react-world-flags";

// const LangSwitcher = () => {
//   // const router = useRouter();
//   // const pathname = usePathname();
//   const currentLocale = useLocale() as Locale;
//   // const t = useTranslations("common");
//   // const [openList, setOpenList] = useState(false);
//   // const langsCode = { ar: "eg", en: "gb" } as const;

//   // const handleSwitchLocale = (newLocale: string) => {
//   //   router.replace(pathname, { locale: newLocale });
//   //   setOpenList(false);
//   // };

//   return (
//     <div className="w-fit relative bg-transparent ms-auto">
//       <Menu>
//         <MenuButton data-active className="data-active:text-red-600 w-full flex items-center gap-1 bg-white text-black rounded-3xl p-1">
//           {LANGUAGE_LABELS[currentLocale]} <ChevronDown className="size-4" />
//         </MenuButton>
//         <MenuItems
//           className={`min-w-full flex flex-col gap-2 p-1 rounded shadow-md absolute mt-2 bg-white text-black z-10 `}
//         >
//           {routing.locales.map((locale) => {
//             return (
//               <MenuItem key={locale}>
//                 <div>
//                   {LANGUAGE_LABELS[locale]}
//                   <Check
//                     className={`size-4 text-green-700 ${
//                       currentLocale === locale ? "visible" : "invisible"
//                     }`}
//                   />
//                 </div>
//               </MenuItem>
//             );
//           })}
//         </MenuItems>
//       </Menu>
//     </div>

//     // <div className="w-fit relative bg-transparent ms-auto">
//     //   <button
//     //     type="button"
//     //     onClick={() => setOpenList((val) => !val)}
//     //     className="w-full flex items-center gap-1 bg-white text-black rounded-3xl shadow-lg p-1"
//     //   >
//     //     <Flag code={langsCode[currentLocale]} className="size-4" />
//     //     <ChevronDown className="size-4" />
//     //   </button>
//     //   <ul
//     //     className={`min-w-full flex flex-col gap-2 p-1 rounded shadow-md absolute mt-2 bg-white text-black z-10 ${
//     //       openList ? "block" : "hidden"
//     //     } ${currentLocale === "ar" ? "right-0" : "left-0"}`}
//     //   >
//     //     {routing.locales.map((lang) => {
//     //       return (
//     //         <li
//     //           key={lang}
//     //           onClick={() => handleSwitchLocale(lang)}
//     //           className="flex items-center gap-1"
//     //         >
//     //           <Flag code={langsCode[lang]} className="size-4" />
//     //           <span className="hidden">{t(`langs.${lang}`)}</span>
//     //           <Check
//     //             className={`size-4 text-green-700 ${
//     //               currentLocale === lang ? "visible" : "invisible"
//     //             }`}
//     //           />
//     //         </li>
//     //       );
//     //     })}
//     //   </ul>
//     // </div>
//   );
// };

// export default LangSwitcher;
