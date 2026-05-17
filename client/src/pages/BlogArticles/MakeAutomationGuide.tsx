import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export default function MakeAutomationGuide() {
  const { language } = useLanguage();

  useSEO({
    title: language === 'en'
      ? 'Make Automation: The Complete Beginner\'s Guide'
      : 'Make Automation: Der komplette Anfänger-Leitfaden',
    description: language === 'en'
      ? 'Learn how to automate your entire marketing funnel with Make in 30 minutes. No coding required.'
      : 'Lerne, wie du deinen gesamten Marketing-Funnel mit Make in 30 Minuten automatisierst. Keine Codierung erforderlich.',
    keywords: language === 'en' ? [
      'Make automation guide',
      'workflow automation',
      'no code automation',
      'integromat',
      'automation tutorial',
    ] : [
      'Make automation leitfaden',
      'workflow automation',
      'no code automation',
      'integromat',
      'automation anleitung',
    ],
    canonical: window.location.href,
    ogTitle: language === 'en'
      ? 'Make Automation Guide for Beginners'
      : 'Make Automation Leitfaden für Anfänger',
    ogDescription: language === 'en'
      ? 'Complete guide to automate your marketing workflows with Make.'
      : 'Kompletter Leitfaden zur Automatisierung deiner Marketing-Workflows mit Make.',
    twitterCard: 'summary',
  });

  const content = {
    en: {
      title: 'Make Automation: The Complete Beginner\'s Guide',
      date: 'May 19, 2026',
      readTime: '12 min read',
      intro: 'Make (formerly Integromat) is the easiest way to automate your marketing workflows without writing code. In this guide, I\'ll show you exactly how to build your first automation in 30 minutes.',
      sections: [
        {
          title: 'What is Make?',
          content: 'Make is a visual automation platform that connects 1000+ apps. Think of it as "Zapier on steroids" – more powerful, more flexible, and easier to use.',
          highlights: [
            'Connect 1000+ apps and services',
            'Visual workflow builder (no coding)',
            'Advanced automation capabilities',
            'Reliable execution and error handling',
            'Perfect for marketing automation',
          ],
        },
        {
          title: 'Why Use Make for Marketing?',
          content: 'Make is perfect for automating your marketing funnel:',
          highlights: [
            'Connect your email tool (KlickTipp, GetResponse) with CRM',
            'Automate lead scoring and segmentation',
            'Create workflows for follow-ups',
            'Integrate payment processors',
            'Automate data collection and reporting',
          ],
        },
        {
          title: 'Getting Started: 5 Steps',
          content: 'Here\'s how to build your first automation:',
          steps: [
            {
              num: '1',
              title: 'Create a Make Account',
              desc: 'Sign up at make.com and verify your email',
            },
            {
              num: '2',
              title: 'Create a New Scenario',
              desc: 'A "scenario" is your workflow. Click "Create a new scenario"',
            },
            {
              num: '3',
              title: 'Add a Trigger',
              desc: 'Choose what starts your automation (e.g., "New email in Gmail")',
            },
            {
              num: '4',
              title: 'Add Actions',
              desc: 'Add what happens next (e.g., "Create contact in CRM")',
            },
            {
              num: '5',
              title: 'Test & Activate',
              desc: 'Test your workflow and turn it on',
            },
          ],
        },
        {
          title: 'Common Automation Examples',
          content: 'Here are real-world automations you can build:',
          examples: [
            {
              title: 'Email to CRM',
              desc: 'When someone replies to your email, automatically add them to your CRM',
            },
            {
              title: 'Lead Scoring',
              desc: 'When a lead opens 3+ emails, tag them as "hot lead" in KlickTipp',
            },
            {
              title: 'Payment Notifications',
              desc: 'When someone pays via Stripe, send them a welcome email',
            },
            {
              title: 'Data Backup',
              desc: 'Automatically backup your leads to Google Sheets daily',
            },
            {
              title: 'Slack Alerts',
              desc: 'Get Slack notifications when high-value leads sign up',
            },
          ],
        },
        {
          title: 'Best Practices',
          content: 'Follow these tips for successful automations:',
          highlights: [
            'Start simple – build one automation at a time',
            'Test thoroughly before activating',
            'Use error handling to catch problems',
            'Monitor your automations regularly',
            'Document what each workflow does',
          ],
        },
        {
          title: 'Troubleshooting Common Issues',
          content: 'If your automation isn\'t working:',
          highlights: [
            'Check that all apps are connected correctly',
            'Verify that your trigger is firing (check logs)',
            'Test each action individually',
            'Make sure you have enough API calls (check your plan)',
            'Contact Make support if you\'re stuck',
          ],
        },
      ],
      cta: 'Ready to automate your marketing?',
      ctaText: 'Start with Make Today',
      ctaUrl: 'https://www.make.com/en/register?pc=vipfunnel',
    },
    de: {
      title: 'Make Automation: Der komplette Anfänger-Leitfaden',
      date: '19. Mai 2026',
      readTime: '12 Min Lesezeit',
      intro: 'Make (ehemals Integromat) ist der einfachste Weg, deine Marketing-Workflows ohne Code zu automatisieren. In diesem Leitfaden zeige ich dir genau, wie du deine erste Automation in 30 Minuten aufbaust.',
      sections: [
        {
          title: 'Was ist Make?',
          content: 'Make ist eine visuelle Automation-Plattform, die 1000+ Apps verbindet. Denk an es als "Zapier auf Steroiden" – leistungsstarker, flexibler und einfacher zu bedienen.',
          highlights: [
            '1000+ Apps und Services verbinden',
            'Visueller Workflow-Builder (keine Codierung)',
            'Erweiterte Automation-Möglichkeiten',
            'Zuverlässige Ausführung und Fehlerbehandlung',
            'Perfekt für Marketing-Automation',
          ],
        },
        {
          title: 'Warum Make für Marketing?',
          content: 'Make ist perfekt zur Automatisierung deines Marketing-Funnels:',
          highlights: [
            'Verbinde dein E-Mail-Tool (KlickTipp, GetResponse) mit CRM',
            'Automatisiere Lead-Scoring und Segmentierung',
            'Erstelle Workflows für Follow-ups',
            'Integriere Zahlungsabwickler',
            'Automatisiere Datenerfassung und Berichterstattung',
          ],
        },
        {
          title: 'Erste Schritte: 5 Schritte',
          content: 'So baust du deine erste Automation:',
          steps: [
            {
              num: '1',
              title: 'Erstelle ein Make-Konto',
              desc: 'Melde dich bei make.com an und verifiziere deine E-Mail',
            },
            {
              num: '2',
              title: 'Erstelle ein neues Szenario',
              desc: 'Ein "Szenario" ist dein Workflow. Klicke auf "Neues Szenario erstellen"',
            },
            {
              num: '3',
              title: 'Füge einen Trigger hinzu',
              desc: 'Wähle, was deine Automation startet (z.B. "Neue E-Mail in Gmail")',
            },
            {
              num: '4',
              title: 'Füge Aktionen hinzu',
              desc: 'Füge hinzu, was als nächstes passiert (z.B. "Kontakt im CRM erstellen")',
            },
            {
              num: '5',
              title: 'Teste & Aktiviere',
              desc: 'Teste deinen Workflow und schalte ihn ein',
            },
          ],
        },
        {
          title: 'Häufige Automation-Beispiele',
          content: 'Hier sind echte Automationen, die du aufbauen kannst:',
          examples: [
            {
              title: 'E-Mail zu CRM',
              desc: 'Wenn jemand auf deine E-Mail antwortet, füge ihn automatisch zu deinem CRM hinzu',
            },
            {
              title: 'Lead-Scoring',
              desc: 'Wenn ein Lead 3+ E-Mails öffnet, kennzeichne ihn als "heißer Lead" in KlickTipp',
            },
            {
              title: 'Zahlungsbenachrichtigungen',
              desc: 'Wenn jemand über Stripe bezahlt, sende ihm eine Willkommens-E-Mail',
            },
            {
              title: 'Datensicherung',
              desc: 'Sichere deine Leads täglich automatisch in Google Sheets',
            },
            {
              title: 'Slack-Warnungen',
              desc: 'Erhalte Slack-Benachrichtigungen, wenn sich hochwertige Leads anmelden',
            },
          ],
        },
        {
          title: 'Best Practices',
          content: 'Befolge diese Tipps für erfolgreiche Automationen:',
          highlights: [
            'Starte einfach – baue eine Automation nach der anderen',
            'Teste gründlich vor der Aktivierung',
            'Nutze Fehlerbehandlung, um Probleme zu fangen',
            'Überwache deine Automationen regelmäßig',
            'Dokumentiere, was jeder Workflow macht',
          ],
        },
        {
          title: 'Behebung häufiger Probleme',
          content: 'Wenn deine Automation nicht funktioniert:',
          highlights: [
            'Überprüfe, dass alle Apps richtig verbunden sind',
            'Verifiziere, dass dein Trigger auslöst (überprüfe Logs)',
            'Teste jede Aktion einzeln',
            'Stelle sicher, dass du genug API-Aufrufe hast (überprüfe deinen Plan)',
            'Kontaktiere Make-Support, wenn du steckenbleibst',
          ],
        },
      ],
      cta: 'Bereit, dein Marketing zu automatisieren?',
      ctaText: 'Starte heute mit Make',
      ctaUrl: 'https://www.make.com/de/register?pc=vipfunnel',
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

            {section.examples && (
              <div className="grid gap-3 mb-6">
                {section.examples.map((example, i) => (
                  <Card key={i} className="p-4">
                    <h4 className="font-semibold mb-1">{example.title}</h4>
                    <p className="text-sm text-muted-foreground">{example.desc}</p>
                  </Card>
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
              ? 'Build your first automation workflow in 30 minutes.'
              : 'Baue deinen ersten Automation-Workflow in 30 Minuten.'}
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
