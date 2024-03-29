import Link from "next/link.js";
import { navigation } from "../navigation/navigation.js";

export function Navigation({ title, category }) {
  return (
    <div className="flex flex-col items-center justify-center gap-7 lg:w-[60%] lg:items-start lg:justify-around">
      <h2 className="text-2xl font-bold text-primary-500">{title}</h2>
      <ul className="flex flex-col items-center justify-center gap-4 lg:items-start">
        {navigation
          .filter((nav) => {
            return nav.category === `${category}`;
          })
          .map((result, index) => {
            return (
              <li
                key={index}
                className="text-body text-base font-bold lg:text-left"
              >
                <Link href={result.pathname}>{result.content}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
