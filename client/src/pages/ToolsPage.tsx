import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Zap } from 'lucide-react';

const tools = {
  en: [
    {
      name: 'GetResponse',
      category: 'Email Marketing & Automation',
      description: 'Complete funnel builder with email marketing, webinars, and automation.',
      features: ['Email sequences', 'Landing pages', 'Webinar hosting', 'Automation workflows'],
      price: 'From $15/month',
      affiliate: true,
      affiliateUrl: 'https://www.getresponse.com/?a=AIFUNNEL',
      note: 'Coming soon - PartnerStack activation in progress',
    },
    {
      name: 'KlickTipp',
      category: 'Email Marketing & Automation',
      description: 'German-focused email marketing platform with powerful automation.',
      features: ['Email marketing', 'Automation', 'Affiliate management', 'SMS marketing'],
      price: 'From €27/month',
      affiliate: true,
      affiliateUrl: 'https://www.klicktipp.com/?a=204688',
    },
    {
      name: 'Instantly AI',
      category: 'Sales Automation',
      description: 'AI-powered sales automation and outreach platform.',
      features: ['Email sequences', 'AI copywriting', 'Lead tracking', 'Recurring revenue'],
      price: 'From $25/month',
      affiliate: true,
      affiliateUrl: 'https://instantly.ai/affiliate',
      note: 'Coming soon - PartnerStack activation in progress',
    },
    {
      name: 'Make',
      category: 'Automation & Integrations',
      description: 'Connect 1000+ apps and automate complex workflows without coding.',
      features: ['1000+ integrations', 'Visual workflow builder', 'Advanced automation', 'Reliable execution'],
      price: 'From $9.99/month',
      affiliate: true,
      affiliateUrl: 'https://www.make.com/en/register?pc=vipfunnel',
    },
  ],
  de: [
    {
      name: 'GetResponse',
      category: 'E-Mail-Marketing & Automation',
      description: 'Kompletter Funnel-Builder mit E-Mail-Marketing, Webinaren und Automation.',
      features: ['E-Mail-Sequenzen', 'Landing Pages', 'Webinar-Hosting', 'Automation-Workflows'],
      price: 'Ab €15/Monat',
      affiliate: true,
      affiliateUrl: 'https://www.getresponse.com/?a=AIFUNNEL',
      note: 'Kommt bald - PartnerStack-Aktivierung läuft',
    },
    {
      name: 'KlickTipp',
      category: 'E-Mail-Marketing & Automation',
      description: 'Deutschland-fokussierte E-Mail-Marketing-Plattform mit starker Automation.',
      features: ['E-Mail-Marketing', 'Automation', 'Affiliate-Management', 'SMS-Marketing'],
      price: 'Ab €27/Monat',
      affiliate: true,
      affiliateUrl: 'https://www.klicktipp.com/?a=204688',
    },
    {
      name: 'Instantly AI',
      category: 'Sales-Automation',
      description: 'KI-gestützte Sales-Automation und Outreach-Plattform.',
      features: ['E-Mail-Sequenzen', 'KI-Copywriting', 'Lead-Tracking', 'Wiederkehrende Einnahmen'],
      price: 'Ab €25/Monat',
      affiliate: true,
      affiliateUrl: 'https://instantly.ai/affiliate',
      note: 'Kommt bald - PartnerStack-Aktivierung läuft',
    },
    {
      name: 'Make',
      category: 'Automation & Integrationen',
      description: 'Verbinde 1000+ Apps und automatisiere komplexe Workflows ohne Code.',
      features: ['1000+ Integrationen', 'Visueller Workflow-Builder', 'Erweiterte Automation', 'Zuverlässige Ausführung'],
      price: 'Ab €9,99/Monat',
      affiliate: true,
      affiliateUrl: 'https://www.make.com/de/register?pc=vipfunnel',
    },
  ],
};

export default function ToolsPage() {
  const { language } = useLanguage();
  const pageTools = tools[language];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {language === 'en' ? 'Tools' : 'Tools'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en'
              ? 'Essential Tools for AI Funnels'
              : 'Essenzielle Tools für KI-Funnels'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {language === 'en'
              ? 'Curated list of the best tools to build, automate, and scale your funnels.'
              : 'Kuratierte Liste der besten Tools zum Aufbau, zur Automation und Skalierung deiner Funnels.'}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pageTools.map((tool) => (
            <Card key={tool.name} className="p-8 flex flex-col">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground">{tool.category}</p>
                  </div>
                  {tool.affiliate && (
                    <Badge variant="secondary">
                      {language === 'en' ? 'Affiliate' : 'Affiliate'}
                    </Badge>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{tool.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">
                  {language === 'en' ? 'Key Features' : 'Hauptmerkmale'}
                </h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1" />

              <div className="mb-6 pt-6 border-t border-border">
                <p className="text-lg font-semibold text-primary">{tool.price}</p>
              </div>

              {tool.note && (
                <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">{tool.note}</p>
                </div>
              )}

              <Button 
                className="w-full gap-2"
                onClick={() => window.open(tool.affiliateUrl, '_blank')}
              >
                {language === 'en' ? 'Visit Website' : 'Website besuchen'}
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en'
              ? 'Ready to build your first funnel?'
              : 'Bereit, deinen ersten Funnel zu bauen?'}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Start with our complete setup guide and join thousands of entrepreneurs building profitable funnels.'
              : 'Starten Sie mit unserer vollständigen Anleitung und treten Sie Tausenden von Unternehmern bei, die profitable Funnels aufbauen.'}
          </p>
          <Button size="lg">
            {language === 'en' ? 'Get Started Free' : 'Kostenlos starten'}
          </Button>
        </div>
      </div>
    </div>
  );
}
