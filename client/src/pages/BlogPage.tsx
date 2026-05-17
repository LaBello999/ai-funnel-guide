import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

const blogPosts = {
  en: [
    {
      id: 'klicktipp-vs-make',
      title: 'KlickTipp vs Make: Which Tool Should You Choose?',
      excerpt: 'Comparing two powerful automation tools to help you make the right decision for your business.',
      date: 'May 17, 2026',
      author: 'AI Funnel Guide',
      readTime: '8 min read',
      category: 'Comparison',
      image: '🔄',
    },
    {
      id: 'klicktipp-revenue',
      title: 'How I Generate €500/Month with KlickTipp Affiliate Marketing',
      excerpt: 'A complete breakdown of my affiliate marketing strategy using KlickTipp and how you can replicate it.',
      date: 'May 16, 2026',
      author: 'AI Funnel Guide',
      readTime: '10 min read',
      category: 'Case Study',
      image: '💰',
    },
    {
      id: 'make-automation-guide',
      title: 'Make Automation: The Complete Beginner\'s Guide',
      excerpt: 'Learn how to automate your entire marketing funnel with Make in just 30 minutes.',
      date: 'May 15, 2026',
      author: 'AI Funnel Guide',
      readTime: '12 min read',
      category: 'Guide',
      image: '⚙️',
    },
    {
      id: 'email-vs-automation',
      title: 'Email Marketing vs Automation: What Do You Really Need?',
      excerpt: 'Stop guessing. Here\'s exactly when to use email marketing vs automation tools.',
      date: 'May 14, 2026',
      author: 'AI Funnel Guide',
      readTime: '7 min read',
      category: 'Strategy',
      image: '📧',
    },
  ],
  de: [
    {
      id: 'klicktipp-vs-make',
      title: 'KlickTipp vs Make: Welches Tool solltest du wählen?',
      excerpt: 'Vergleich zweier leistungsstarker Automation-Tools, um dir die richtige Entscheidung zu treffen.',
      date: '17. Mai 2026',
      author: 'AI Funnel Guide',
      readTime: '8 Min Lesezeit',
      category: 'Vergleich',
      image: '🔄',
    },
    {
      id: 'klicktipp-revenue',
      title: 'Wie ich €500/Monat mit KlickTipp Affiliate Marketing verdiene',
      excerpt: 'Ein kompletter Überblick über meine Affiliate-Marketing-Strategie mit KlickTipp und wie du sie replizieren kannst.',
      date: '16. Mai 2026',
      author: 'AI Funnel Guide',
      readTime: '10 Min Lesezeit',
      category: 'Fallstudie',
      image: '💰',
    },
    {
      id: 'make-automation-guide',
      title: 'Make Automation: Der komplette Anfänger-Leitfaden',
      excerpt: 'Lerne, wie du deinen gesamten Marketing-Funnel mit Make in nur 30 Minuten automatisierst.',
      date: '15. Mai 2026',
      author: 'AI Funnel Guide',
      readTime: '12 Min Lesezeit',
      category: 'Anleitung',
      image: '⚙️',
    },
    {
      id: 'email-vs-automation',
      title: 'E-Mail-Marketing vs Automation: Was brauchst du wirklich?',
      excerpt: 'Hör auf zu raten. Hier erfährst du genau, wann du E-Mail-Marketing vs Automation-Tools brauchst.',
      date: '14. Mai 2026',
      author: 'AI Funnel Guide',
      readTime: '7 Min Lesezeit',
      category: 'Strategie',
      image: '📧',
    },
  ],
};

export default function BlogPage() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const posts = blogPosts[language];

  useSEO({
    title: language === 'en' 
      ? 'AI Funnel Guide Blog - Marketing Automation Tips' 
      : 'AI Funnel Guide Blog - Marketing Automation Tipps',
    description: language === 'en'
      ? 'Read our latest articles on marketing automation, email marketing, and AI-powered tools.'
      : 'Lese unsere neuesten Artikel über Marketing-Automation, E-Mail-Marketing und KI-gestützte Tools.',
    keywords: language === 'en' ? [
      'marketing automation blog',
      'email marketing tips',
      'automation tools guide',
      'funnel building',
      'sales automation',
    ] : [
      'marketing automation blog',
      'email marketing tipps',
      'automation tools anleitung',
      'funnel building',
      'sales automation',
    ],
    canonical: window.location.href,
    ogTitle: language === 'en' ? 'AI Funnel Guide Blog' : 'AI Funnel Guide Blog',
    ogDescription: language === 'en'
      ? 'Expert guides on marketing automation and AI-powered tools'
      : 'Experten-Leitfäden zu Marketing-Automation und KI-gestützten Tools',
    twitterCard: 'summary',
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Blog' : 'Blog'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {language === 'en'
              ? 'Expert guides, case studies, and strategies for marketing automation.'
              : 'Experten-Leitfäden, Fallstudien und Strategien für Marketing-Automation.'}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
              onClick={() => {
                if (post.id === 'klicktipp-vs-make') setLocation(`/${language}/blog/klicktipp-vs-make`);
                else if (post.id === 'klicktipp-revenue') setLocation(`/${language}/blog/klicktipp-revenue`);
                else if (post.id === 'make-automation-guide') setLocation(`/${language}/blog/make-automation-guide`);
                else if (post.id === 'email-vs-automation') setLocation(`/${language}/blog/email-vs-automation`);
              }}
            >
              {/* Featured Image */}
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                {post.image}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <Button className="w-full gap-2" variant="outline">
                  {language === 'en' ? 'Read Article' : 'Artikel lesen'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en' 
              ? 'Get Weekly Marketing Tips' 
              : 'Erhalte wöchentliche Marketing-Tipps'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'en'
              ? 'Subscribe to get the latest guides and strategies delivered to your inbox.'
              : 'Abonniere, um die neuesten Leitfäden und Strategien in deinen Posteingang zu erhalten.'}
          </p>
          <Button>
            {language === 'en' ? 'Subscribe Now' : 'Jetzt abonnieren'}
          </Button>
        </div>
      </div>
    </div>
  );
}
