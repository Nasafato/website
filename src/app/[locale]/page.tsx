import { Posts } from "@/app/[locale]/Posts";
import { Physics } from "@/app/[locale]/physics/Physics";

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
            <a href="https://magnet.run" className="underline">
              magnet.run
            </a>
          </li>
          <li>
            <a href="https://toolkit.ai" className="underline">
              toolkit.ai
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
          <li>
            <a
              href="https://daodejing.app/en/verses/chinese"
              className="underline"
            >
              Daodejing.app
            </a>
          </li>
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
