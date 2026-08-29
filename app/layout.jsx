import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TWOYGEN | Technical Innovation, Sustainable Tomorrow",
  description: "극저온·고압 가스 밸브 및 엔지니어링 솔루션 전문기업 투와이젠",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
