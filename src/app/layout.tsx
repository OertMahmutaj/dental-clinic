import type { Metadata } from 'next';
import '@/lib/config.fontawesome';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeWrapper from '@/components/ThemeWrapper';
import { Header } from '@/components/sections/Header';
import { GeistMono } from 'geist/font/mono'; // 🌟 Swapped to the elite monospace family
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
    <html 
      lang="sq" 
      className="scroll-smooth"
      suppressHydrationWarning={true} /* 🌟 Prevents theme layout blinking/mismatch logs */
    >
      <body className={GeistMono.variable}>
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