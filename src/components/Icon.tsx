import { ICONS, IconName } from "@/constants/icons";


const IconRenderer = ({ name, className }: IconRendererProps) => {
  const IconComponent = ICONS[name];
  return <IconComponent className={className} />;
};

export default IconRenderer;
