import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
import PricingSection from '@/components/PricingSection';
import ProblemStatement from '@/components/ProblemStatement';
import SocialProofBar from '@/components/SocialProofBar';
import SolutionOverview from '@/components/SolutionOverview';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SocialProofBar />
      <ProblemStatement />
      <SolutionOverview />
      <FeaturesSection />
      <PricingSection />
    </main>
  );
}
