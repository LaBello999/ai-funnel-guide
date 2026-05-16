import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLanguageUrl } from '@/lib/language';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

/**
 * Language Switcher Component
 * 
 * Displays a language toggle button allowing users to switch between German and English.
 * Maintains the current page path while changing language.
 */
export function LanguageSwitcher() {
  const [location] = useLocation();
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: 'de' | 'en') => {
    setLanguage(lang);
    // Navigate to the same page in the new language
    const newUrl = getLanguageUrl(location, lang);
    window.location.href = newUrl;
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1 bg-muted rounded-lg p-1">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleLanguageChange('en')}
          className="text-xs"
        >
          English
        </Button>
        <Button
          variant={language === 'de' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleLanguageChange('de')}
          className="text-xs"
        >
          Deutsch
        </Button>
      </div>
    </div>
  );
}
