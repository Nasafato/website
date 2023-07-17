"use client";

import { Locale } from "@/i18n-config";
import { createContext, useContext } from "react";

type IntlContextProps = {
  locale: Locale;
  messages: Dict;
};

type Dict = {
  [key: string]: Dict | string;
};

export const IntlContext = createContext<IntlContextProps>({
  locale: "en",
  messages: {},
});

export function IntlProvider({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: Locale;
  messages: Dict;
}) {
  return (
    <IntlContext.Provider
      value={{
        locale,
        messages,
      }}
    >
      {children}
    </IntlContext.Provider>
  );
}

export function useLocale() {
  return useContext(IntlContext).locale;
}

export function useTranslations(key?: string) {
  const { messages } = useContext(IntlContext);

  return (key: string) => {
    const val = dotPath(key, messages);
    return val;
  };
}

function dotPath(path: string, obj: Dict) {
  const parts = path.split(".");
  let val: any = obj;
  for (const part of parts) {
    val = val[part];
    if (!val) {
      return undefined;
    }
  }
  return val;
}
