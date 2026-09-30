// app/layout.tsx
import './globals.css';
import { LanguageProvider } from './LanguageContext';

export const metadata = {
  title: 'Haiti Blockchain Innovation Lab',
  description: 'Cybersecurity, AI, and Blockchain Ecosystem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bgPrimary text-textMain">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}