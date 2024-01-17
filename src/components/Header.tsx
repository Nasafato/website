import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/app/[locale]/logo";

export function Header() {
  return (
    <header className="flex mb-8 justify-between items-center">
      <Logo />
      <ThemeToggle />
    </header>
  );
}
