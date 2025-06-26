export interface TranslationMessages {
  [key: string]: string | TranslationMessages;
}

export type Messages = {
  common: TranslationMessages;
  component: TranslationMessages;
  header: TranslationMessages;
  home: TranslationMessages;
  metadata: TranslationMessages;
};
