export function LinkPill(props: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={props.href}
      className={`self-start underline underline-offset-2 ${props.className} flex-shrink-0`}
    >
      {props.children}
    </a>
  );
}
