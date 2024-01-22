import { Link } from "@/components/LocaleNav";
import { LinkPill } from "@/components/ui/LinkPill";

export async function Physics() {
  return (
    <div>
      <h2 className="font-semibold">Physics</h2>
      <p>
        I{"'"}ve been restudying physics and am in the process of transcribing
        my{" "}
        <LinkPill href="https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/">
          8.01
        </LinkPill>{" "}
        PSETs into an online format.
      </p>
    </div>
  );
}

function getYear(str: string) {
  return str.slice(0, 4);
}
