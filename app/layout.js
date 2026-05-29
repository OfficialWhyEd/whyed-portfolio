import "./globals.css";

export const metadata = {
  title: "WhyEd — Sound Engineer × Audio-Tech Developer",
  description:
    "Edoardo Porcu — WhyEd. Sound engineer, producer e sviluppatore di strumenti audio AI. Cagliari → London → worldwide.",
  openGraph: {
    title: "WhyEd — Sound Engineer × Audio-Tech Developer",
    description: "Sound engineer, producer e sviluppatore di strumenti audio AI.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
