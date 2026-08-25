import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wisdom Islamic Organisation | Kannur District Committee",
  description:
    "Official website of Wisdom Islamic Organisation, Kannur District Committee. Website coming soon.",
  icons: {
    icon: "/wisdom-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
