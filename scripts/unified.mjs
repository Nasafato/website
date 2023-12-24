// import rehypeMathjax from "rehype-mathjax";
import rehypeMathjaxChtml from "rehype-mathjax/chtml";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import fs from "fs";
import { unified } from "unified";

const f = fs.readFileSync("scripts/test.md", "utf-8");

const file = await unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeMathjaxChtml, {
    chtml: {
      fontURL:
        "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/output/chtml/fonts/woff-v2",
      // "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
    },
  })
  .use(rehypeKatex)
  .use(rehypeStringify)
  .process(f);

console.log(String(file));
