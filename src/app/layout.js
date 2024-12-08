import "./globals.css";

export const metadata = {
  title: "Yacine Ayachi",
  description: "Yacine Ayachi's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
