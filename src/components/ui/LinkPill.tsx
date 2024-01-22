export function LinkPill(props: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={props.href}
      className={`self-start underline underline-offset-1 ${props.className} flex-shrink-0 hover:text-gray-400`}
    >
      {props.children}
    </a>
  );
}
