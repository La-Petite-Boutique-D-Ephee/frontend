"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { navigation } from "./navigation.js";

export function ContentMobile({ title, category }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-center gap-7 px-4">
      <h2 className="text-2xl">{title}</h2>
      <ul className="flex flex-col justify-center gap-4">
        {navigation
          .filter((nav) => {
            return nav.category === `${category}`;
          })
          .map((result, index) => {
            const isActive = pathname === result.pathname;
            return (
              <li
                key={index}
                className={`text-lg ${
                  isActive ? "text-primary-500 font-bold" : ""
                }`}
              >
                <Link href={result.pathname}>{result.content}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
