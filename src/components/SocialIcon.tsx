import { SocialIconProps } from "@/types/icons";
import { JSX } from "react";

const iconMap: Record<SocialIconProps["name"], JSX.Element> = {
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="size-full"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="size-full"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="size-full"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  linkedin: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.775 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM20.452 20.452h-3.56v-5.604c0-1.336-.027-3.054-1.861-3.054-1.864 0-2.15 1.454-2.15 2.957v5.701h-3.56V9h3.415v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.37 4.266 5.451v6.29z" />
    </svg>
  ),
  youtube: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a2.937 2.937 0 0 0-2.066-2.08C19.813 3.642 12 3.642 12 3.642s-7.813 0-9.432.464a2.937 2.937 0 0 0-2.066 2.08A30.46 30.46 0 0 0 0 12a30.46 30.46 0 0 0 .502 5.814 2.937 2.937 0 0 0 2.066 2.08c1.62.464 9.432.464 9.432.464s7.813 0 9.432-.464a2.937 2.937 0 0 0 2.066-2.08A30.46 30.46 0 0 0 24 12a30.46 30.46 0 0 0-.502-5.814zM9.545 15.568V8.432l6.272 3.568-6.272 3.568z" />
    </svg>
  ),
};

const SocialIcon = ({ name, className }: SocialIconProps) => {
  const icon = iconMap[name];
  if (!icon) return null;

  return <span className={className}>{icon}</span>;
};

export default SocialIcon;
