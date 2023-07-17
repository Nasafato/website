import { Posts } from "@/app/[locale]/Posts";

export default async function Home() {
  return (
    <main className="space-y-5">
      <section>
        <div className="mt-2">Currently on sabbatical.</div>
      </section>
      <section>
        <h2>Recently</h2>
        <ul className="mt-2 list-inside list-disc">
          <li>
            <a
              href="https://daodejing.app/en/verses/chinese"
              className="underline"
            >
              Daodejing.app
            </a>
          </li>
          <li>
            <a href="https://www.strike.trade" className="underline">
              strike.trade
            </a>
          </li>
          <li>
            <a href="https://twitter.com/revv_xyz" className="underline">
              Revv
            </a>
          </li>
        </ul>
      </section>
      <section>
        <Posts />
      </section>
    </main>
  );
}
