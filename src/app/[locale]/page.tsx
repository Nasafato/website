import { Posts } from "@/components/Posts";
import { Work } from "@/components/Work";
import { Physics } from "@/components/Physics";
import { Summary } from "@/components/Summary";

export default async function Home() {
  return (
    <main className="space-y-2">
      <section>
        <Summary />
      </section>
      <section>
        <Work />
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
