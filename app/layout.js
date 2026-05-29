import "./globals.css";

export const metadata = {
  title: "WhyEd — Ingegnere del Suono & Costruttore AI",
  description:
    "Edoardo Porcu — WhyEd. Ingegnere del suono, produttore e sviluppatore di strumenti audio con intelligenza artificiale. Cagliari → Londra → everywhere.",
  openGraph: {
    title: "WhyEd — Ingegnere del Suono & Costruttore AI",
    description: "Ingegnere del suono e sviluppatore di strumenti audio AI. 15 progetti, 783M token, 5 app macOS native.",
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
