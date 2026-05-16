import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

const guides = {
  en: [
    {
      id: 'getresponse-setup',
      title: 'Complete GetResponse Setup Guide',
      description: 'Step-by-step guide to set up your first GetResponse funnel, from email sequences to automation workflows.',
      category: 'GetResponse',
      readTime: '12 min',
    },
    {
      id: 'funnel-structure',
      title: 'The Anatomy of a High-Converting Funnel',
      description: 'Learn the essential elements that make funnels convert: landing pages, email sequences, and sales pages.',
      category: 'Strategy',
      readTime: '8 min',
    },
    {
      id: 'email-sequences',
      title: 'Crafting Email Sequences That Sell',
      description: 'Proven email templates and sequences that drive conversions without being pushy.',
      category: 'Email Marketing',
      readTime: '10 min',
    },
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation for Your Funnel',
      description: 'How to use AI tools to automate content creation, copywriting, and lead nurturing.',
      category: 'AI & Automation',
      readTime: '15 min',
    },
  ],
  de: [
    {
      id: 'getresponse-setup',
      title: 'Kompletter GetResponse-Einrichtungsleitfaden',
      description: 'Schritt-für-Schritt-Anleitung zum Einrichten deines ersten GetResponse-Funnels, von E-Mail-Sequenzen bis zu Automation-Workflows.',
      category: 'GetResponse',
      readTime: '12 min',
    },
    {
      id: 'funnel-structure',
      title: 'Die Anatomie eines hochkonvertierenden Funnels',
      description: 'Lerne die essentiellen Elemente, die Funnels konvertieren: Landing Pages, E-Mail-Sequenzen und Verkaufsseiten.',
      category: 'Strategie',
      readTime: '8 min',
    },
    {
      id: 'email-sequences',
      title: 'E-Mail-Sequenzen schreiben, die verkaufen',
      description: 'Bewährte E-Mail-Vorlagen und Sequenzen, die konvertieren, ohne aufdringlich zu wirken.',
      category: 'E-Mail-Marketing',
      readTime: '10 min',
    },
    {
      id: 'ai-automation',
      title: 'KI-gestützte Automation für deinen Funnel',
      description: 'Wie du KI-Tools zur Automatisierung von Content-Erstellung, Copywriting und Lead-Nurturing einsetzt.',
      category: 'KI & Automation',
      readTime: '15 min',
    },
  ],
};

export default function GuidesPage() {
  const { language } = useLanguage();
  const pageGuides = guides[language];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {language === 'en' ? 'Guides' : 'Anleitungen'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en'
              ? 'Master AI Funnels & Marketing Automation'
              : 'Beherrsche KI-Funnels & Marketing-Automation'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {language === 'en'
              ? 'Comprehensive guides to help you build, optimize, and scale your funnels with AI.'
              : 'Umfassende Anleitungen zum Aufbau, zur Optimierung und Skalierung deiner Funnels mit KI.'}
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pageGuides.map((guide) => (
            <Card key={guide.id} className="p-8 hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {guide.category}
                </span>
                <span className="text-xs text-muted-foreground">{guide.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {guide.title}
              </h3>
              <p className="text-muted-foreground mb-6">{guide.description}</p>
              <Button variant="ghost" className="gap-2 p-0">
                {language === 'en' ? 'Read Guide' : 'Anleitung lesen'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en'
              ? 'Want personalized guidance?'
              : 'Möchtest du personalisierte Anleitung?'}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Join our email list to receive exclusive guides, case studies, and automation tips.'
              : 'Melde dich für unsere E-Mail-Liste an und erhalte exklusive Anleitungen, Fallstudien und Automation-Tipps.'}
          </p>
          <Button size="lg">
            {language === 'en' ? 'Get Free Access' : 'Kostenlosen Zugang erhalten'}
          </Button>
        </div>
      </div>
    </div>
  );
}
