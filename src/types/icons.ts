import { ICONS } from "@/constants/icons";

export type IconName = keyof typeof ICONS;
export type IconRendererProps = {
  name: IconName;
  className?: string;
};
