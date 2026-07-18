import HeroDesktopLayout from "./HeroDesktopLayout";
import HeroMobileLayout from "./HeroMobileLayout";

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
    </section>
  );
};

export default HeroSection;
