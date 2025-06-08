export interface TranslationMessages {
  [key: string]: string | TranslationMessages;
}

export type Messages = {
  common: TranslationMessages;
  header: TranslationMessages;
  homepage: TranslationMessages;
  metadata: TranslationMessages;
};
