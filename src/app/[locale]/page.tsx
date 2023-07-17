import { Posts } from "@/app/[locale]/Posts";

export default async function Home() {
  return (
    <main className="space-y-5">
      <section>
        <div className="mt-2">Currently on sabbatical.</div>
        <ul className="mt-2 list-inside list-disc">
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
    </main>
  );
}
