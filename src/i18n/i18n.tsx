import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  defaultTranslationValues: {
    br: () => <br />,
  },
  messages: (await import(`./${locale}.json`)).default,
}));