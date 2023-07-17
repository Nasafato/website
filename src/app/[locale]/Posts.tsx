import { Link } from "@/app/[locale]/LocaleNav";

export async function Posts() {
  const posts = (await import(`@/app/[locale]/posts.json`)).default.posts;

  return (
    <div>
      <h2 className="mb-2">Posts</h2>
      <ul className="list-inside list-disc">
        {posts.map((post) => {
          return (
            <li key={post.id} className="underline">
              <Link href={`/${getYear(post.date)}/${post.id}`}>
                {post.title}
              </Link>
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
