/* eslint-disable react/no-unescaped-entities */
import Link from "next/link.js";

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="text-center text-3xl">
        Oops, Page non trouvée |
        <Link
          href="/"
          className="transition-colors duration-300 ease-in-out hover:text-primary-250"
        >
          Retourner à l'acceuil
        </Link>
      </h1>
    </main>
  );
}
