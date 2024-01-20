import { Work } from "@/components/Work";

import type { Metadata } from "next";

export const metadata = {
  title: "Alan Gou / Resume",
  description: "Engineer, writer, and twice a VC-backed founder.",
} as Metadata;

export default function WorkPage() {
  return <Work />;
}
