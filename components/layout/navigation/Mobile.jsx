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
        className={`flex-col gap-8 flex pb-32 navigation ${
          isOpen ? "active lg:hidden" : "lg:hidden"
        }`}
      >
        <div
          className={`${
            isOpen
              ? "bg-background-500/70 backdrop-blur-sm shadow-sm sticky top-0"
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
