# AI Funnel Guide – KI-Automation & Betriebsplan

## Ziel

Minimale manuelle Arbeit nach Erstaufbau. Der Fokus liegt auf **Marketing-Optimierung**, nicht auf technischen Wartungsaufgaben.

## Automatisierungsbereiche

### 1. Content-Erstellung (Instagram & TikTok)

**Workflow**:
```
Wöchentliche Themenplanung (30 min)
    ↓
KI-Script-Generierung (ChatGPT/Claude)
    ↓
KI-Bildgenerierung (Midjourney/DALL-E)
    ↓
Automatische Planung (Buffer/Later)
    ↓
Automatische Veröffentlichung
    ↓
Automatische Engagement-Benachrichtigungen
```

**Tools**:
- **ChatGPT**: Skripte, Captions, Hashtags
- **Midjourney**: Visuelle Assets
- **Buffer**: Automatische Planung
- **Make.com**: Workflow-Automation

**Zeitaufwand**: 2-3 Stunden pro Woche (statt 10-15)

### 2. E-Mail-Sequenzen (GetResponse)

**Automation**:
- **Welcome Sequence**: Automatisch nach Lead-Erfassung
- **Nurture Sequence**: Automatische tägliche Mails basierend auf Verhalten
- **Affiliate Promotions**: Automatische Kampagnen zu festgelegten Zeiten
- **Segmentierung**: Automatisch nach Sprache und Verhalten

**Einrichtung** (einmalig):
1. Erstelle 10-15 E-Mail-Vorlagen in GetResponse
2. Richte Automation Workflows auf
3. Setze Trigger (Lead-Erfassung, Link-Klicks, Öffnungsrate)
4. Konfiguriere Segmentierung (DE/EN, Verhalten)

**Wartung**: 30 min pro Woche (Monitoring, Optimierung)

### 3. Lead-Funnel (Website)

**Automation**:
- LeadForm sendet automatisch an GetResponse
- Automatische Bestätigungsmails
- Automatische Tagging basierend auf Quelle
- Automatische Umleitung zu Affiliate-Links

**Einrichtung** (einmalig):
1. GetResponse API konfigurieren
2. Webhook für Form-Submissions einrichten
3. Tagging-Regeln definieren
4. Tracking-Parameter setzen

**Wartung**: 15 min pro Woche (Monitoring)

### 4. Affiliate-Link-Tracking

**Automation**:
- Automatische UTM-Parameter in allen Links
- Automatische Umami-Event-Tracking
- Automatische GetResponse-Tag-Zuweisung bei Klicks
- Automatische Conversion-Tracking

**Tools**:
- Umami (Privacy-focused Analytics)
- GetResponse (Lead-Tracking)
- UTM-Parameter (Campaign-Tracking)

**Wartung**: 15 min pro Woche (Daten-Review)

### 5. Social Media Engagement

**Automation**:
- Automatische Benachrichtigungen für Kommentare
- Automatische Antwort-Vorlagen (mit manueller Personalisierung)
- Automatische Hashtag-Generierung
- Automatische Post-Planung

**Tools**:
- Buffer (Planung + Benachrichtigungen)
- Make.com (Workflow-Automation)
- ChatGPT (Antwort-Generierung)

**Wartung**: 30 min pro Tag (Engagement, Antworten)

### 6. Analytics & Reporting

**Automation**:
- Automatische tägliche Umami-Reports
- Automatische wöchentliche GetResponse-Summaries
- Automatische Buffer-Analytics
- Automatische Slack-Benachrichtigungen

**Tools**:
- Umami (Website-Analytics)
- GetResponse (Email-Analytics)
- Buffer (Social-Analytics)
- Make.com (Report-Automation)

**Wartung**: 15 min pro Woche (Daten-Review)

## Monatlicher Betriebsplan

### Woche 1: Content-Planung & Erstellung

| Tag | Aufgabe | Zeit | Tool |
|-----|---------|------|------|
| Mo | Themenplanung (4 Wochen) | 1h | Notion/Google Docs |
| Di-Do | KI-Script-Generierung | 2h | ChatGPT/Claude |
| Fr | Bildgenerierung & Planung | 2h | Midjourney/Buffer |

**Automatisiert**: Veröffentlichung, Benachrichtigungen

### Woche 2-4: Engagement & Optimierung

| Tag | Aufgabe | Zeit |
|-----|---------|------|
| Mo-Fr | Tägliches Engagement (Kommentare, DMs) | 30 min |
| Mi | E-Mail-Sequenz-Optimierung | 30 min |
| Fr | Wöchentliche Analytics-Review | 1h |

**Automatisiert**: Planung, Versand, Tracking

## KI-Prompt-Bibliothek

### Instagram Caption Generator

```
Generiere eine Instagram Caption für einen Post über [THEMA].
Anforderungen:
- Hook in der ersten Zeile (max 20 Zeichen)
- Value Proposition (2-3 Sätze)
- Call-to-Action (Link in Bio)
- 5 relevante Hashtags
- Ton: Professionell aber zugänglich
- Länge: 150-200 Zeichen
```

### TikTok Script Generator

```
Erstelle ein 60-Sekunden TikTok-Skript über [THEMA].
Format:
- Hook (5 Sekunden): Attention-Grabber
- Body (40 Sekunden): Wert/Tipps
- CTA (15 Sekunden): Link in Bio / Follow

Anforderungen:
- Trending Sounds/Transitions einbinden
- Gen-Z freundlich
- Schnelle Schnitte
- Text-Overlays für wichtige Punkte
```

### E-Mail Subject Line Generator

```
Generiere 5 E-Mail Subject Lines für [THEMA].
Anforderungen:
- Curiosity-Gap oder Nutzen-Fokus
- Personalisierung ([NAME], [SPRACHE])
- Emoji optional (max 1)
- Länge: 40-50 Zeichen
- Höhere Öffnungsrate
```

### Hashtag Generator

```
Generiere 15 Hashtags für [PLATTFORM] über [THEMA].
Mix:
- 5 High-Volume Hashtags (500K+)
- 5 Medium-Volume Hashtags (50K-500K)
- 5 Nische Hashtags (unter 50K)

Anforderungen:
- Relevant für Zielgruppe
- Trending (falls zutreffend)
- Englisch/Deutsch (je nach Sprache)
```

## Automatisierungs-Workflows (Make.com)

### Workflow 1: Lead-Erfassung → Email-Sequenz

```
Trigger: LeadForm Submission
    ↓
Action 1: GetResponse API - Kontakt erstellen
    ↓
Action 2: GetResponse API - Tag hinzufügen (Sprache, Quelle)
    ↓
Action 3: Umami - Event tracken
    ↓
Action 4: Slack - Benachrichtigung senden
```

### Workflow 2: Social Media Post → Tracking

```
Trigger: Buffer - Post veröffentlicht
    ↓
Action 1: Umami - Event tracken (post_published)
    ↓
Action 2: Slack - Benachrichtigung senden
    ↓
Action 3: Warte 24h
    ↓
Action 4: Umami - Engagement-Daten abrufen
    ↓
Action 5: Slack - Performance-Report senden
```

### Workflow 3: Tägliche Analytics

```
Trigger: Täglich um 08:00 Uhr
    ↓
Action 1: Umami - Gestrige Daten abrufen
    ↓
Action 2: GetResponse - Email-Statistiken abrufen
    ↓
Action 3: Buffer - Social-Statistiken abrufen
    ↓
Action 4: Slack - Täglichen Report senden
```

## Technische Anforderungen

### Environment Variables (Cloudflare)

```env
# GetResponse
VITE_GETRESPONSE_API_KEY=xxx
VITE_GETRESPONSE_CAMPAIGN_ID=xxx

# Analytics
VITE_ANALYTICS_ENDPOINT=https://umami.example.com
VITE_ANALYTICS_WEBSITE_ID=xxx

# Affiliate Tracking
AFFILIATE_GETRESPONSE_ID=xxx
AFFILIATE_KLICKTIPP_ID=xxx
AFFILIATE_INSTANTLY_ID=xxx
```

### API Integrations

| Service | Zweck | Authentifizierung |
|---------|-------|-------------------|
| GetResponse | Lead-Erfassung, Email | API Key |
| Umami | Analytics | Website ID |
| Buffer | Social-Planung | OAuth |
| Make.com | Workflow-Automation | Webhooks |
| Slack | Benachrichtigungen | Webhooks |

## Kosten-Übersicht (Monatlich)

| Service | Plan | Kosten |
|---------|------|--------|
| Cloudflare Pages | Free | €0 |
| GetResponse | Pro | €99 |
| Buffer | Pro | €35 |
| Umami | Self-hosted | €0 (oder €10 SaaS) |
| Make.com | Free | €0 (oder €10+ für mehr) |
| ChatGPT | Plus | €20 |
| Midjourney | Pro | €30 |
| **Total** | | **€194-254** |

## Skalierungs-Roadmap

### Monat 1-3: Foundation
- Website & Funnel aufbauen
- Erste Email-Sequenzen
- Social Media starten
- Basis-Automation einrichten

### Monat 4-6: Wachstum
- Content-Produktion skalieren
- Affiliate-Promotionen starten
- Engagement-Automation erweitern
- Performance-Optimierung

### Monat 7-12: Optimierung
- A/B-Testing der Email-Sequenzen
- Social Media Influencer-Partnerships
- Neue Affiliate-Produkte hinzufügen
- Conversion-Rate-Optimierung

## Häufige Aufgaben & Zeitaufwand

| Aufgabe | Häufigkeit | Zeit | Automatisierbar? |
|---------|-----------|------|-----------------|
| Content-Planung | Wöchentlich | 1h | Teilweise |
| Script-Generierung | Täglich | 2h | Ja (90%) |
| Social Engagement | Täglich | 30 min | Nein |
| Email-Optimierung | Wöchentlich | 30 min | Teilweise |
| Analytics-Review | Wöchentlich | 1h | Ja (80%) |
| Affiliate-Link-Prüfung | Monatlich | 30 min | Ja (100%) |
| **Total pro Woche** | | **7-8h** | **Ziel: 3-4h** |

## Nächste Schritte

1. **GetResponse-Konto** einrichten und Kampagne erstellen
2. **Umami** selbst hosten oder SaaS-Plan abonnieren
3. **Make.com** Workflows konfigurieren
4. **Buffer** mit Social-Accounts verbinden
5. **ChatGPT Plus** und **Midjourney** abonnieren
6. **Erste Content-Batch** erstellen und planen
7. **Automation testen** und optimieren
8. **Tägliche Routine** etablieren

## Monitoring & Optimierung

### Wöchentliche Checks

- [ ] Engagement-Rate prüfen (Ziel: 5-8% Instagram, 10-15% TikTok)
- [ ] Email-Öffnungsrate prüfen (Ziel: 25-35%)
- [ ] Affiliate-Clicks prüfen (Ziel: 10+ pro Woche)
- [ ] Website-Traffic prüfen (Ziel: 100+ pro Woche)

### Monatliche Reviews

- [ ] Top-Content analysieren
- [ ] Underperforming-Content identifizieren
- [ ] Email-Sequenzen optimieren
- [ ] Affiliate-Links prüfen
- [ ] Neue Strategien testen

## Support & Ressourcen

- **Make.com Docs**: https://www.make.com/en/help
- **GetResponse API**: https://apidocs.getresponse.com/
- **Buffer Help**: https://buffer.com/help
- **ChatGPT Prompts**: https://platform.openai.com/docs/guides/prompt-engineering
