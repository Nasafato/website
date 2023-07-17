import { Container } from "@/app/[locale]/Container";
import { Header } from "@/app/[locale]/Header";
import { IntlProvider } from "@/app/[locale]/IntlProvider";
import { Locale, i18n } from "@/i18n-config";

export default async function LocaleLayout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const messages = await import(`@/locales/${params.locale}.json`);
  return (
    <IntlProvider locale={params.locale} messages={messages.default}>
      <Container>
        <Header />
        {children}
      </Container>
    </IntlProvider>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}
