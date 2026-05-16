import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Home Page – AI Funnel Guide
 * 
 * Design: Modern, professional tech-forward aesthetic
 * - Hero section with gradient background
 * - Value proposition cards
 * - CTA for lead funnel
 * - Feature highlights
 */

const content = {
  en: {
    title: 'AI Funnel Guide',
    subtitle: 'Your Independent Guide to AI-Powered Marketing Funnels',
    description: 'Discover the best tools, strategies, and automation techniques for building high-converting funnels with artificial intelligence.',
    cta: 'Start Your Free Guide',
    features: [
      {
        icon: Zap,
        title: 'Tool Comparisons',
        description: 'Honest reviews of GetResponse, KlickTipp, and other automation platforms',
      },
      {
        icon: TrendingUp,
        title: 'Proven Strategies',
        description: 'Learn the funnel structures that drive real conversions and revenue',
      },
      {
        icon: CheckCircle,
        title: 'Step-by-Step Guides',
        description: 'Practical, actionable guides to build and scale your funnels',
      },
    ],
    affiliateDisclosure: 'Affiliate Disclosure',
    affiliateText: 'We earn commissions from recommended products, but our reviews are independent and honest. Your trust is our priority.',
  },
  de: {
    title: 'AI Funnel Guide',
    subtitle: 'Dein unabhängiger Leitfaden zu KI-gestützten Marketing-Funneln',
    description: 'Entdecke die besten Tools, Strategien und Automationstechniken zum Aufbau hochkonvertierender Funnels mit künstlicher Intelligenz.',
    cta: 'Kostenlos starten',
    features: [
      {
        icon: Zap,
        title: 'Tool-Vergleiche',
        description: 'Ehrliche Bewertungen von GetResponse, KlickTipp und anderen Automatisierungsplattformen',
      },
      {
        icon: TrendingUp,
        title: 'Bewährte Strategien',
        description: 'Lerne die Funnel-Strukturen, die echte Conversions und Umsatz generieren',
      },
      {
        icon: CheckCircle,
        title: 'Schritt-für-Schritt-Anleitungen',
        description: 'Praktische, umsetzbare Guides zum Aufbau und zur Skalierung deiner Funnels',
      },
    ],
    affiliateDisclosure: 'Affiliate-Offenlegung',
    affiliateText: 'Wir verdienen Provisionen von empfohlenen Produkten, aber unsere Bewertungen sind unabhängig und ehrlich. Dein Vertrauen ist unsere Priorität.',
  },
};

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.description}
            </p>
            <Button
              size="lg"
              className="btn-primary-glow"
            >
              {t.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {t.features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="bg-muted/50 py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-bold text-lg mb-3">{t.affiliateDisclosure}</h3>
            <p className="text-sm text-muted-foreground">{t.affiliateText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
