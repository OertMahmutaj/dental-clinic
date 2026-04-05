import type { Metadata } from 'next';
import '@/lib/config.fontawesome';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeWrapper, { Header } from '@/components/ThemeWrapper';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Klinika Dentare Adi Dent - Tiranë',
  description:
    'Shërbime dentare profesionale në zemër të Tiranës. Higjiena, estetika, implante dhe ortodonci.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body className={GeistSans.variable}>
        <StyledComponentsRegistry>
          <ThemeWrapper>
            <Header />
            {children}
            <Analytics />
          </ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}