import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeWrapper from '@/components/ThemeWrapper';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

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
      <body className={`${inter.variable} ${poppins.variable}`}>
        <StyledComponentsRegistry>
          <ThemeWrapper>{children}</ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}