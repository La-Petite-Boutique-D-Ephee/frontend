"use client";

import { ContentDesktop } from "@/components/layout/navigation/ContentDesktop.jsx";

export function Desktop() {
  return (
    <>
      <section className="hidden lg:flex lg:gap-8">
        <ContentDesktop title="Navigations" category="navigation" />
        <ContentDesktop title="Mon Compte" category="compte" />
        <ContentDesktop title="Informations" category="informations" />
      </section>
    </>
  );
}
