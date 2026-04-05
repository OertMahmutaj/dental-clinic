import type { Metadata } from 'next';
import '@/lib/config.fontawesome';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeWrapper, { Header } from '@/components/ThemeWrapper';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

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
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <StyledComponentsRegistry>
          <ThemeWrapper>
            <Header />
            {children}
          </ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}