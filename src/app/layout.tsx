import "../styles/globals.css";
import Providers from "./providers";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
