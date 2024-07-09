import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Layout/Header";

import { Locale, locales } from "@/i18n.config";
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, getMessages } from 'next-intl/server';
import useTextDirection from "@/hooks/useTextDirection";

const inter = Vazirmatn({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dir = useTextDirection();

  return (
    <LocaleLayoutContent locale={locale} dir={dir}>
      {children}
    </LocaleLayoutContent>
  );
}

async function LocaleLayoutContent({
  children,
  locale,
  dir
}: {
  children: React.ReactNode;
  locale: string;
  dir: string;
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
