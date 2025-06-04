 interface TranslationMessages {
  [key: string]: string | TranslationMessages;
}

export type Messages = {
  common: TranslationMessages;
  metadata: TranslationMessages;
};
