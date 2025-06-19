import { SocialIconProps } from "@/types/icons";
import { JSX } from "react";

const iconMap: Record<SocialIconProps["name"], JSX.Element> = {
  facebook: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="size-full"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  instagram: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke="#141718"
        strokeWidth="1.5"
      />
      <circle cx="18" cy="6" r="1" fill="#141718" />
      <circle cx="12" cy="12" r="5" stroke="#141718" strokeWidth="1.5" />
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="18"
        rx="4"
        stroke="#141718"
        strokeWidth="1.5"
      />
      <path
        d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const SocialIcon = ({ name, className }: SocialIconProps) => {
  const icon = iconMap[name];
  if (!icon) return null;

  return <span className={className}>{icon}</span>;
};

export default SocialIcon;
