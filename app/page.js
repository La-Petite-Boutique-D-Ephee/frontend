import { Category } from "../components/layout/category/Category.jsx";
import { Header } from "../components/layout/Header.jsx";
import { HeroBanner } from "../components/layout/HeroBanner.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Category />
    </>
  );
}
