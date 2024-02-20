import { Header } from "../../../components/layout/Header.jsx";
import { Footer } from "../../../components/layout/footer/Footer.jsx";

export default function InscriptionLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
