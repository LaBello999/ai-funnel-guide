/**
 * Tracking and Analytics Utilities
 * 
 * Handles event tracking for:
 * - Page views (automatic via Umami)
 * - Lead form submissions
 * - Affiliate link clicks
 * - Tool comparisons viewed
 * 
 * Uses Umami for privacy-focused analytics (already included in HTML)
 */

export interface TrackingEvent {
  event: string;
  properties?: Record<string, string | number | boolean>;
}

/**
 * Track custom events for affiliate funnel
 * Umami is already loaded via the HTML script tag
 */
export function trackEvent(eventName: string, eventData?: Record<string, any>): void {
  if (typeof window !== 'undefined' && (window as any).umami) {
    (window as any).umami.track(eventName, eventData);
  } else {
    console.log('[Tracking]', eventName, eventData);
  }
}

/**
 * Track lead form submission
 */
export function trackLeadSubmission(email: string, language: 'en' | 'de'): void {
  trackEvent('lead_captured', {
    email_domain: email.split('@')[1],
    language,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track affiliate link click
 */
export function trackAffiliateClick(toolName: string, affiliateId: string): void {
  trackEvent('affiliate_click', {
    tool: toolName,
    affiliate_id: affiliateId,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track page view (automatic via Umami, but can be called explicitly)
 */
export function trackPageView(pageName: string, language: 'en' | 'de'): void {
  trackEvent('page_view', {
    page: pageName,
    language,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track comparison view
 */
export function trackComparisonView(toolName: string): void {
  trackEvent('comparison_viewed', {
    tool: toolName,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track guide access
 */
export function trackGuideAccess(guideId: string): void {
  trackEvent('guide_accessed', {
    guide_id: guideId,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Get current session info for tracking
 */
export function getSessionInfo(): {
  language: string;
  referrer: string;
  userAgent: string;
} {
  return {
    language: navigator.language,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
  };
}
