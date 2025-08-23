import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js 학습중",
  description: "Next.js를 배우는 중이다.",
  keywords: ["Next.js", "React", "개발", "프론트엔드"],
  authors: [{ name: "개발자" }],
  openGraph: {
    title: "학습 학습",
    description: "Next.js 학습",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
		<Navigation />
        {children}
      </body>
    </html>
  );
}
