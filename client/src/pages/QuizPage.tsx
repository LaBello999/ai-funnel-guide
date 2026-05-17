import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { useABTest } from '@/hooks/useABTest';

const quizContent = {
  en: {
    title: 'Find Your Perfect Tool',
    subtitle: 'Answer a few questions to get personalized recommendations',
    questions: [
      {
        id: 'goal',
        question: 'What is your primary goal?',
        options: [
          { label: 'Build email sequences & nurture leads', value: 'email' },
          { label: 'Automate sales outreach & prospecting', value: 'sales' },
          { label: 'Connect tools & automate workflows', value: 'automation' },
        ],
      },
      {
        id: 'budget',
        question: 'What is your monthly budget?',
        options: [
          { label: 'Under €30/month', value: 'budget-low' },
          { label: '€30-€100/month', value: 'budget-mid' },
          { label: '€100+/month', value: 'budget-high' },
        ],
      },
      {
        id: 'experience',
        question: 'What is your experience level?',
        options: [
          { label: 'Beginner - I need hand-holding', value: 'beginner' },
          { label: 'Intermediate - I know what I\'m doing', value: 'intermediate' },
          { label: 'Advanced - I need power & flexibility', value: 'advanced' },
        ],
      },
    ],
    recommendations: {
      email: {
        title: 'Email Marketing & Automation',
        tools: [
          {
            name: 'GetResponse',
            reason: 'Best for: All-in-one funnel builder with email, landing pages, and webinars',
            features: ['Email sequences', 'Landing pages', 'Webinar hosting', 'Automation workflows'],
            price: 'From €15/month',
            affiliate: true,
            cta: 'Start with GetResponse',
          },
          {
            name: 'KlickTipp',
            reason: 'Best for: German-speaking entrepreneurs with advanced automation needs',
            features: ['Email marketing', 'Smart tagging', 'Affiliate management', 'SMS marketing'],
            price: 'From €27/month',
            affiliate: true,
            cta: 'Try KlickTipp',
          },
        ],
      },
      sales: {
        title: 'Sales Automation & Outreach',
        tools: [
          {
            name: 'Instantly AI',
            reason: 'Best for: AI-powered cold email & sales automation at scale',
            features: ['Email sequences', 'AI copywriting', 'Lead tracking', 'Recurring revenue'],
            price: 'From €25/month',
            affiliate: true,
            cta: 'Automate Your Sales',
          },
        ],
      },
      automation: {
        title: 'Workflow Automation & Integrations',
        tools: [
          {
            name: 'Make (formerly Integromat)',
            reason: 'Best for: Connect 1000+ apps and automate complex workflows',
            features: ['1000+ integrations', 'Visual workflow builder', 'Advanced automation', 'Reliable execution'],
            price: 'From €9.99/month',
            affiliate: true,
            cta: 'Automate Everything',
          },
        ],
      },
    },
  },
  de: {
    title: 'Finde dein perfektes Tool',
    subtitle: 'Beantworte ein paar Fragen und erhalte personalisierte Empfehlungen',
    questions: [
      {
        id: 'goal',
        question: 'Was ist dein primäres Ziel?',
        options: [
          { label: 'E-Mail-Sequenzen aufbauen & Leads pflegen', value: 'email' },
          { label: 'Sales-Outreach & Prospecting automatisieren', value: 'sales' },
          { label: 'Tools verbinden & Workflows automatisieren', value: 'automation' },
        ],
      },
      {
        id: 'budget',
        question: 'Was ist dein monatliches Budget?',
        options: [
          { label: 'Unter €30/Monat', value: 'budget-low' },
          { label: '€30-€100/Monat', value: 'budget-mid' },
          { label: '€100+/Monat', value: 'budget-high' },
        ],
      },
      {
        id: 'experience',
        question: 'Wie ist dein Erfahrungslevel?',
        options: [
          { label: 'Anfänger - Ich brauche Anleitung', value: 'beginner' },
          { label: 'Fortgeschrittene - Ich weiß, was ich tue', value: 'intermediate' },
          { label: 'Experte - Ich brauche Power & Flexibilität', value: 'advanced' },
        ],
      },
    ],
    recommendations: {
      email: {
        title: 'E-Mail-Marketing & Automation',
        tools: [
          {
            name: 'GetResponse',
            reason: 'Beste für: All-in-One Funnel-Builder mit E-Mail, Landing Pages und Webinaren',
            features: ['E-Mail-Sequenzen', 'Landing Pages', 'Webinar-Hosting', 'Automation-Workflows'],
            price: 'Ab €15/Monat',
            affiliate: true,
            cta: 'Mit GetResponse starten',
          },
          {
            name: 'KlickTipp',
            reason: 'Beste für: Deutsche Unternehmer mit fortgeschrittenen Automation-Anforderungen',
            features: ['E-Mail-Marketing', 'Smart Tagging', 'Affiliate-Management', 'SMS-Marketing'],
            price: 'Ab €27/Monat',
            affiliate: true,
            cta: 'KlickTipp testen',
          },
        ],
      },
      sales: {
        title: 'Sales-Automation & Outreach',
        tools: [
          {
            name: 'Instantly AI',
            reason: 'Beste für: KI-gestützte Cold-E-Mail & Sales-Automation in großem Maßstab',
            features: ['E-Mail-Sequenzen', 'KI-Copywriting', 'Lead-Tracking', 'Wiederkehrende Einnahmen'],
            price: 'Ab €25/Monat',
            affiliate: true,
            cta: 'Deinen Sales automatisieren',
          },
        ],
      },
      automation: {
        title: 'Workflow-Automation & Integrationen',
        tools: [
          {
            name: 'Make (ehemals Integromat)',
            reason: 'Beste für: 1000+ Apps verbinden und komplexe Workflows automatisieren',
            features: ['1000+ Integrationen', 'Visueller Workflow-Builder', 'Erweiterte Automation', 'Zuverlässige Ausführung'],
            price: 'Ab €9,99/Monat',
            affiliate: true,
            cta: 'Alles automatisieren',
          },
        ],
      },
    },
  },
};

export default function QuizPage() {
  const { language } = useLanguage();
  const t = quizContent[language];
  const { trackConversion } = useABTest();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  // SEO Optimization
  useSEO({
    title: language === 'en' 
      ? 'Marketing Tool Quiz - Find Your Perfect Match' 
      : 'Marketing-Tool Quiz - Finde dein perfektes Match',
    description: language === 'en'
      ? 'Take our 2-minute quiz to get personalized AI marketing tool recommendations based on your goals, budget, and experience level.'
      : 'Mache unser 2-Minuten-Quiz und erhalte personalisierte KI-Marketing-Tool-Empfehlungen basierend auf deinen Zielen, Budget und Erfahrungslevel.',
    keywords: language === 'en' ? [
      'marketing tool quiz',
      'AI tool recommendation',
      'GetResponse vs KlickTipp',
      'marketing automation quiz',
      'best marketing tool',
    ] : [
      'Marketing-Tool Quiz',
      'KI-Tool-Empfehlung',
      'GetResponse vs KlickTipp',
      'Marketing-Automation Quiz',
      'bestes Marketing-Tool',
    ],
    canonical: window.location.href,
    ogTitle: language === 'en' ? 'Marketing Tool Quiz - Find Your Perfect Match' : 'Marketing-Tool Quiz - Finde dein perfektes Match',
    ogDescription: language === 'en'
      ? 'Get personalized recommendations in 2 minutes'
      : 'Erhalte personalisierte Empfehlungen in 2 Minuten',
    twitterCard: 'summary',
  });

  const handleAnswer = (value: string) => {
    const questionId = t.questions[currentQuestion].id;
    setAnswers({ ...answers, [questionId]: value });

    if (currentQuestion < t.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      trackConversion('quiz_click');
      setShowResults(true);
    }
  };

  const getRecommendation = () => {
    const goal = answers['goal'] || 'email';
    return t.recommendations[goal as keyof typeof t.recommendations];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = getRecommendation();
    return (
      <div className="min-h-screen py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <span className="text-sm font-semibold text-green-600">
                  {language === 'en' ? 'Recommendation Ready' : 'Empfehlung bereit'}
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">{recommendation.title}</h2>
              <p className="text-xl text-muted-foreground">
                {language === 'en'
                  ? 'Based on your answers, here are the best tools for you:'
                  : 'Basierend auf deinen Antworten, hier sind die besten Tools für dich:'}
              </p>
            </div>

            {/* Recommended Tools */}
            <div className="space-y-6 mb-12">
              {recommendation.tools.map((tool) => (
                <Card key={tool.name} className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{tool.name}</h3>
                      <p className="text-muted-foreground mt-1">{tool.reason}</p>
                    </div>
                    {tool.affiliate && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {language === 'en' ? 'Recommended' : 'Empfohlen'}
                      </span>
                    )}
                  </div>

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

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <p className="text-lg font-semibold text-primary">{tool.price}</p>
                    <Button className="gap-2">
                      {tool.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Reset Button */}
            <div className="text-center">
              <Button variant="outline" onClick={resetQuiz}>
                {language === 'en' ? 'Start Over' : 'Neu starten'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = t.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / t.questions.length) * 100;

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">
                {language === 'en' ? 'Question' : 'Frage'} {currentQuestion + 1} {language === 'en' ? 'of' : 'von'} {t.questions.length}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-8">{question.question}</h2>

            <div className="space-y-4">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left font-semibold"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="text-muted-foreground hover:text-foreground disabled:opacity-50"
            >
              {language === 'en' ? '← Back' : '← Zurück'}
            </button>
            <span className="text-sm text-muted-foreground">
              {language === 'en' ? 'Skip to results' : 'Zu Ergebnissen springen'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
