import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chayakorn Wimoonchart — AI & Digital Innovation",
  description: "Personal portfolio of Chayakorn Wimoonchart, focused on AI, automation and digital innovation.",
  openGraph: {
    title: "Chayakorn Wimoonchart — AI & Digital Innovation",
    description: "AI, Automation and Digital Innovation for business and learning.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}