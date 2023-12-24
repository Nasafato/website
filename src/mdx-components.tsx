import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h2 className="text-lg font-semibold mb-2">{children}</h2>
    ),
    p: ({ children }) => <p className="mb-2">{children}</p>,
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-500 hover:underline hover:text-blue-600"
      >
        {children}
      </a>
    ),
  };
}
