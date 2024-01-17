import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { IntlProvider } from "@/components/IntlProvider";
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
