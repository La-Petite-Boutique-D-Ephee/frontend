"use client";

import Image from "next/image.js";
import Link from "next/link.js";
import { useCallback, useEffect, useRef, useState } from "react";
import logo from "../../../public/assets/images/logo/logo.png";
import { ContentMobile } from "./ContentMobile.jsx";
import { MenuButton } from "./MenuButton.jsx";

export function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundRef = useRef(null);
  const bodyRef = useRef(null);

  const ACTIVE_CLASS = "active";
  const NO_SCROLL_CLASS = "no-scroll";

  const handleClick = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const background = (backgroundRef.current =
      document.querySelector("#background"));
    const body = (bodyRef.current = document.querySelector("body"));

    if (background && body) {
      if (isOpen) {
        background.classList.add(ACTIVE_CLASS);
        body.classList.add(NO_SCROLL_CLASS);
      } else {
        background.classList.remove(ACTIVE_CLASS);
        body.classList.remove(NO_SCROLL_CLASS);
      }
    }

    return () => {
      if (background && body) {
        background.classList.remove(ACTIVE_CLASS);
        body.classList.remove(NO_SCROLL_CLASS);
      }
    };
  }, [isOpen]);

  return (
    <>
      <MenuButton isOpen={isOpen} handleClick={handleClick} />
      <div
        onClick={handleClick}
        id="background"
        className="backgroundNav cursor-pointer"
      ></div>
      <nav
        id="nav"
        className={`absolute right-0 top-0 z-[1] flex h-screen flex-col gap-8 overflow-y-scroll bg-background-500 pb-32 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "active translate-x-[0%]" : "translate-x-full lg:hidden"
        }`}
      >
        <div
          className={`${
            isOpen
              ? "sticky top-0 bg-background-500/70 shadow-sm backdrop-blur-sm"
              : ""
          }`}
        >
          <Link href="/">
            <Image
              src={logo}
              width="124"
              height="124"
              priority="true"
              alt="Logo de La Petite Boutique D'Ephée"
            />
          </Link>
        </div>
        <ContentMobile title="Navigation" category="navigation" />
        <ContentMobile title="Mon Compte" category="compte" />
        <ContentMobile title="Informations" category="informations" />
      </nav>
    </>
  );
}
