import { ICONS } from "@/constants/icons";

type IconRendererProps = {
    name: IconName;
    className?: string;
  };
  
  export type IconName = keyof typeof ICONS;