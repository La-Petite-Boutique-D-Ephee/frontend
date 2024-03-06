"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "../../../app/providers/store.js";
import { navigation } from "./navigation.js";
export function ContentDesktop({ title, category }) {
  const user = useStore((state) => state.user);
  const fetchUser = useStore((state) => state.fetchUser);

  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState({});

  const handleMouseEnter = (menuName) => {
    setOpenMenu({ [menuName]: true });
  };

  const handleMouseLeave = () => {
    setOpenMenu({});
  };
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <div
        onMouseEnter={() => handleMouseEnter(`${category}`)}
        onMouseLeave={handleMouseLeave}
        className="dropdown flex flex-col relative"
      >
        <button className="hover:text-primary-500 transition-colors duration-300 ease-in-out text-lg">
          {title}
        </button>
        <div
          className={`dropdown-content space-y-4 absolute left-1/2 -translate-x-1/2 w-64 top-14 rounded-md shadow-md border border-primary-500 bg-background-500 p-4 ${
            openMenu[`${category}`] ? "open" : ""
          }`}
        >
          {navigation
            .filter((nav) => {
              if (user && nav.online) {
                return false;
              }
              return nav.category === `${category}`;
            })
            .map((result, index) => {
              const isActive = pathname === result.pathname;
              return (
                <ul
                  key={index}
                  className={`text-lg text-center hover:text-primary-500 transition-colors duration-300 ease-in-out ${
                    isActive ? "text-primary-500 font-bold" : ""
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
