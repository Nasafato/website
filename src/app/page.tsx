import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="font-bold">Alan Gou</h1>
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
    </main>
  );
}
