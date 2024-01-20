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
    <header className="flex mb-8 justify-between items-center print:hidden">
      <span className="text-md md:text-lg whitespace-nowrap font-semibold flex items-center">
        <Link
          href="/"
          className="hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] p-2 rounded-sm -ml-2 transition-[background-color]"
        >
          Alan Gou
        </Link>
        {matchingNavLink ? (
          <div>
            <span className="text-sm font-normal ml-1 mr-3">/</span>
            <span className="font-normal">{matchingNavLink.label}</span>
          </div>
        ) : null}
      </span>

      <div className="flex justify-between items-center gap-x-4">
        <nav>
          <ul className="flex justify-between gap-x-4">
            {NavLinks.map((link) => {
              let active = false;
              if (pathname.includes(link.href)) {
                active = true;
              }
              console.log(pathname);
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${
                      active && "underline"
                    } underline-offset-4 hover:text-gray-400 hover:underline`}
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
