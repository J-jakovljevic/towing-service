import { YELLOW } from "@/utils/theme";
import type { ServiceItem } from "@/models/home";

type ServiceIconProps = {
  icon: ServiceItem["icon"];
};

const IconTowing = () => {
  return (
    <svg viewBox="0 0 48 36" fill="none" width="100%" height="100%">
      <rect x="16" y="14" width="22" height="12" rx="1.5" fill={YELLOW} />
      <rect x="16" y="10" width="10" height="6" rx="1" fill={YELLOW} />
      <rect
        x="17.5"
        y="11"
        width="7"
        height="4"
        rx="0.5"
        fill="#0a0a0a"
        opacity="0.5"
      />
      <line
        x1="36"
        y1="14"
        x2="44"
        y2="6"
        stroke={YELLOW}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="6"
        x2="44"
        y2="12"
        stroke={YELLOW}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M44 12 Q46 14 44 16"
        stroke={YELLOW}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="21" cy="26" r="3.5" fill="#0a0a0a" stroke={YELLOW} strokeWidth="1.5" />
      <circle cx="33" cy="26" r="3.5" fill="#0a0a0a" stroke={YELLOW} strokeWidth="1.5" />
      <rect x="2" y="17" width="13" height="7" rx="1" fill={YELLOW} opacity="0.7" />
      <rect x="4" y="14" width="8" height="4" rx="1" fill={YELLOW} opacity="0.5" />
      <circle cx="5" cy="24" r="2.2" fill="#0a0a0a" stroke={YELLOW} strokeWidth="1.2" />
      <circle cx="12" cy="24" r="2.2" fill="#0a0a0a" stroke={YELLOW} strokeWidth="1.2" />
      <line
        x1="15"
        y1="18"
        x2="44"
        y2="13"
        stroke={YELLOW}
        strokeWidth="1"
        strokeDasharray="2 1.5"
        opacity="0.8"
      />
    </svg>
  );
};

const IconWrench = () => {
  return (
    <svg viewBox="0 0 32 32" fill="none" width="100%" height="100%">
      <path
        d="M22 4C18.7 4 16 6.7 16 10c0 1 .3 2 .7 2.8L4.5 25c-.7.7-.7 1.8 0 2.5l1 1c.7.7 1.8.7 2.5 0L20.2 16.3c.8.4 1.8.7 2.8.7 3.3 0 6-2.7 6-6 0-1-.2-2-.6-2.8l-3.5 3.5-2.8-.7-.7-2.8 3.5-3.5C24 4.3 23 4 22 4z"
        fill={YELLOW}
      />
    </svg>
  );
};

const IconBoxTruck = () => {
  return (
    <svg viewBox="0 0 52 32" fill="none" width="100%" height="100%">
      <rect x="2" y="6" width="30" height="18" rx="1.5" fill={YELLOW} />
      <rect x="32" y="12" width="14" height="12" rx="1.5" fill={YELLOW} />
      <rect
        x="34"
        y="13.5"
        width="8"
        height="6"
        rx="0.8"
        fill="#0a0a0a"
        opacity="0.45"
      />
      <line
        x1="17"
        y1="6"
        x2="17"
        y2="24"
        stroke="#0a0a0a"
        strokeWidth="1"
        opacity="0.3"
      />
      <rect x="15" y="14" width="3" height="1.5" rx="0.5" fill="#0a0a0a" opacity="0.4" />
      <circle cx="11" cy="25" r="4" fill="#0a0a0a" stroke={YELLOW} strokeWidth="1.8" />
      <circle cx="38" cy="25" r="4" fill="#0a0a0a" stroke={YELLOW} strokeWidth="1.8" />
      <circle cx="47" cy="25" r="3" fill="#0a0a0a" stroke={YELLOW} strokeWidth="1.5" />
      <rect x="2" y="22" width="44" height="2" fill={YELLOW} opacity="0.3" />
    </svg>
  );
};

const ServiceIcon = ({ icon }: ServiceIconProps) => {
  switch (icon) {
    case "repair":
      return <IconWrench />;
    case "truck":
      return <IconBoxTruck />;
    default:
      return <IconTowing />;
  }
};

export default ServiceIcon;
