import "./globals.css";

export const metadata = {
  title: "Fact-tory",
  description: "뉴스 편향성 분석 AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
