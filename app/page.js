import { Header } from "../components/layout/Header.jsx";
import { HeroBanner } from "../components/layout/HeroBanner.jsx";
import { SelectionOfMoment } from "../components/layout/SelectionOfMoment/SelectionOfMoment.jsx";
import { Category } from "../components/layout/category/Category.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Category />
      <SelectionOfMoment />
    </>
  );
}
