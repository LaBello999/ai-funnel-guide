import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Scale } from 'lucide-react';

const comparisons = {
  en: {
    title: 'Tool Comparisons',
    subtitle: 'Honest, independent reviews of the best funnel and automation tools',
    tools: [
      {
        name: 'GetResponse',
        rating: 4.5,
        price: '$15-99/month',
        pros: ['All-in-one platform', 'Excellent automation', 'Great templates'],
        cons: ['Learning curve', 'Can be pricey at scale'],
        affiliate: true,
      },
      {
        name: 'KlickTipp',
        rating: 4.3,
        price: '$27-297/month',
        pros: ['German-focused', 'Powerful automation', 'Great support'],
        cons: ['Limited integrations', 'Higher price point'],
        affiliate: true,
      },
      {
        name: 'Instantly AI',
        rating: 4.2,
        price: '$25-300/month',
        pros: ['AI-powered features', 'Sales automation', 'Recurring revenue'],
        cons: ['Newer platform', 'Smaller community'],
        affiliate: true,
      },
    ],
  },
  de: {
    title: 'Tool-Vergleiche',
    subtitle: 'Ehrliche, unabhängige Bewertungen der besten Funnel- und Automation-Tools',
    tools: [
      {
        name: 'GetResponse',
        rating: 4.5,
        price: '€15-99/Monat',
        pros: ['All-in-One-Plattform', 'Hervorragende Automation', 'Großartige Vorlagen'],
        cons: ['Lernkurve', 'Kann bei Skalierung teuer werden'],
        affiliate: true,
      },
      {
        name: 'KlickTipp',
        rating: 4.3,
        price: '€27-297/Monat',
        pros: ['Deutschland-fokussiert', 'Starke Automation', 'Großartiger Support'],
        cons: ['Begrenzte Integrationen', 'Höherer Preis'],
        affiliate: true,
      },
      {
        name: 'Instantly AI',
        rating: 4.2,
        price: '€25-300/Monat',
        pros: ['KI-gestützte Funktionen', 'Sales-Automation', 'Wiederkehrende Einnahmen'],
        cons: ['Neuere Plattform', 'Kleinere Community'],
        affiliate: true,
      },
    ],
  },
};

export default function ComparisonsPage() {
  const { language } = useLanguage();
  const content = comparisons[language];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {language === 'en' ? 'Comparisons' : 'Vergleiche'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
          <p className="text-xl text-muted-foreground">{content.subtitle}</p>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-12">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong>{language === 'en' ? 'Affiliate Disclosure:' : 'Affiliate-Offenlegung:'}</strong> {' '}
            {language === 'en'
              ? 'We earn commissions from some of the tools listed below. However, our reviews are independent and based on real user experience.'
              : 'Wir verdienen Provisionen von einigen der unten aufgeführten Tools. Unsere Bewertungen sind jedoch unabhängig und basieren auf echten Benutzererfahrungen.'}
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.tools.map((tool) => (
            <Card key={tool.name} className="p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(tool.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{tool.rating}/5</span>
                </div>
                <p className="text-lg font-semibold text-primary">{tool.price}</p>
              </div>

              <div className="flex-1 mb-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {language === 'en' ? 'Pros' : 'Vorteile'}
                  </h4>
                  <ul className="space-y-1">
                    {tool.pros.map((pro, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    {language === 'en' ? 'Cons' : 'Nachteile'}
                  </h4>
                  <ul className="space-y-1">
                    {tool.cons.map((con, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {tool.affiliate && (
                <Badge variant="secondary" className="mb-4 w-fit">
                  {language === 'en' ? 'Affiliate Link' : 'Affiliate-Link'}
                </Badge>
              )}

              <Button className="w-full">
                {language === 'en' ? 'Learn More' : 'Mehr erfahren'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
