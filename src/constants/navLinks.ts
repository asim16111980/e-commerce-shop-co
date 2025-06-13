export const navLinks = [
  {
    link: "home",
    href: "/",
  },
  {
    link: "shop",
    href: "/shop",
    nested: [{ link: '', href: '' }],
  },
  {
    link: "product",
    href: "/product",
    nested: [{ link: '', href: '' }],
  },
  {
    link: "contactus",
    href: "/contactus",
  },
] as const;
