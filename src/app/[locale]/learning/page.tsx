import { Link } from "@/components/LocaleNav";
import { Physics } from "@/components/Physics";
import { LinkPill } from "@/components/ui/LinkPill";

export default async function LearningPage() {
  const posts = (await import(`@/app/[locale]/physics.json`)).default["8.01sc"];

  return (
    <div className="">
      <h2 className="font-bold text-2xl mb-1">Learning</h2>
      <div className="sm:pl-12 max-w-lg space-y-3 mb-3">
        <p>
          I{"'"}m a proud alum of{" "}
          <LinkPill href="https://www.recurse.com/">Recurse Center</LinkPill>,
          which I attended back in 2018, and I{"'"}ve always let my curiosity
          take me where it goes.
        </p>
        <p>
          Right now, I{"'"}m taking physics classes back at Columbia, my alma
          mater, satisfying an academic itch which I{"'"}d set aside for years.
        </p>
      </div>
      <div className="">
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-2">
            Columbia PHYS UN3003: Mechanics
          </h3>
          <p>
            This class introduces Lagrangian and Hamiltonian mechanics, which
            let us solve many kinds of complex systems far more easily than we
            could with just the Newtonian method.
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-2">
            Columbia PHYS UN1602: Thermo, Elec, and Mag
          </h3>
          <p>
            This class works its way towards Maxwell{"'"}s equations, which are
            the mathematical foundation of electromagnetism.
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-2">
            MIT 8.01SC: Classical Mechanics
          </h3>
          <p className="mb-3">
            To prepare for the classes I{"'"}m taking, I spent December
            completing{" "}
            <LinkPill href="https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/">
              8.01: Classical Mechanics
            </LinkPill>{" "}
            through MIT OpenCourseware.{" "}
          </p>
          <p>
            Since the course doesn{"'"}t post solutions to their PSETs, I{"'"}m
            in the process of transcribing my notes here so others can use them
            as a reference.
          </p>
          <ul className="list-inside list-disc mt-4">
            {posts.map((post) => {
              return (
                <li key={post.id} className="underline">
                  <Link href={`/learning/physics/8.01sc/${post.id}`}>
                    {post.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

function getYear(str: string) {
  return str.slice(0, 4);
}
