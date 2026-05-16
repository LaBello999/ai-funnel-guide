import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';
import { Mail, Github, Twitter } from 'lucide-react';

const content = {
  en: {
    tagline: 'Your Independent Guide to AI-Powered Marketing Funnels',
    company: 'AI Funnel Guide',
    links: [
      { label: 'Home', href: '/en/' },
      { label: 'Guides', href: '/en/guides' },
      { label: 'Comparisons', href: '/en/comparisons' },
      { label: 'Tools', href: '/en/tools' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/en/privacy' },
      { label: 'Terms of Service', href: '/en/terms' },
      { label: 'Affiliate Disclosure', href: '/en/affiliate-disclosure' },
      { label: 'Contact', href: '/en/contact' },
    ],
    copyright: '© 2026 AI Funnel Guide. All rights reserved.',
    affiliateNote: 'We earn commissions from recommended products. Our reviews are independent and honest.',
  },
  de: {
    tagline: 'Dein unabhängiger Leitfaden zu KI-gestützten Marketing-Funnels',
    company: 'AI Funnel Guide',
    links: [
      { label: 'Startseite', href: '/de/' },
      { label: 'Anleitungen', href: '/de/guides' },
      { label: 'Vergleiche', href: '/de/comparisons' },
      { label: 'Tools', href: '/de/tools' },
    ],
    legal: [
      { label: 'Datenschutz', href: '/de/privacy' },
      { label: 'Nutzungsbedingungen', href: '/de/terms' },
      { label: 'Affiliate-Offenlegung', href: '/de/affiliate-disclosure' },
      { label: 'Kontakt', href: '/de/contact' },
    ],
    copyright: '© 2026 AI Funnel Guide. Alle Rechte vorbehalten.',
    affiliateNote: 'Wir verdienen Provisionen von empfohlenen Produkten. Unsere Bewertungen sind unabhängig und ehrlich.',
  },
};

export function Footer() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold">{t.company}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.tagline}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">
              {language === 'en' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              {t.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">
              {language === 'en' ? 'Legal' : 'Rechtliches'}
            </h4>
            <ul className="space-y-2">
              {t.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">
              {language === 'en' ? 'Connect' : 'Verbinden'}
            </h4>
            <div className="flex gap-3">
              <a
                href="mailto:hello@aifunnelguide.com"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                title="Twitter"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Affiliate Note */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
          <p className="text-xs text-blue-900 dark:text-blue-100">{t.affiliateNote}</p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{t.copyright}</p>
          <p>
            {language === 'en'
              ? 'Built with ❤️ for entrepreneurs'
              : 'Mit ❤️ für Unternehmer gebaut'}
          </p>
        </div>
      </div>
    </footer>
  );
}
