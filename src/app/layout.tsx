import "../styles/globals.css";

export const metadata = {
  title: "Fact-tory",
  description: "뉴스 편향성 분석 AI",
  icons: {
    icon: "img/web_favicon.ico",
  },
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
