import { Logo } from "@/app/[locale]/logo";

export function Header() {
  return (
    <header className="flex mb-8">
      <Logo />
      <nav></nav>
    </header>
  );
}
