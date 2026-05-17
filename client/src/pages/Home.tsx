import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Zap, TrendingUp, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRoute } from 'wouter';

/**
 * Home Page – AI Funnel Guide
 * 
 * Design: Conversion-focused buyer journey
 * - Problem/Solution narrative
 * - Qualification quiz CTA
 * - Social proof & trust signals
 * - Clear value hierarchy
 */

const content = {
  en: {
    hero: {
      title: 'Stop Guessing. Start Converting.',
      subtitle: 'The AI Marketing Tool That\'s Right for YOU',
      description: 'Not all marketing tools are created equal. We help you find the perfect fit for your business, budget, and goals.',
      cta: 'Find Your Perfect Tool',
      secondary: 'Compare All Tools',
    },
    problem: {
      title: 'The Problem: Too Many Tools, Too Much Confusion',
      description: 'You\'re drowning in marketing tool options. GetResponse? KlickTipp? Instantly AI? Make? How do you know which one is right for you?',
      points: [
        'Wasting time comparing features you don\'t need',
        'Paying for tools that don\'t fit your workflow',
        'Missing out on automation opportunities',
        'Struggling to build high-converting funnels',
      ],
    },
    solution: {
      title: 'The Solution: Personalized Recommendations',
      description: 'We\'ve tested the top AI marketing tools so you don\'t have to. Answer a few quick questions and get a personalized recommendation.',
      cta: 'Take the Quiz',
    },
    tools: {
      title: 'Tools We Recommend',
      description: 'Each tool has a specific strength. Find which one matches your needs.',
      items: [
        {
          name: 'GetResponse',
          tagline: 'All-in-One Email & Funnel Builder',
          description: 'Perfect for beginners and intermediate users who want everything in one place.',
          strength: 'Email sequences, landing pages, webinars',
          price: 'From €15/month',
        },
        {
          name: 'KlickTipp',
          tagline: 'German Power User\'s Choice',
          description: 'Built for German entrepreneurs with advanced automation and affiliate management.',
          strength: 'Smart tagging, affiliate system, SMS marketing',
          price: 'From €27/month',
        },
        {
          name: 'Instantly AI',
          tagline: 'AI-Powered Sales Automation',
          description: 'Automate cold email outreach and sales sequences at scale with AI.',
          strength: 'AI copywriting, email sequences, lead tracking',
          price: 'From €25/month',
        },
        {
          name: 'Make',
          tagline: 'Automation & Integration Hub',
          description: 'Connect 1000+ apps and automate complex workflows without coding.',
          strength: '1000+ integrations, visual builder, reliability',
          price: 'From €9.99/month',
        },
      ],
    },
    trust: {
      title: 'Why Trust Us?',
      points: [
        {
          icon: CheckCircle,
          title: 'Independent Reviews',
          description: 'We test everything ourselves. No paid reviews, just honest feedback.',
        },
        {
          icon: Users,
          title: 'Real User Data',
          description: 'Recommendations based on what actually works for real businesses.',
        },
        {
          icon: Target,
          title: 'Personalized Matching',
          description: 'We match you to the tool that fits YOUR needs, not just the most popular one.',
        },
      ],
    },
    cta: {
      title: 'Ready to Find Your Perfect Tool?',
      description: 'Stop wasting time. Get a personalized recommendation in 2 minutes.',
      button: 'Start the Quiz',
    },
    affiliateDisclosure: 'Affiliate Disclosure',
    affiliateText: 'We earn commissions from recommended products. This helps us keep this guide free and updated. Our recommendations are independent and based on what we believe is best for you.',
  },
  de: {
    hero: {
      title: 'Hör auf zu raten. Fang an zu konvertieren.',
      subtitle: 'Das KI-Marketing-Tool, das zu DIR passt',
      description: 'Nicht alle Marketing-Tools sind gleich. Wir helfen dir, das perfekte Tool für dein Business, dein Budget und deine Ziele zu finden.',
      cta: 'Finde dein perfektes Tool',
      secondary: 'Alle Tools vergleichen',
    },
    problem: {
      title: 'Das Problem: Zu viele Tools, zu viel Verwirrung',
      description: 'Du ertrickst in Marketing-Tool-Optionen. GetResponse? KlickTipp? Instantly AI? Make? Wie weißt du, welches zu dir passt?',
      points: [
        'Zeit verschwenden beim Vergleich von Features, die du nicht brauchst',
        'Für Tools zahlen, die nicht zu deinem Workflow passen',
        'Automation-Chancen verpassen',
        'Schwierigkeiten beim Aufbau hochkonvertierender Funnels',
      ],
    },
    solution: {
      title: 'Die Lösung: Personalisierte Empfehlungen',
      description: 'Wir haben die Top-KI-Marketing-Tools getestet, damit du es nicht musst. Beantworte ein paar schnelle Fragen und erhalte eine personalisierte Empfehlung.',
      cta: 'Quiz starten',
    },
    tools: {
      title: 'Tools, die wir empfehlen',
      description: 'Jedes Tool hat eine spezifische Stärke. Finde heraus, welches zu deinen Anforderungen passt.',
      items: [
        {
          name: 'GetResponse',
          tagline: 'All-in-One E-Mail & Funnel Builder',
          description: 'Perfekt für Anfänger und fortgeschrittene Nutzer, die alles an einem Ort wollen.',
          strength: 'E-Mail-Sequenzen, Landing Pages, Webinare',
          price: 'Ab €15/Monat',
        },
        {
          name: 'KlickTipp',
          tagline: 'Die Wahl des deutschen Power Users',
          description: 'Gebaut für deutsche Unternehmer mit fortgeschrittener Automation und Affiliate-Management.',
          strength: 'Smart Tagging, Affiliate-System, SMS-Marketing',
          price: 'Ab €27/Monat',
        },
        {
          name: 'Instantly AI',
          tagline: 'KI-gestützte Sales-Automation',
          description: 'Automatisiere Cold-E-Mail-Outreach und Sales-Sequenzen in großem Maßstab mit KI.',
          strength: 'KI-Copywriting, E-Mail-Sequenzen, Lead-Tracking',
          price: 'Ab €25/Monat',
        },
        {
          name: 'Make',
          tagline: 'Automation & Integration Hub',
          description: 'Verbinde 1000+ Apps und automatisiere komplexe Workflows ohne Code.',
          strength: '1000+ Integrationen, visueller Builder, Zuverlässigkeit',
          price: 'Ab €9,99/Monat',
        },
      ],
    },
    trust: {
      title: 'Warum uns vertrauen?',
      points: [
        {
          icon: CheckCircle,
          title: 'Unabhängige Bewertungen',
          description: 'Wir testen alles selbst. Keine bezahlten Reviews, nur ehrliches Feedback.',
        },
        {
          icon: Users,
          title: 'Echte Benutzerdaten',
          description: 'Empfehlungen basierend auf dem, was wirklich für echte Unternehmen funktioniert.',
        },
        {
          icon: Target,
          title: 'Personalisiertes Matching',
          description: 'Wir passen dich an das Tool an, das zu DEINEN Anforderungen passt, nicht nur das beliebteste.',
        },
      ],
    },
    cta: {
      title: 'Bereit, dein perfektes Tool zu finden?',
      description: 'Hör auf, Zeit zu verschwenden. Erhalte eine personalisierte Empfehlung in 2 Minuten.',
      button: 'Quiz starten',
    },
    affiliateDisclosure: 'Affiliate-Offenlegung',
    affiliateText: 'Wir verdienen Provisionen von empfohlenen Produkten. Das hilft uns, diesen Leitfaden kostenlos und aktuell zu halten. Unsere Empfehlungen sind unabhängig und basieren auf dem, was wir für das Beste für dich halten.',
  },
};

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];
  const [, navigate] = useRoute();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32 relative overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-primary-glow"
                onClick={() => navigate('/quiz')}
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/tools')}
              >
                {t.hero.secondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {t.problem.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              {t.problem.description}
            </p>
            <div className="space-y-4">
              {t.problem.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-destructive">✕</span>
                  </div>
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.solution.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.solution.description}
            </p>
            <Button
              size="lg"
              className="btn-primary-glow"
              onClick={() => navigate('/quiz')}
            >
              {t.solution.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Overview Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {t.tools.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              {t.tools.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {t.tools.items.map((tool, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{tool.tagline}</p>
                  <p className="text-muted-foreground mb-4 text-sm">{tool.description}</p>
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-sm font-semibold text-primary mb-2">💪 {tool.strength}</p>
                    <p className="text-sm font-bold text-foreground">{tool.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t.trust.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.trust.points.map((point, idx) => {
              const Icon = point.icon;
              return (
                <Card key={idx} className="p-8 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.cta.description}
            </p>
            <Button
              size="lg"
              className="btn-primary-glow"
              onClick={() => navigate('/quiz')}
            >
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
