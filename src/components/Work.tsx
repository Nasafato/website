import { Footnote } from "@/components/ui/Footnote";
import { LinkPill } from "@/components/ui/LinkPill";

export function Work() {
  return (
    <div className="space-y-2">
      <p>
        A few years ago, my friends and I founded a startup called{" "}
        <LinkPill href="https://revv.xyz">Revv</LinkPill>
        <Footnote content="The team has since pivoted.">[1]</Footnote>. The four
        of us dug deep into the crypto options trading landscape and built a
        non-custodial derivatives exchange on Solana called{" "}
        <LinkPill href="https://www.strike.trade/">Strike</LinkPill>, to solve
        the problems outlined{" "}
        <LinkPill href="https://web.archive.org/web/20230402061306/https://revv.xyz/writing/showcasing-strike">
          here
        </LinkPill>
        .
      </p>
      <h2>More recently, have worked on:</h2>
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
      <p>
        I started my career at Affirm, where I worked on core checkout, the
        merchant integration, and their credit waterfall flow, before continuing
        on to Front, where I worked on onboarding, and Kojo, where I worked on
        their integrations team.
      </p>
    </div>
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
