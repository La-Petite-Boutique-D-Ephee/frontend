"use cleint";

import { Header } from "../components/layout/Header.jsx";
import { HeroBanner } from "../components/layout/HeroBanner.jsx";
import { Reseaux } from "../components/layout/Reseaux.jsx";
import { SommeNous } from "../components/layout/SommeNous.jsx";
import { Trust } from "../components/layout/Trust.jsx";
import { Category } from "../components/layout/category/Category.jsx";
import { Footer } from "../components/layout/footer/Footer.jsx";
import { SelectionOfMoment } from "../components/layout/selectionOfMoment/SelectionOfMoment.jsx";
import { Articles } from "../components/layout/slider/Articles.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <main className="container">
        <Category />
        <SelectionOfMoment />
        <Trust />
        <SommeNous />
        <Articles />
        <Reseaux />
      </main>
      <Footer />
    </>
  );
}
