import HeroDesktopLayout from "./HeroDesktopLayout";
import HeroMobileLayout from "./HeroMobileLayout";
import ScrollCue from "@/components/scrollCue/ScrollCue";

type HeroSectionProps = {
  heroImageDesktop: string;
  heroImageMobile: string;
};

const HeroSection = ({
  heroImageDesktop,
  heroImageMobile,
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <HeroMobileLayout heroImageMobile={heroImageMobile} />
      <HeroDesktopLayout heroImageDesktop={heroImageDesktop} />
      <ScrollCue />
    </section>
  );
};

export default HeroSection;
