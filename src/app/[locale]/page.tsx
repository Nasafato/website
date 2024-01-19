import { Posts } from "@/components/Posts";
import { Work } from "@/components/Work";
import { Physics } from "@/components/Physics";
import { Summary } from "@/components/Summary";
import { LinkPill } from "@/components/ui/LinkPill";
import { Footnote } from "@/components/ui/Footnote";

export default async function Home() {
  return (
    <main className="space-y-2">
      <section>
        <p>
          I last founded a startup called{" "}
          <LinkPill href="https://revv.xyz">Revv</LinkPill> with some of my
          friends who have worked at Morgan Stanley and Bridgewater
          <Footnote content="The team has since pivoted.">[1]</Footnote>. The
          four of us dug deep into the crypto options trading landscape and
          built a non-custodial derivatives exchange on Solana called{" "}
          <LinkPill href="https://www.strike.trade/">Strike</LinkPill>, to solve
          the problems outlined{" "}
          <LinkPill href="https://web.archive.org/web/20230402061306/https://revv.xyz/writing/showcasing-strike">
            here
          </LinkPill>
          .
        </p>{" "}
      </section>
    </main>
  );
}
