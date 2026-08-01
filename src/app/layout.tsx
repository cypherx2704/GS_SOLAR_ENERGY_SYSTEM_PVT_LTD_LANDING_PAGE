import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { QuoteModalProvider } from "@/components/layout/QuoteModalProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gssolar.example"),
  title: {
    default: "GS Solar — Power Your Future with Clean Solar Energy",
    template: "%s · GS Solar",
  },
  description:
    "GS Solar Energy System Pvt Ltd, Chennai — residential, commercial & industrial rooftop solar. Cut electricity bills by up to 90% with government-subsidy assistance under PM Surya Ghar.",
  keywords: [
    "solar Chennai",
    "rooftop solar",
    "PM Surya Ghar",
    "solar subsidy India",
    "on-grid solar",
    "commercial solar",
  ],
  icons: {
    icon: [{ url: "/logos/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "GS Solar — Clean Solar Energy for Homes & Business",
    description:
      "Chennai-based rooftop solar. Cut bills up to 90% with subsidy assistance.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>
          <QuoteModalProvider>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </QuoteModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
