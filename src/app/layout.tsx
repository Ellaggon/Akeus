import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "app/components/shared/Header/Header";
import { Footer } from "app/components/shared/Footer/Footer";
import Providers from "./Providers";

const roboto = Roboto({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
