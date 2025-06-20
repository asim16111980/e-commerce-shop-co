import { CommonLinks, UserLinks } from "@/types/links";

const COMMON_LINKS: CommonLinks[] = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "shop",
    href: "/shop",
    nested: [
      { label: "category 1", href: "/shop/category1" },
      { label: "category 2", href: "/shop/category2" },
    ],
  },
  {
    label: "product",
    href: "/product",
    nested: [
      { label: "product 1", href: "/product/1" },
      { label: "product 2", href: "/product/2" },
    ],
  },
  {
    label: "contactUs",
    href: "/contact-us",
  },
];

const USER_LINKS: UserLinks[] = [
  { label: "cart", href: "/cart", icon: "ShoppingBag" },
  { label: "wishlist", href: "/wishlist", icon: "Heart" },
];

export { COMMON_LINKS, USER_LINKS };
