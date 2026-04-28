// ==========================================
// TYPE DEFINITIONS - ShopInsights Landing
// ==========================================

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialProofMetric {
  value: string;
  label: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface Badge {
  icon: string;
  text: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureTab {
  id: string;
  label: string;
  icon: string;
  features: FeatureCard[];
}

export interface PricingTier {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}
