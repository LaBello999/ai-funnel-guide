import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export default function KlickTippVsMake() {
  const { language } = useLanguage();

  useSEO({
    title: language === 'en'
      ? 'KlickTipp vs Make: Which Tool Should You Choose?'
      : 'KlickTipp vs Make: Welches Tool solltest du wählen?',
    description: language === 'en'
      ? 'Complete comparison of KlickTipp and Make. Learn the differences, pros, cons, and which tool is best for your business.'
      : 'Vollständiger Vergleich von KlickTipp und Make. Erfahre die Unterschiede, Vor- und Nachteile und welches Tool am besten für dein Geschäft ist.',
    keywords: language === 'en' ? [
      'KlickTipp vs Make',
      'email marketing comparison',
      'automation tools',
      'KlickTipp review',
      'Make review',
    ] : [
      'KlickTipp vs Make',
      'email marketing vergleich',
      'automation tools',
      'KlickTipp bewertung',
      'Make bewertung',
    ],
    canonical: window.location.href,
    ogTitle: language === 'en'
      ? 'KlickTipp vs Make: Complete Comparison'
      : 'KlickTipp vs Make: Vollständiger Vergleich',
    ogDescription: language === 'en'
      ? 'Which tool is right for you? Read our detailed comparison.'
      : 'Welches Tool passt zu dir? Lese unseren detaillierten Vergleich.',
    twitterCard: 'summary',
  });

  const content = {
    en: {
      title: 'KlickTipp vs Make: Which Tool Should You Choose?',
      date: 'May 17, 2026',
      readTime: '8 min read',
      intro: 'If you\'re building a marketing funnel, you\'ve probably heard about both KlickTipp and Make. But which one is right for your business? In this comprehensive guide, we\'ll break down the differences, pros, cons, and help you make the right choice.',
      sections: [
        {
          title: 'What is KlickTipp?',
          content: 'KlickTipp is a German-based email marketing and automation platform designed specifically for entrepreneurs and small businesses. It combines email marketing, automation, affiliate management, and SMS marketing in one powerful tool.',
          highlights: [
            'Email sequences and automation',
            'Smart tagging system',
            'Built-in affiliate management',
            'SMS marketing included',
            'Perfect for German-speaking entrepreneurs',
          ],
        },
        {
          title: 'What is Make?',
          content: 'Make (formerly Integromat) is a visual workflow automation platform that connects 1000+ apps and services. It\'s designed for anyone who wants to automate complex workflows without writing code.',
          highlights: [
            '1000+ app integrations',
            'Visual workflow builder',
            'No coding required',
            'Advanced automation capabilities',
            'Reliable execution',
          ],
        },
        {
          title: 'Key Differences',
          content: 'While both tools help with automation, they serve different purposes:',
          table: {
            headers: ['Feature', 'KlickTipp', 'Make'],
            rows: [
              ['Primary Purpose', 'Email Marketing', 'Workflow Automation'],
              ['Integrations', '50+', '1000+'],
              ['Best For', 'Email sequences & lists', 'Connecting apps'],
              ['Learning Curve', 'Easy', 'Medium'],
              ['Price Range', '€27-€97/month', '€9.99-€99/month'],
              ['SMS Marketing', '✅ Included', '❌ Via integrations'],
              ['Affiliate System', '✅ Built-in', '❌ Not available'],
            ],
          },
        },
        {
          title: 'When to Choose KlickTipp',
          content: 'Choose KlickTipp if you:',
          highlights: [
            'Want to build email sequences and nurture leads',
            'Need a simple, intuitive interface',
            'Want built-in affiliate management',
            'Are German-speaking or targeting German customers',
            'Need SMS marketing capabilities',
            'Want everything in one platform',
          ],
        },
        {
          title: 'When to Choose Make',
          content: 'Choose Make if you:',
          highlights: [
            'Need to connect 50+ different apps',
            'Want advanced workflow automation',
            'Are comfortable with a visual builder',
            'Need to automate complex business processes',
            'Want to save money on integrations',
            'Are building custom automations',
          ],
        },
        {
          title: 'The Verdict',
          content: 'The truth is: you probably need BOTH. Here\'s why: Use KlickTipp for your email marketing and list building. Use Make to connect KlickTipp with your other tools (CRM, payment processor, webinar platform, etc.). Together, they create a powerful, automated marketing machine.',
        },
      ],
      cta: 'Ready to get started?',
      ctaText: 'Start with KlickTipp',
      ctaUrl: 'https://www.klicktipp.com/?a=204688',
    },
    de: {
      title: 'KlickTipp vs Make: Welches Tool solltest du wählen?',
      date: '17. Mai 2026',
      readTime: '8 Min Lesezeit',
      intro: 'Wenn du einen Marketing-Funnel aufbaust, hast du wahrscheinlich schon von KlickTipp und Make gehört. Aber welches Tool ist das Richtige für dein Geschäft? In diesem umfassenden Leitfaden zeigen wir dir die Unterschiede, Vor- und Nachteile und helfen dir, die richtige Wahl zu treffen.',
      sections: [
        {
          title: 'Was ist KlickTipp?',
          content: 'KlickTipp ist eine deutsche E-Mail-Marketing- und Automation-Plattform, die speziell für Unternehmer und kleine Unternehmen entwickelt wurde. Sie kombiniert E-Mail-Marketing, Automation, Affiliate-Management und SMS-Marketing in einem leistungsstarken Tool.',
          highlights: [
            'E-Mail-Sequenzen und Automation',
            'Smart-Tagging-System',
            'Integriertes Affiliate-Management',
            'SMS-Marketing enthalten',
            'Perfekt für deutschsprachige Unternehmer',
          ],
        },
        {
          title: 'Was ist Make?',
          content: 'Make (ehemals Integromat) ist eine visuelle Workflow-Automation-Plattform, die 1000+ Apps und Services verbindet. Sie ist für jeden gedacht, der komplexe Workflows ohne Code automatisieren möchte.',
          highlights: [
            '1000+ App-Integrationen',
            'Visueller Workflow-Builder',
            'Keine Codierung erforderlich',
            'Erweiterte Automation-Möglichkeiten',
            'Zuverlässige Ausführung',
          ],
        },
        {
          title: 'Wichtige Unterschiede',
          content: 'Obwohl beide Tools bei der Automation helfen, dienen sie unterschiedlichen Zwecken:',
          table: {
            headers: ['Funktion', 'KlickTipp', 'Make'],
            rows: [
              ['Hauptzweck', 'E-Mail-Marketing', 'Workflow-Automation'],
              ['Integrationen', '50+', '1000+'],
              ['Beste für', 'E-Mail-Sequenzen & Listen', 'Apps verbinden'],
              ['Lernkurve', 'Einfach', 'Mittel'],
              ['Preisbereich', '€27-€97/Monat', '€9,99-€99/Monat'],
              ['SMS-Marketing', '✅ Enthalten', '❌ Via Integrationen'],
              ['Affiliate-System', '✅ Eingebaut', '❌ Nicht verfügbar'],
            ],
          },
        },
        {
          title: 'Wann solltest du KlickTipp wählen?',
          content: 'Wähle KlickTipp, wenn du:',
          highlights: [
            'E-Mail-Sequenzen aufbauen und Leads pflegen möchtest',
            'Eine einfache, intuitive Benutzeroberfläche brauchst',
            'Integriertes Affiliate-Management benötigst',
            'Deutschsprachig bist oder deutsche Kunden ansprichst',
            'SMS-Marketing-Funktionen brauchst',
            'Alles in einer Plattform haben möchtest',
          ],
        },
        {
          title: 'Wann solltest du Make wählen?',
          content: 'Wähle Make, wenn du:',
          highlights: [
            '50+ verschiedene Apps verbinden musst',
            'Erweiterte Workflow-Automation brauchst',
            'Mit einem visuellen Builder vertraut bist',
            'Komplexe Geschäftsprozesse automatisieren möchtest',
            'Geld bei Integrationen sparen willst',
            'Benutzerdefinierte Automationen aufbaust',
          ],
        },
        {
          title: 'Das Fazit',
          content: 'Die Wahrheit ist: Du brauchst wahrscheinlich BEIDE. Hier ist warum: Nutze KlickTipp für dein E-Mail-Marketing und deine Listenerstellung. Nutze Make, um KlickTipp mit deinen anderen Tools (CRM, Zahlungsabwickler, Webinar-Plattform, etc.) zu verbinden. Zusammen schaffen sie eine leistungsstarke, automatisierte Marketing-Maschine.',
        },
      ],
      cta: 'Bereit, loszulegen?',
      ctaText: 'Mit KlickTipp starten',
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

            {section.table && (
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      {section.table.headers.map((header, i) => (
                        <th key={i} className="text-left py-3 px-4 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, i) => (
                      <tr key={i} className="border-b border-border hover:bg-muted/50">
                        {row.map((cell, j) => (
                          <td key={j} className="py-3 px-4 text-muted-foreground">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}

        {/* CTA */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mt-16">
          <h3 className="text-xl font-bold mb-2">{t.cta}</h3>
          <p className="text-muted-foreground mb-6">
            {language === 'en'
              ? 'Choose the right tool and start building your marketing funnel today.'
              : 'Wähle das richtige Tool und beginne heute, deinen Marketing-Funnel aufzubauen.'}
          </p>
          <Button 
            className="gap-2"
            onClick={() => window.open(t.ctaUrl, '_blank')}
          >
            {t.ctaText}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Card>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-xl font-bold mb-6">
            {language === 'en' ? 'Related Articles' : 'Verwandte Artikel'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h4 className="font-bold mb-2">
                {language === 'en'
                  ? 'How I Generate €500/Month with KlickTipp'
                  : 'Wie ich €500/Monat mit KlickTipp verdiene'}
              </h4>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Learn the complete strategy behind my affiliate marketing success.'
                  : 'Lerne die komplette Strategie hinter meinem Affiliate-Marketing-Erfolg.'}
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h4 className="font-bold mb-2">
                {language === 'en'
                  ? 'Make Automation: The Complete Guide'
                  : 'Make Automation: Der komplette Leitfaden'}
              </h4>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Master the art of workflow automation with Make.'
                  : 'Beherrsche die Kunst der Workflow-Automation mit Make.'}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
