/**
 * Language Detection and Routing
 * 
 * Handles browser language detection, localStorage persistence, and URL-based language selection.
 * Supports /de/ and /en/ URL prefixes for clean routing and SEO.
 */

export type Language = 'de' | 'en';

const DEFAULT_LANGUAGE: Language = 'en';
const STORAGE_KEY = 'aifunnelguide_language';

/**
 * Get the user's preferred language from multiple sources (in priority order):
 * 1. URL path (/de/ or /en/)
 * 2. localStorage (user's previous selection)
 * 3. Browser language (Accept-Language header)
 * 4. Default (English)
 */
export function getPreferredLanguage(pathname: string): Language {
  // Check URL path first
  if (pathname.startsWith('/de/') || pathname === '/de') return 'de';
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';

  // Check localStorage
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && ['de', 'en'].includes(stored)) return stored;

  // Check browser language
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'de') return 'de';

  return DEFAULT_LANGUAGE;
}

/**
 * Save language preference to localStorage
 */
export function setLanguagePreference(lang: Language): void {
  localStorage.setItem(STORAGE_KEY, lang);
}

/**
 * Get the URL for a given language
 * Maintains current path structure but changes language prefix
 */
export function getLanguageUrl(pathname: string, lang: Language): string {
  // Remove existing language prefix
  let path = pathname;
  if (path.startsWith('/de/') || path.startsWith('/en/')) {
    path = path.slice(3);
  } else if (path === '/de' || path === '/en') {
    path = '/';
  }

  // Add new language prefix
  return `/${lang}${path}`;
}

/**
 * Extract the current language from pathname
 */
export function extractLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/de/') || pathname === '/de') return 'de';
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  return DEFAULT_LANGUAGE;
}

/**
 * Remove language prefix from pathname to get the page path
 */
export function getPagePath(pathname: string): string {
  if (pathname.startsWith('/de/')) return pathname.slice(3);
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  if (pathname === '/de' || pathname === '/en') return '/';
  return pathname;
}

/**
 * Build a localized route path
 */
export function buildLocalizedPath(lang: Language, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}
