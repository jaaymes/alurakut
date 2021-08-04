import NextLink from "next/link";

type LinkProps = {
  href: string;
  children: string;
};

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
