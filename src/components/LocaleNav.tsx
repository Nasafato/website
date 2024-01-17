"use client";

import { useLocale } from "@/components/IntlProvider";
import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";
type LinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextLinkProps
> &
  NextLinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

export function Link(props: LinkProps) {
  const { href, ...rest } = props;
  const locale = useLocale();
  return <NextLink href={`/${locale}/${props.href}`} {...rest}></NextLink>;
}
