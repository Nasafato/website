"use client";
import { Link } from "@/components/LocaleNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    label: "work",
    href: "work",
  },
  {
    label: "writing",
    href: "writing",
  },
];

export function Header() {
  const pathname = usePathname();

  const matchingNavLink = NavLinks.find((link) => {
    return pathname.includes(link.href);
  });

  return (
    <header className="flex mb-8 justify-between items-start sm:items-center print:hidden">
      <div className="text-md md:text-lg whitespace-nowrap font-semibold sm:flex items-center">
        <Link
          href="/"
          className="block hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] p-2 rounded-sm -ml-2 transition-[background-color]"
        >
          Alan Gou
        </Link>
        {matchingNavLink ? (
          <div className="flex items-center">
            <span className="hidden sm:block text-sm font-normal ml-1 mr-3">
              /
            </span>
            <span className="font-normal text-lg capitalize -mt-2 sm:mt-0">
              {matchingNavLink.label}
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-x-4 gap-y-2">
        <nav>
          <ul className="sm:flex justify-between gap-x-4">
            {NavLinks.map((link) => {
              let active = false;
              if (pathname.includes(link.href)) {
                active = true;
              }
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${
                      active && "underline"
                    } block p-1 underline-offset-4 hover:text-gray-400 hover:underline`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
