import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/icons.css";
import NavBar from "@/components/Layout/NavBar";

export const metadata: Metadata = {
  title: "Fitculator",
  description: "운동에 진심인 당신을 위한 운동량 계산기",
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.className} scroll-smooth`}>
      <body className={`${pretendard.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
