
const langsCode = {
    ar: "eg",
    en: "gb",
  } as const;
  
 export type Locale = keyof typeof langsCode;