import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { CheckCircle, Loader2 } from 'lucide-react';

/**
 * Lead Form Component
 * 
 * Collects email and name for GetResponse funnel integration.
 * Placeholder for GetResponse API integration.
 * 
 * TODO: Connect to GetResponse API
 * - Replace GETRESPONSE_FORM_ID with actual GetResponse form ID
 * - Implement proper error handling
 * - Add success tracking
 */

const content = {
  en: {
    title: 'Get Free Access to Our Guides',
    description: 'Join 1000+ entrepreneurs building profitable AI funnels. Receive exclusive guides, case studies, and automation tips.',
    nameLabel: 'Your Name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Your Email',
    emailPlaceholder: 'you@example.com',
    submitButton: 'Get Free Access',
    successTitle: 'Welcome!',
    successMessage: 'Check your email for your first guide. We\'ll send you more tips and strategies soon.',
    privacyText: 'We respect your privacy. Unsubscribe anytime.',
  },
  de: {
    title: 'Kostenlos auf unsere Anleitungen zugreifen',
    description: 'Treten Sie 1000+ Unternehmern bei, die profitable KI-Funnels aufbauen. Erhalten Sie exklusive Anleitungen, Fallstudien und Automation-Tipps.',
    nameLabel: 'Dein Name',
    namePlaceholder: 'Max Mustermann',
    emailLabel: 'Deine E-Mail',
    emailPlaceholder: 'du@beispiel.de',
    submitButton: 'Kostenlos starten',
    successTitle: 'Willkommen!',
    successMessage: 'Überprüfe dein E-Mail-Postfach auf deine erste Anleitung. Wir werden dir bald weitere Tipps und Strategien senden.',
    privacyText: 'Wir respektieren deine Privatsphäre. Du kannst dich jederzeit abmelden.',
  },
};

export function LeadForm() {
  const { language } = useLanguage();
  const t = content[language];
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      // TODO: Replace with actual GetResponse API call
      // This is a placeholder that simulates a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Log for debugging
      console.log('Lead captured:', formData);
      
      // Here you would normally send to GetResponse API
      // Example:
      // const response = await fetch('https://api.getresponse.com/v3/contacts', {
      //   method: 'POST',
      //   headers: {
      //     'X-Auth-Token': `Bearer ${GETRESPONSE_API_KEY}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email: formData.email,
      //     name: formData.name,
      //     campaign: { campaignId: GETRESPONSE_CAMPAIGN_ID },
      //     tags: ['ai-funnel-guide', language],
      //   }),
      // });

      setFormState('success');
      setFormData({ name: '', email: '' });

      // Reset form after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('idle');
    }
  };

  if (formState === 'success') {
    return (
      <Card className="p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">{t.successTitle}</h3>
        <p className="text-muted-foreground">{t.successMessage}</p>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold mb-2">{t.title}</h3>
      <p className="text-muted-foreground mb-6">{t.description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">{t.nameLabel}</Label>
          <Input
            id="name"
            type="text"
            placeholder={t.namePlaceholder}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={formState === 'loading'}
          />
        </div>

        <div>
          <Label htmlFor="email">{t.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={formState === 'loading'}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={formState === 'loading'}
        >
          {formState === 'loading' && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
          {t.submitButton}
        </Button>

        <p className="text-xs text-muted-foreground text-center">{t.privacyText}</p>
      </form>
    </Card>
  );
}
