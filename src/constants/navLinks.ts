const COMMON_LINKS = [
  {
    link: "home",
    href: "/",
  },
  {
    link: "shop",
    nested: [{ link: "", href: "" }],
  },
  {
    link: "product",
    nested: [{ link: "", href: "" }],
  },
  {
    link: "contactus",
    href: "/contactus",
  },
] as const;

const USER_LINKS = [{link:"cart",href:"/cart",icon:"ShoppingBag"},{link:"wishlist",href:"/wishlist",icon:"Heart"}] as const;

export { COMMON_LINKS, USER_LINKS };
