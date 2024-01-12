import { Posts } from "@/app/[locale]/Posts";
import { Physics } from "@/app/[locale]/physics/Physics";

function LinkPill(props: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={props.href}
      className={`self-start underline ${props.className} flex-shrink-0`}
    >
      {props.children}
    </a>
  );
}

function Description(props: { children: React.ReactNode }) {
  return <div className="">{props.children}</div>;
}

function LineItem(props: { children: React.ReactNode }) {
  return <li className="">{props.children}</li>;
}

const links = [
  {
    href: "https://magnet.run",
    description: "in-browser IDE with a built-in AI assistant",
    displayLabel: "magnet.run",
  },
  {
    href: "https://toolkit.ai",
    description:
      "desktop-based AI assistant that interfaces with your personal workflows and screen context",
    displayLabel: "toolkit.ai",
  },
  {
    href: "https://www.strike.trade",
    description: "options exchange built on the Solana blockchain",
    displayLabel: "strike.trade",
  },
  {
    href: "https://twitter.com/revv_xyz",
    description:
      "startup I cofounded to transform derivatives trading in the blockchain ecosystem",
    displayLabel: "Revv",
  },
  {
    href: "https://daodejing.app/en/verses/chinese",
    description: "PWA to read and memorize the Daodejing.",
    displayLabel: "daodejing.app",
  },
];

export default async function Home() {
  return (
    <main className="space-y-5">
      <section>
        <div className="mt-2">
          Currently on sabbatical. Doing work that fits my fancy.
        </div>
      </section>
      <section>
        <h2>Recently, have worked on:</h2>
        <ul className="mt-2 space-y-1 ">
          {links.map((link) => {
            return (
              <LineItem key={link.href}>
                <LinkPill href={link.href}>{link.displayLabel}</LinkPill>
                <Description>{link.description}</Description>
              </LineItem>
            );
          })}
        </ul>
      </section>
      <section>
        <Posts />
      </section>
      <section>
        <Physics />
      </section>
    </main>
  );
}
