export const i18n = {
  locales: ["en", "zh"],
  defaultLocale: "en",
};

export type Locale = (typeof i18n.locales)[number];
