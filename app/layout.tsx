import "./globals.css";
import MainNavbar from "./MainNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Asher & Ashraf Superstore</title>
        <meta name="description" content="Asher and Ashraf Superstore" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <MainNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
