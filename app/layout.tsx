// app/layout.tsx
import Header from './components/header';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
