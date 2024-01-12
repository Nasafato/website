import { Link } from "@/app/[locale]/LocaleNav";

export async function Physics() {
  const posts = (await import(`@/app/[locale]/physics.json`)).default[
    "18.01sc"
  ];

  return (
    <div>
      <h2 className="mb-2">Physics 18.01 PSETs</h2>
      <ul className="list-inside list-disc">
        {posts.map((post) => {
          return (
            <li key={post.id} className="underline">
              <Link href={`/physics/18.01sc/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function getYear(str: string) {
  return str.slice(0, 4);
}
