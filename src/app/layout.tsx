import { Philosopher } from "next/font/google";
import "./globals.css";
import { Header } from "app/components/shared/Header/Header";
import { Footer } from "app/components/shared/Footer/Footer";

const philosopher = Philosopher({ 
  weight: ["400", "700"],
  subsets: ["latin"], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={philosopher.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
