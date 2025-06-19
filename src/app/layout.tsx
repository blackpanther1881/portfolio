import "../styles/globals.css";
import { Metadata } from "next";
import Script from "next/script";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Footer from "@/containers/footer";
import Header from "@/containers/header";
import theme from "@/styles/theme";
const baseUrl = "https://www.rajuvemula.xyz";

const GA_TRACKING_ID = "G-ZPL0392487";

export const metadata: Metadata = {
  title: "Rj.Vemula - Frontend Engineer & Web Experience Crafter",
  description:
    "Creative Frontend developer building modern apps with React, Next.js & TypeScript. Focused on clean code, smooth UX, and Web2/Web3 experiences.",
  keywords: "frontend developer, ui, ux, web3, web3",
  openGraph: {
    title: "Rj.Vemula - Frontend Engineer & Web Experience Crafter",
    description:
      "Creative Frontend developer building modern apps with React, Next.js & TypeScript. Focused on clean code, smooth UX, and Web2/Web3 experiences.",
    url: "https://gitmate.ai",
    siteName: "Rj.Vemula",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rj.Vemula - Frontend Engineer & Web Experience Crafter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rj.Vemula - Frontend Engineer & Web Experience Crafter",
    description:
      "Creative Frontend developer building modern apps with React, Next.js & TypeScript. Focused on clean code, smooth UX, and Web2/Web3 experiences.",
    images: [`${baseUrl}/images/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        {/* eslint-disable-next-line @next/next/inline-script-id */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <title>Rj.Vemula - Frontend Engineer & Web Experience Crafter</title>
        <meta
          name="description"
          content="Creative Frontend developer building modern apps with React, Next.js & TypeScript. Focused on clean code, smooth UX, and Web2/Web3 experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Stick+No+Bills:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Box pos={"fixed"} width="100%" zIndex="sticky">
            <Header />
          </Box>
          <Box>{children}</Box>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
