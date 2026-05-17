import { useEffect, useState } from 'react';

export interface ABTestVariant {
  id: 'A' | 'B' | 'C' | 'D';
  hero_subtitle: string;
  hero_cta: string;
  problem_title: string;
  solution_cta: string;
}

export const AB_TEST_VARIANTS: Record<string, ABTestVariant> = {
  A: {
    id: 'A',
    hero_subtitle: 'The AI Marketing Tool That\'s Right for YOU',
    hero_cta: 'Find Your Perfect Tool',
    problem_title: 'The Problem: Too Many Tools, Too Much Confusion',
    solution_cta: 'Take the Quiz',
  },
  B: {
    id: 'B',
    hero_subtitle: 'The AI Marketing Tool That\'s Right for YOUR Business',
    hero_cta: 'Get My Perfect Tool Match',
    problem_title: 'Drowning in Marketing Tool Options? We Fix That.',
    solution_cta: 'Get Personalized Recommendation',
  },
  C: {
    id: 'C',
    hero_subtitle: 'Find the Perfect AI Tool for Your Marketing Funnel',
    hero_cta: 'Discover Your Ideal Tool',
    problem_title: 'The Real Problem: You\'re Using the Wrong Tool',
    solution_cta: 'Find Your Perfect Match',
  },
  D: {
    id: 'D',
    hero_subtitle: 'Stop Wasting Time. Get the Right Tool in 2 Minutes.',
    hero_cta: 'Start the Quiz Now',
    problem_title: 'Why Most Entrepreneurs Choose the Wrong Tool',
    solution_cta: 'Take the 2-Minute Quiz',
  },
};

const STORAGE_KEY = 'ab_test_variant';
const CONVERSIONS_KEY = 'ab_test_conversions';

export function useABTest() {
  const [variant, setVariant] = useState<ABTestVariant | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get or assign variant
    let currentVariant = localStorage.getItem(STORAGE_KEY);
    
    if (!currentVariant) {
      // Randomly assign variant (25% each)
      const variants = Object.keys(AB_TEST_VARIANTS) as Array<'A' | 'B' | 'C' | 'D'>;
      currentVariant = variants[Math.floor(Math.random() * variants.length)];
      localStorage.setItem(STORAGE_KEY, currentVariant);
    }

    setVariant(AB_TEST_VARIANTS[currentVariant]);
    setIsLoading(false);
  }, []);

  const trackConversion = (conversionType: 'quiz_click' | 'tool_click' | 'affiliate_click') => {
    if (!variant) return;

    const conversions = JSON.parse(localStorage.getItem(CONVERSIONS_KEY) || '{}');
    
    if (!conversions[variant.id]) {
      conversions[variant.id] = {
        variant: variant.id,
        quiz_click: 0,
        tool_click: 0,
        affiliate_click: 0,
        timestamp: new Date().toISOString(),
      };
    }

    conversions[variant.id][conversionType]++;
    localStorage.setItem(CONVERSIONS_KEY, JSON.stringify(conversions));

    // Send to analytics (if available)
    if ((window as any).gtag) {
      (window as any).gtag('event', 'ab_test_conversion', {
        variant: variant.id,
        conversion_type: conversionType,
      });
    }
  };

  return {
    variant,
    isLoading,
    trackConversion,
    currentVariant: variant?.id,
  };
}

// Export conversion data for dashboard
export function getABTestResults() {
  const conversions = JSON.parse(localStorage.getItem(CONVERSIONS_KEY) || '{}');
  
  const results = Object.values(conversions) as any[];
  
  if (results.length === 0) {
    return null;
  }

  // Calculate conversion rates
  const stats = results.map((r: any) => ({
    variant: r.variant,
    total_interactions: r.quiz_click + r.tool_click + r.affiliate_click,
    quiz_clicks: r.quiz_click,
    tool_clicks: r.tool_click,
    affiliate_clicks: r.affiliate_click,
    quiz_rate: r.quiz_click > 0 ? (r.quiz_click / (r.quiz_click + r.tool_click + r.affiliate_click) * 100).toFixed(2) : 0,
    tool_rate: r.tool_click > 0 ? (r.tool_click / (r.quiz_click + r.tool_click + r.affiliate_click) * 100).toFixed(2) : 0,
    affiliate_rate: r.affiliate_click > 0 ? (r.affiliate_click / (r.quiz_click + r.tool_click + r.affiliate_click) * 100).toFixed(2) : 0,
  }));

  return stats;
}

// Clear test data (for testing purposes)
export function clearABTestData() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(CONVERSIONS_KEY);
}
