import { YELLOW, accentFont } from "@/utils/theme";

type INBadgeProps = {
  size?: "sm" | "lg";
};

const INBadge = ({ size = "sm" }: INBadgeProps) => {
  const width = size === "lg" ? 58 : 40;
  const height = size === "lg" ? 44 : 30;
  const fontSize = size === "lg" ? "1.6rem" : "1.05rem";

  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{
        width,
        height,
        transform: "skewX(-8deg)",
        backgroundColor: "#0a0a0a",
        border: `2px solid ${YELLOW}`,
      }}
    >
      <span
        style={{
          transform: "skewX(8deg)",
          fontFamily: accentFont,
          fontWeight: 900,
          fontStyle: "italic",
          color: YELLOW,
          fontSize,
          lineHeight: 1,
        }}
      >
        IN
      </span>
    </div>
  );
};

export default INBadge;
