import { Link } from "@/components/LocaleNav";
import { Footnote } from "@/components/ui/Footnote";
import { LinkPill } from "@/components/ui/LinkPill";

export default async function Home() {
  return (
    <main className="space-y-4">
      <p>
        I grew up on Legos, Star Wars, and Harry Potter, and any other books I
        could get my hands on. My two favorites are{" "}
        <i>The Brothers Karamazov</i> and <i>East of Eden</i>.
      </p>
      <p>
        The greatest thing I have ever read, though, is the Bhagavad Gita, which
        I don{"'"}t count as a book, because it belongs in an entirely different
        category.
      </p>
      <p>
        I last founded a startup called{" "}
        <LinkPill href="https://revv.xyz">Revv</LinkPill>. We dug deep into the
        crypto options trading landscape and built a non-custodial derivatives
        exchange on Solana called{" "}
        <LinkPill href="https://www.strike.trade/">Strike</LinkPill>, to solve
        the problems outlined{" "}
        <LinkPill href="https://web.archive.org/web/20230402061306/https://revv.xyz/writing/showcasing-strike">
          here
        </LinkPill>
        .
      </p>
      <p>
        You can see my work history{" "}
        <Link
          href="/work"
          className="underline underline-offset-1 hover:text-gray-400"
        >
          here
        </Link>
        , or my learning journey{" "}
        <Link
          href="/learning"
          className="underline underline-offset-1 hover:text-gray-400"
        >
          here
        </Link>
        .
      </p>
      <p>
        I made a site to read and memorize the Daodejing{" "}
        <LinkPill href="https://daodejing.app/en/verses/chinese">here</LinkPill>
        .
      </p>
    </main>
  );
}
