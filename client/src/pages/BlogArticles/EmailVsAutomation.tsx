import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export default function EmailVsAutomation() {
  const { language } = useLanguage();

  useSEO({
    title: language === 'en'
      ? 'Email Marketing vs Automation: Which Should You Use?'
      : 'E-Mail-Marketing vs Automation: Was solltest du nutzen?',
    description: language === 'en'
      ? 'Complete comparison of email marketing and workflow automation. Learn when to use each and how to combine them for maximum revenue.'
      : 'Vollständiger Vergleich von E-Mail-Marketing und Workflow-Automation. Lerne, wann du jedes nutzen solltest und wie du sie kombinierst.',
    keywords: language === 'en' ? [
      'email marketing vs automation',
      'marketing automation',
      'email marketing',
      'workflow automation',
      'marketing strategy',
    ] : [
      'email marketing vs automation',
      'marketing automation',
      'email marketing',
      'workflow automation',
      'marketing strategie',
    ],
    canonical: window.location.href,
    ogTitle: language === 'en'
      ? 'Email vs Automation: Complete Comparison'
      : 'E-Mail vs Automation: Kompletter Vergleich',
    ogDescription: language === 'en'
      ? 'Learn the differences and how to use both for your marketing funnel.'
      : 'Lerne die Unterschiede und wie du beide für deinen Marketing-Funnel nutzt.',
    twitterCard: 'summary',
  });

  const content = {
    en: {
      title: 'Email Marketing vs Automation: Which Should You Use?',
      date: 'May 20, 2026',
      readTime: '10 min read',
      intro: 'Many people think email marketing and automation are the same thing. They\'re not. In this guide, I\'ll explain the differences and show you how to use both to build a revenue-generating funnel.',
      sections: [
        {
          title: 'What is Email Marketing?',
          content: 'Email marketing is sending targeted messages to your list to build relationships and drive sales. Tools like KlickTipp and GetResponse are email marketing platforms.',
          highlights: [
            'Send newsletters to your list',
            'Build sequences (welcome series, sales sequences)',
            'Segment your audience',
            'Track opens, clicks, and conversions',
            'Manage subscriber data',
          ],
        },
        {
          title: 'What is Workflow Automation?',
          content: 'Workflow automation connects different apps and tools to work together automatically. Make is a workflow automation platform.',
          highlights: [
            'Connect 1000+ apps',
            'Trigger actions based on events',
            'Move data between tools',
            'Create complex workflows',
            'Reduce manual work',
          ],
        },
        {
          title: 'Key Differences',
          content: 'Here\'s how they differ:',
          comparison: [
            {
              aspect: 'Primary Function',
              email: 'Send and manage emails',
              automation: 'Connect apps and automate workflows',
            },
            {
              aspect: 'Best For',
              email: 'Building relationships via email',
              automation: 'Connecting tools and saving time',
            },
            {
              aspect: 'Learning Curve',
              email: 'Easy (beginner-friendly)',
              automation: 'Medium (some setup required)',
            },
            {
              aspect: 'Cost',
              email: 'From €15-30/month',
              automation: 'From €9.99/month',
            },
            {
              aspect: 'ROI',
              email: 'Very high (€40+ per €1 spent)',
              automation: 'High (saves 10+ hours/month)',
            },
          ],
        },
        {
          title: 'When to Use Email Marketing',
          content: 'Use email marketing when:',
          highlights: [
            'You want to build a relationship with your audience',
            'You\'re selling products or services',
            'You need to nurture leads over time',
            'You want to track opens, clicks, and conversions',
            'You need to segment your audience',
          ],
        },
        {
          title: 'When to Use Automation',
          content: 'Use automation when:',
          highlights: [
            'You need to connect multiple tools',
            'You want to save time on repetitive tasks',
            'You need to move data between platforms',
            'You want to trigger actions based on events',
            'You\'re doing the same task manually every day',
          ],
        },
        {
          title: 'The Best Strategy: Combine Both',
          content: 'The real power comes from combining email marketing and automation:',
          highlights: [
            'Use email marketing to build relationships and drive sales',
            'Use automation to connect your email tool with your CRM',
            'Automate data collection and lead scoring',
            'Create automated workflows that trigger emails',
            'Track everything and optimize',
          ],
        },
        {
          title: 'Real-World Example',
          content: 'Here\'s how to combine them:',
          steps: [
            {
              num: '1',
              title: 'Lead Signup',
              desc: 'Someone fills out your form on your website',
            },
            {
              num: '2',
              title: 'Automation Trigger',
              desc: 'Make automatically adds them to KlickTipp',
            },
            {
              num: '3',
              title: 'Email Sequence',
              desc: 'KlickTipp sends your welcome series',
            },
            {
              num: '4',
              title: 'Automation Action',
              desc: 'Make tags them based on email opens',
            },
            {
              num: '5',
              title: 'CRM Update',
              desc: 'Make updates your CRM with their engagement level',
            },
            {
              num: '6',
              title: 'Sales Follow-up',
              desc: 'Your sales team gets notified to reach out',
            },
          ],
        },
        {
          title: 'Getting Started',
          content: 'Here\'s the roadmap:',
          highlights: [
            'Month 1: Set up email marketing (KlickTipp)',
            'Month 2: Create your first email sequences',
            'Month 3: Add automation (Make) to connect tools',
            'Month 4: Build advanced workflows',
            'Month 5+: Optimize and scale',
          ],
        },
      ],
      cta: 'Ready to build your revenue funnel?',
      ctaText: 'Start with Email Marketing',
      ctaUrl: 'https://www.klicktipp.com/?a=204688',
    },
    de: {
      title: 'E-Mail-Marketing vs Automation: Was solltest du nutzen?',
      date: '20. Mai 2026',
      readTime: '10 Min Lesezeit',
      intro: 'Viele Menschen denken, dass E-Mail-Marketing und Automation dasselbe sind. Das sind sie nicht. In diesem Leitfaden erkläre ich die Unterschiede und zeige dir, wie du beide nutzt, um einen umsatzgenerierenden Funnel aufzubauen.',
      sections: [
        {
          title: 'Was ist E-Mail-Marketing?',
          content: 'E-Mail-Marketing ist das Versenden gezielter Nachrichten an deine Liste, um Beziehungen aufzubauen und Verkäufe zu fördern. Tools wie KlickTipp und GetResponse sind E-Mail-Marketing-Plattformen.',
          highlights: [
            'Newsletter an deine Liste versenden',
            'Sequenzen aufbauen (Welcome-Serie, Sales-Sequenzen)',
            'Dein Publikum segmentieren',
            'Öffnungen, Klicks und Conversions tracken',
            'Abonnentendaten verwalten',
          ],
        },
        {
          title: 'Was ist Workflow-Automation?',
          content: 'Workflow-Automation verbindet verschiedene Apps und Tools, um automatisch zusammenzuarbeiten. Make ist eine Workflow-Automation-Plattform.',
          highlights: [
            '1000+ Apps verbinden',
            'Aktionen basierend auf Ereignissen auslösen',
            'Daten zwischen Tools verschieben',
            'Komplexe Workflows erstellen',
            'Manuelle Arbeit reduzieren',
          ],
        },
        {
          title: 'Wichtige Unterschiede',
          content: 'So unterscheiden sie sich:',
          comparison: [
            {
              aspect: 'Hauptfunktion',
              email: 'E-Mails versenden und verwalten',
              automation: 'Apps verbinden und Workflows automatisieren',
            },
            {
              aspect: 'Am besten für',
              email: 'Beziehungen via E-Mail aufbauen',
              automation: 'Tools verbinden und Zeit sparen',
            },
            {
              aspect: 'Lernkurve',
              email: 'Einfach (anfängerfreundlich)',
              automation: 'Mittel (etwas Setup erforderlich)',
            },
            {
              aspect: 'Kosten',
              email: 'Ab €15-30/Monat',
              automation: 'Ab €9,99/Monat',
            },
            {
              aspect: 'ROI',
              email: 'Sehr hoch (€40+ pro €1 ausgegeben)',
              automation: 'Hoch (spart 10+ Stunden/Monat)',
            },
          ],
        },
        {
          title: 'Wann E-Mail-Marketing nutzen',
          content: 'Nutze E-Mail-Marketing wenn:',
          highlights: [
            'Du eine Beziehung zu deinem Publikum aufbauen willst',
            'Du Produkte oder Dienstleistungen verkaufst',
            'Du Leads über Zeit nurturieren musst',
            'Du Öffnungen, Klicks und Conversions tracken willst',
            'Du dein Publikum segmentieren musst',
          ],
        },
        {
          title: 'Wann Automation nutzen',
          content: 'Nutze Automation wenn:',
          highlights: [
            'Du mehrere Tools verbinden musst',
            'Du Zeit bei wiederholten Aufgaben sparen willst',
            'Du Daten zwischen Plattformen verschieben musst',
            'Du Aktionen basierend auf Ereignissen auslösen willst',
            'Du die gleiche Aufgabe täglich manuell machst',
          ],
        },
        {
          title: 'Die beste Strategie: Kombiniere beide',
          content: 'Die echte Kraft kommt aus der Kombination von E-Mail-Marketing und Automation:',
          highlights: [
            'Nutze E-Mail-Marketing, um Beziehungen aufzubauen und Verkäufe zu fördern',
            'Nutze Automation, um dein E-Mail-Tool mit deinem CRM zu verbinden',
            'Automatisiere Datenerfassung und Lead-Scoring',
            'Erstelle automatisierte Workflows, die E-Mails auslösen',
            'Tracke alles und optimiere',
          ],
        },
        {
          title: 'Echtes Beispiel',
          content: 'So kombinierst du sie:',
          steps: [
            {
              num: '1',
              title: 'Lead-Anmeldung',
              desc: 'Jemand füllt dein Formular auf deiner Website aus',
            },
            {
              num: '2',
              title: 'Automation-Trigger',
              desc: 'Make fügt ihn automatisch zu KlickTipp hinzu',
            },
            {
              num: '3',
              title: 'E-Mail-Sequenz',
              desc: 'KlickTipp sendet deine Welcome-Serie',
            },
            {
              num: '4',
              title: 'Automation-Aktion',
              desc: 'Make kennzeichnet ihn basierend auf E-Mail-Öffnungen',
            },
            {
              num: '5',
              title: 'CRM-Update',
              desc: 'Make aktualisiert dein CRM mit seinem Engagement-Level',
            },
            {
              num: '6',
              title: 'Sales Follow-up',
              desc: 'Dein Sales-Team wird benachrichtigt, um ihn zu kontaktieren',
            },
          ],
        },
        {
          title: 'Erste Schritte',
          content: 'Hier ist die Roadmap:',
          highlights: [
            'Monat 1: E-Mail-Marketing einrichten (KlickTipp)',
            'Monat 2: Deine ersten E-Mail-Sequenzen erstellen',
            'Monat 3: Automation (Make) hinzufügen, um Tools zu verbinden',
            'Monat 4: Erweiterte Workflows aufbauen',
            'Monat 5+: Optimieren und skalieren',
          ],
        },
      ],
      cta: 'Bereit, deinen Revenue-Funnel aufzubauen?',
      ctaText: 'Starte mit E-Mail-Marketing',
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

            {section.highlights && (
              <ul className="space-y-2 mb-6">
                {section.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.comparison && (
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-2 font-semibold">Aspekt</th>
                      <th className="text-left py-2 px-2 font-semibold">E-Mail-Marketing</th>
                      <th className="text-left py-2 px-2 font-semibold">Automation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.comparison.map((row, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-2 px-2">{row.aspect}</td>
                        <td className="py-2 px-2 text-muted-foreground">{row.email}</td>
                        <td className="py-2 px-2 text-muted-foreground">{row.automation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.steps && (
              <div className="space-y-3 mb-6">
                {section.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
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
              ? 'Combine email marketing and automation for maximum revenue.'
              : 'Kombiniere E-Mail-Marketing und Automation für maximalen Umsatz.'}
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
