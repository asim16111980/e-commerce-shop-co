import { TranslationMessages } from "@/types/messages";

const namespaces = ["common", "header", "homepage", "metadata"] as const;

type Namespace = (typeof namespaces)[number];

type Messages = Record<Namespace, TranslationMessages>;

const getMessages = async (locale: string): Promise<Messages> => {
  const messages = await Promise.all(
    namespaces.map(async (ns) => {
      const messages = await import(`../../messages/${locale}/${ns}.json`);
      return [ns, messages.default] as const;
    })
  );

  return Object.fromEntries(messages) as Messages;
};

export default getMessages;
