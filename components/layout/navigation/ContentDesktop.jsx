"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { useState } from "react";
import isConnected from "../../../app/utils/isConnected.js";
import { navigation } from "./navigation.js";
export function ContentDesktop({ title, category }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState({});

  const handleMouseEnter = (menuName) => {
    setOpenMenu({ [menuName]: true });
  };

  const handleMouseLeave = () => {
    setOpenMenu({});
  };

  return (
    <>
      <div
        onMouseEnter={() => handleMouseEnter(`${category}`)}
        onMouseLeave={handleMouseLeave}
        className="dropdown relative flex flex-col"
      >
        <button className="text-lg transition-colors duration-300 ease-in-out hover:text-primary-500">
          {title}
        </button>
        <div
          className={`dropdown-content absolute left-1/2 top-14 w-64 -translate-x-1/2 space-y-4 rounded-md border border-primary-500 bg-background-500 p-4 shadow-md ${
            openMenu[`${category}`] ? "open" : ""
          }`}
        >
          {navigation
            .filter((nav) => {
              if (isConnected() && nav.online) {
                return false;
              }
              return nav.category === `${category}`;
            })
            .map((result, index) => {
              const isActive = pathname === result.pathname;
              return (
                <ul
                  key={index}
                  className={`text-center text-lg transition-colors duration-300 ease-in-out hover:text-primary-500 ${
                    isActive ? "font-bold text-primary-500" : ""
                  }`}
                >
                  <li>
                    <Link href={result.pathname}>{result.content}</Link>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
    </>
  );
}
