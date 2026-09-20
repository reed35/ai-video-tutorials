import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "成片拆解 · AI 视频教程",
  description: "看 30 秒成片，照着步骤复刻。每一个大师，都从小白开始",
  icons: {
    icon: "/brand/mark.png",
    apple: "/brand/mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
