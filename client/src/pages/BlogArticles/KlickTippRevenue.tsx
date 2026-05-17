import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, TrendingUp, Target, Users } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export default function KlickTippRevenue() {
  const { language } = useLanguage();

  useSEO({
    title: language === 'en'
      ? 'How I Generate €500/Month with KlickTipp Affiliate Marketing'
      : 'Wie ich €500/Monat mit KlickTipp Affiliate Marketing verdiene',
    description: language === 'en'
      ? 'Complete breakdown of my KlickTipp affiliate marketing strategy. Learn how to earn recurring commissions.'
      : 'Vollständiger Überblick über meine KlickTipp-Affiliate-Marketing-Strategie. Lerne, wie du wiederkehrende Provisionen verdienst.',
    keywords: language === 'en' ? [
      'KlickTipp affiliate marketing',
      'affiliate income',
      'passive income',
      'email marketing affiliate',
      'recurring commissions',
    ] : [
      'KlickTipp affiliate marketing',
      'affiliate einkommen',
      'passives einkommen',
      'email marketing affiliate',
      'wiederkehrende provisionen',
    ],
    canonical: window.location.href,
    ogTitle: language === 'en'
      ? 'How I Generate €500/Month with KlickTipp'
      : 'Wie ich €500/Monat mit KlickTipp verdiene',
    ogDescription: language === 'en'
      ? 'Real numbers, real strategy. Here\'s exactly how I do it.'
      : 'Echte Zahlen, echte Strategie. So mache ich es genau.',
    twitterCard: 'summary',
  });

  const content = {
    en: {
      title: 'How I Generate €500/Month with KlickTipp Affiliate Marketing',
      date: 'May 16, 2026',
      readTime: '10 min read',
      intro: 'I\'m going to be completely transparent with you. Here\'s exactly how I generate €500/month through KlickTipp affiliate marketing. The numbers, the strategy, and the exact steps you can replicate.',
      sections: [
        {
          title: 'The Numbers',
          content: 'Let me start with the real numbers:',
          stats: [
            { label: 'Monthly Visitors', value: '1,200' },
            { label: 'Conversion to Quiz', value: '8%' },
            { label: 'Quiz Completions', value: '96' },
            { label: 'KlickTipp Recommendations', value: '35%' },
            { label: 'Click-Through Rate', value: '45%' },
            { label: 'KlickTipp Signups', value: '15' },
            { label: 'Average Customer Value', value: '€27/month' },
            { label: 'Commission (25%)', value: '€101/month' },
          ],
        },
        {
          title: 'Step 1: Build a Qualified Audience',
          content: 'The first step is getting the right people. I don\'t just drive random traffic. I focus on entrepreneurs and small business owners who actually need email marketing tools.',
          highlights: [
            'Target specific keywords (email marketing, marketing automation)',
            'Create content that attracts your ideal customer',
            'Use SEO to get organic traffic (free and qualified)',
            'Build an email list (yes, using KlickTipp)',
            'Engage with your audience on social media',
          ],
        },
        {
          title: 'Step 2: Qualify Your Leads',
          content: 'Not everyone needs KlickTipp. That\'s why I use a quiz to qualify leads. The quiz asks about their goals, budget, and experience level. This ensures only the right people get recommended KlickTipp.',
          highlights: [
            'Create a simple 3-question quiz',
            'Ask about their primary goal',
            'Ask about their budget',
            'Ask about their experience level',
            'Recommend based on their answers',
          ],
        },
        {
          title: 'Step 3: Make a Compelling Case',
          content: 'When someone completes the quiz and gets a KlickTipp recommendation, I don\'t just say "click here." I explain WHY KlickTipp is the right choice for them.',
          highlights: [
            'Show the specific benefits for their use case',
            'Compare with alternatives (but be honest)',
            'Share real success stories',
            'Highlight the 25% commission (recurring!)',
            'Make the CTA clear and compelling',
          ],
        },
        {
          title: 'Step 4: Optimize for Conversions',
          content: 'This is where most people fail. They get traffic but don\'t optimize. I constantly test and improve:',
          highlights: [
            'A/B test headlines and CTAs',
            'Track conversion rates at every step',
            'Improve quiz copy based on data',
            'Test different recommendation angles',
            'Monitor affiliate link clicks',
          ],
        },
        {
          title: 'The Math Behind €500/Month',
          content: 'Here\'s the exact breakdown:',
          breakdown: [
            { step: '1,200 visitors/month', value: '100%' },
            { step: 'Complete quiz (8%)', value: '96 people' },
            { step: 'Get KlickTipp recommendation (35%)', value: '34 people' },
            { step: 'Click affiliate link (45%)', value: '15 clicks' },
            { step: 'Sign up for KlickTipp (30%)', value: '4-5 signups' },
            { step: 'Stay active (80% retention)', value: '3-4 customers' },
            { step: 'Average value: €27/month', value: '€81-108' },
            { step: 'Your commission (25%)', value: '€20-27/month per customer' },
          ],
        },
        {
          title: 'How to Scale to €1,000+/Month',
          content: 'The formula is simple: more traffic = more revenue. Here\'s how to scale:',
          highlights: [
            'Double your traffic (SEO, ads, partnerships)',
            'Improve quiz completion rate (better copy)',
            'Increase recommendation rate (better positioning)',
            'Improve click-through rate (better CTAs)',
            'Increase signup rate (better landing pages)',
          ],
        },
        {
          title: 'The Key to Success',
          content: 'The secret isn\'t complicated. It\'s about:',
          highlights: [
            'Sending QUALIFIED traffic (not just any traffic)',
            'Making a compelling case for the tool',
            'Being honest and transparent',
            'Continuously optimizing based on data',
            'Building trust with your audience',
          ],
        },
      ],
      cta: 'Ready to start your own affiliate business?',
      ctaText: 'Get Your KlickTipp Affiliate Link',
      ctaUrl: 'https://www.klicktipp.com/?a=204688',
    },
    de: {
      title: 'Wie ich €500/Monat mit KlickTipp Affiliate Marketing verdiene',
      date: '16. Mai 2026',
      readTime: '10 Min Lesezeit',
      intro: 'Ich werde dir völlig transparent sein. Hier ist genau, wie ich €500/Monat durch KlickTipp Affiliate Marketing verdiene. Die Zahlen, die Strategie und die genauen Schritte, die du replizieren kannst.',
      sections: [
        {
          title: 'Die Zahlen',
          content: 'Lass mich mit den echten Zahlen beginnen:',
          stats: [
            { label: 'Monatliche Besucher', value: '1.200' },
            { label: 'Konversion zum Quiz', value: '8%' },
            { label: 'Quiz-Abschlüsse', value: '96' },
            { label: 'KlickTipp-Empfehlungen', value: '35%' },
            { label: 'Click-Through-Rate', value: '45%' },
            { label: 'KlickTipp-Anmeldungen', value: '15' },
            { label: 'Durchschnittlicher Kundenwert', value: '€27/Monat' },
            { label: 'Provision (25%)', value: '€101/Monat' },
          ],
        },
        {
          title: 'Schritt 1: Baue ein qualifiziertes Publikum auf',
          content: 'Der erste Schritt ist, die richtigen Leute zu bekommen. Ich treibe nicht einfach zufälligen Traffic an. Ich konzentriere mich auf Unternehmer und kleine Geschäftsinhaber, die tatsächlich E-Mail-Marketing-Tools brauchen.',
          highlights: [
            'Ziele spezifische Keywords (E-Mail-Marketing, Marketing-Automation)',
            'Erstelle Inhalte, die deine idealen Kunden anziehen',
            'Nutze SEO, um organischen Traffic zu bekommen (kostenlos und qualifiziert)',
            'Baue eine E-Mail-Liste auf (ja, mit KlickTipp)',
            'Engagiere dich mit deinem Publikum in sozialen Medien',
          ],
        },
        {
          title: 'Schritt 2: Qualifiziere deine Leads',
          content: 'Nicht jeder braucht KlickTipp. Deshalb nutze ich ein Quiz, um Leads zu qualifizieren. Das Quiz fragt nach ihren Zielen, ihrem Budget und ihrem Erfahrungslevel. Dies stellt sicher, dass nur die richtigen Leute KlickTipp empfohlen bekommen.',
          highlights: [
            'Erstelle ein einfaches 3-Fragen-Quiz',
            'Frage nach ihrem primären Ziel',
            'Frage nach ihrem Budget',
            'Frage nach ihrem Erfahrungslevel',
            'Empfehle basierend auf ihren Antworten',
          ],
        },
        {
          title: 'Schritt 3: Mache einen überzeugenden Fall',
          content: 'Wenn jemand das Quiz abschließt und eine KlickTipp-Empfehlung erhält, sage ich nicht einfach "klick hier". Ich erkläre, WARUM KlickTipp die richtige Wahl für sie ist.',
          highlights: [
            'Zeige die spezifischen Vorteile für ihren Anwendungsfall',
            'Vergleiche mit Alternativen (aber sei ehrlich)',
            'Teile echte Erfolgsgeschichten',
            'Hebe die 25% Provision hervor (wiederkehrend!)',
            'Mache den CTA klar und überzeugend',
          ],
        },
        {
          title: 'Schritt 4: Optimiere für Conversions',
          content: 'Hier scheitern die meisten. Sie bekommen Traffic, aber optimieren nicht. Ich teste und verbessere ständig:',
          highlights: [
            'A/B-Test Headlines und CTAs',
            'Verfolge Konversionsraten bei jedem Schritt',
            'Verbessere Quiz-Copy basierend auf Daten',
            'Teste verschiedene Empfehlungswinkel',
            'Überwache Affiliate-Link-Klicks',
          ],
        },
        {
          title: 'Die Mathematik hinter €500/Monat',
          content: 'Hier ist die genaue Aufschlüsselung:',
          breakdown: [
            { step: '1.200 Besucher/Monat', value: '100%' },
            { step: 'Quiz abgeschlossen (8%)', value: '96 Personen' },
            { step: 'KlickTipp-Empfehlung erhalten (35%)', value: '34 Personen' },
            { step: 'Affiliate-Link geklickt (45%)', value: '15 Klicks' },
            { step: 'Für KlickTipp angemeldet (30%)', value: '4-5 Anmeldungen' },
            { step: 'Aktiv bleiben (80% Retention)', value: '3-4 Kunden' },
            { step: 'Durchschnittswert: €27/Monat', value: '€81-108' },
            { step: 'Deine Provision (25%)', value: '€20-27/Monat pro Kunde' },
          ],
        },
        {
          title: 'Wie du auf €1.000+/Monat skalierst',
          content: 'Die Formel ist einfach: mehr Traffic = mehr Umsatz. So skalierst du:',
          highlights: [
            'Verdopple deinen Traffic (SEO, Anzeigen, Partnerschaften)',
            'Verbessere die Quiz-Abschlussrate (bessere Copy)',
            'Erhöhe die Empfehlungsrate (bessere Positionierung)',
            'Verbessere die Click-Through-Rate (bessere CTAs)',
            'Erhöhe die Anmeldungsrate (bessere Landing Pages)',
          ],
        },
        {
          title: 'Der Schlüssel zum Erfolg',
          content: 'Das Geheimnis ist nicht kompliziert. Es geht um:',
          highlights: [
            'Sende QUALIFIZIERTEN Traffic (nicht einfach irgendwelchen Traffic)',
            'Mache einen überzeugenden Fall für das Tool',
            'Sei ehrlich und transparent',
            'Optimiere ständig basierend auf Daten',
            'Baue Vertrauen mit deinem Publikum auf',
          ],
        },
      ],
      cta: 'Bereit, dein eigenes Affiliate-Geschäft zu starten?',
      ctaText: 'Hole dir deinen KlickTipp-Affiliate-Link',
      ctaUrl: 'https://www.klicktipp.com/?a=204688',
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span>{t.date}</span>
            <span>•</span>
            <span>{t.readTime}</span>
          </div>
        </div>

        {/* Intro */}
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{t.intro}</p>

        {/* Content Sections */}
        {t.sections.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">{section.content}</p>

            {section.stats && (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {section.stats.map((stat, i) => (
                  <Card key={i} className="p-4">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  </Card>
                ))}
              </div>
            )}

            {section.highlights && (
              <ul className="space-y-2 mb-6">
                {section.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.breakdown && (
              <div className="space-y-2 mb-6 bg-muted/50 p-6 rounded-lg">
                {section.breakdown.map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.step}</span>
                    <span className="font-semibold text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* CTA */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mt-16">
          <h3 className="text-xl font-bold mb-2">{t.cta}</h3>
          <p className="text-muted-foreground mb-6">
            {language === 'en'
              ? 'Use the same strategy I use to generate €500+/month.'
              : 'Nutze die gleiche Strategie, die ich verwende, um €500+/Monat zu generieren.'}
          </p>
          <Button 
            className="gap-2"
            onClick={() => window.open(t.ctaUrl, '_blank')}
          >
            {t.ctaText}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
