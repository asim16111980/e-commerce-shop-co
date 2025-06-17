import { IconName } from "@/types/icons";

export type CommonLinks = {
  label: string;
  href?: string;
  nested?: {
    label: string;
    href: string;
  }[];
};

export type UserLinks = {
  label: string;
  href: string;
  icon: IconName;
};
