// src/types.ts
export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPremium: boolean;
}