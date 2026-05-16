# AI Funnel Guide – Nächste Schritte zur Fertigstellung

Herzlichen Glückwunsch! Die Grundstruktur von **AI Funnel Guide** ist fertig. Hier sind alle Schritte, die du jetzt durchführen musst, um das Projekt live zu bringen.

---

## 1. **Domain registrieren und Cloudflare konfigurieren**

### 1.1 Domain registrieren
- Gehe zu einem Domain-Registrar (z.B. Namecheap, GoDaddy, Cloudflare Registrar)
- Registriere **aifunnelguide.com** oder deine gewählte Domain
- Optional: Registriere auch die deutsche Variante (z.B. **aifunnelguide.de**)

### 1.2 Cloudflare einrichten
1. Erstelle einen kostenlosen Cloudflare-Account: https://dash.cloudflare.com
2. Füge deine Domain hinzu (Add a Site)
3. Ändere die Nameserver bei deinem Registrar zu Cloudflares Nameservern:
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`
4. Warte 24-48 Stunden auf die DNS-Propagation
5. Aktiviere in Cloudflare:
   - **SSL/TLS**: Full (strict)
   - **Page Rules**: Caching Level = Cache Everything
   - **Workers**: Für zukünftige Automatisierungen

### 1.3 Cloudflare Pages Deployment
1. Verbinde dein Git-Repository mit Cloudflare Pages
2. Setze Build-Einstellungen:
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Node version**: 22
3. Cloudflare Pages wird automatisch bei jedem Git-Push deployen

---

## 2. **GetResponse Integration**

### 2.1 GetResponse Account erstellen
1. Gehe zu https://www.getresponse.com
2. Erstelle einen Account (kostenlos oder kostenpflichtig)
3. Notiere deine **API Key** (Settings → API)

### 2.2 Affiliate-Links generieren
1. Melde dich bei GetResponse Affiliate-Programm an: https://www.getresponse.com/affiliates
2. Generiere deine persönlichen Affiliate-Links
3. Ersetze die Platzhalter in der Website:
   - `client/src/components/LeadForm.tsx`: GetResponse-Formular-Embed
   - `client/src/pages/ToolsPage.tsx`: Affiliate-Links
   - `client/src/pages/ComparisonsPage.tsx`: Affiliate-Links

### 2.3 E-Mail-Liste einrichten
1. Erstelle in GetResponse zwei separate Listen:
   - **AI Funnel Guide - English** (für englische Leads)
   - **AI Funnel Guide - Deutsch** (für deutsche Leads)
2. Konfiguriere Autoresponder-Sequenzen für beide Listen
3. Integriere die GetResponse-API in die LeadForm-Komponente

---

## 3. **Analytics & Tracking**

### 3.1 Umami Analytics (bereits konfiguriert)
- Die Website sendet bereits Daten an Umami
- Umami Dashboard: Überprüfe die Umgebungsvariablen `VITE_ANALYTICS_ENDPOINT` und `VITE_ANALYTICS_WEBSITE_ID`

### 3.2 Affiliate-Tracking
- Nutze UTM-Parameter für alle externen Links:
  - `?utm_source=aifunnelguide&utm_medium=website&utm_campaign=getresponse`
- Integriere Tracking-Events in `client/src/lib/tracking.ts`

---

## 4. **Instagram & TikTok Setup**

Siehe `SOCIAL_MEDIA_STRATEGY.md` für die vollständige Strategie.

### 4.1 Accounts erstellen
1. Erstelle Instagram Business Account: @aifunnelguide
2. Erstelle TikTok Business Account: @aifunnelguide
3. Verbinde beide mit deinem GetResponse-Account für Lead-Generierung

### 4.2 Content-Kalender
- Nutze die KI-Automation (siehe `KI_AUTOMATION_PLAN.md`)
- Poste 3-5x pro Woche auf Instagram, 5-7x pro Woche auf TikTok
- Verwende die Content-Pillars aus `SOCIAL_MEDIA_STRATEGY.md`

---

## 5. **KI-Automation einrichten**

Siehe `KI_AUTOMATION_PLAN.md` für die vollständige Anleitung.

### 5.1 Content-Generierung
- Nutze Claude, ChatGPT oder andere LLMs für:
  - Blog-Post-Ideen
  - Social-Media-Captions
  - E-Mail-Sequenzen
  - Video-Scripts

### 5.2 Scheduling-Tools
- **Buffer** oder **Later** für Instagram/TikTok-Scheduling
- **Zapier** oder **Make** für Workflow-Automatisierung
- **n8n** (self-hosted) für komplexe Automationen

---

## 6. **Website-Inhalte vervollständigen**

### 6.1 Fehlende Seiten erstellen
Die folgenden Seiten sind Platzhalter und müssen mit echtem Inhalt gefüllt werden:

- [ ] `/en/guides` – Detaillierte Anleitungen zu KI-Funnels
- [ ] `/de/guides` – Deutsche Anleitungen
- [ ] `/en/comparisons` – GetResponse vs. KlickTipp vs. andere Tools
- [ ] `/de/comparisons` – Deutsche Vergleiche
- [ ] `/en/tools` – Vollständige Tool-Liste mit Affiliate-Links
- [ ] `/de/tools` – Deutsche Tool-Liste
- [ ] `/en/privacy` – Datenschutzerklärung
- [ ] `/de/privacy` – Deutsche Datenschutzerklärung
- [ ] `/en/terms` – Nutzungsbedingungen
- [ ] `/de/terms` – Deutsche Nutzungsbedingungen
- [ ] `/en/affiliate-disclosure` – Affiliate-Offenlegung
- [ ] `/de/affiliate-disclosure` – Deutsche Affiliate-Offenlegung

### 6.2 Hero-Bilder hinzufügen
- Generiere oder lade professionelle Hero-Bilder hoch
- Nutze `manus-upload-file --webdev` zum Hochladen
- Ersetze die Platzhalter in:
  - `client/src/pages/Home.tsx`
  - `client/src/pages/GuidesPage.tsx`
  - `client/src/pages/ComparisonsPage.tsx`

---

## 7. **Deployment & Launch**

### 7.1 Vor dem Launch
- [ ] Alle Links testen (intern und extern)
- [ ] Zweisprachiges Routing prüfen
- [ ] Mobile-Responsiveness testen
- [ ] E-Mail-Formulare testen
- [ ] Analytics prüfen
- [ ] SEO-Meta-Tags überprüfen

### 7.2 Launch
1. Pushe alle Änderungen zu Git
2. Cloudflare Pages deployt automatisch
3. Überprüfe die Live-Website: `https://aifunnelguide.com`

### 7.3 Nach dem Launch
- Überwache Analytics täglich
- Teste Affiliate-Links wöchentlich
- Aktualisiere Inhalte regelmäßig
- Poste konsistent auf Social Media

---

## 8. **Laufender Betrieb & Optimierung**

### 8.1 Wöchentliche Aufgaben
- [ ] 3-5 Instagram-Posts (KI-generiert)
- [ ] 5-7 TikTok-Videos (KI-generiert)
- [ ] 1-2 Blog-Posts oder Guides
- [ ] E-Mail-Sequenz an GetResponse-Liste
- [ ] Analytics überprüfen

### 8.2 Monatliche Aufgaben
- [ ] Conversion-Rate analysieren
- [ ] Affiliate-Einnahmen überprüfen
- [ ] Top-Performer-Content identifizieren
- [ ] Underperformer-Content überarbeiten
- [ ] A/B-Tests durchführen

### 8.3 Quartalweise Aufgaben
- [ ] Gesamtstrategie überprüfen
- [ ] Neue Tools/Produkte evaluieren
- [ ] Affiliate-Partnerschaften erweitern
- [ ] Website-Design aktualisieren

---

## 9. **Wichtige Kontakte & Links**

| Service | Link | Notizen |
|---------|------|---------|
| Cloudflare | https://dash.cloudflare.com | Domain & Hosting |
| GetResponse | https://www.getresponse.com | Email Marketing |
| GetResponse Affiliates | https://www.getresponse.com/affiliates | Affiliate-Links |
| Buffer | https://buffer.com | Social Media Scheduling |
| Zapier | https://zapier.com | Workflow Automation |
| Umami Analytics | https://umami.is | Analytics |

---

## 10. **Häufig gestellte Fragen**

### F: Wie lange dauert es, bis die Website live ist?
A: Mit Cloudflare Pages ca. 5-10 Minuten nach dem Git-Push. DNS-Propagation kann 24-48 Stunden dauern.

### F: Wie verdiene ich Geld?
A: Durch GetResponse-Affiliate-Links. Jeder Signup über deine Links generiert eine Provision.

### F: Wie viele Leads brauche ich, um profitabel zu sein?
A: Mit GetResponse (durchschnittliche Provision ~$50-100 pro Signup) brauchst du ca. 10-20 Leads pro Monat, um die Hosting-Kosten zu decken.

### F: Kann ich mehrere Affiliate-Programme gleichzeitig nutzen?
A: Ja! Nutze GetResponse als Anchor-Produkt, erweitere aber später um KlickTipp, Digistore24, etc.

---

## 11. **Checkliste vor dem Launch**

- [ ] Domain registriert und Cloudflare konfiguriert
- [ ] GetResponse Account erstellt und Affiliate-Links generiert
- [ ] Alle Seiten mit echtem Inhalt gefüllt
- [ ] Hero-Bilder hochgeladen und integriert
- [ ] E-Mail-Formulare getestet
- [ ] Analytics konfiguriert
- [ ] Instagram & TikTok Accounts erstellt
- [ ] KI-Automation eingerichtet
- [ ] Alle Links getestet
- [ ] Mobile-Responsiveness überprüft
- [ ] SEO-Meta-Tags überprüft
- [ ] Rechtliche Seiten (Privacy, Terms, Affiliate Disclosure) erstellt

---

## 12. **Support & Troubleshooting**

Wenn du Probleme hast:

1. **Cloudflare Pages funktioniert nicht**: Überprüfe die Build-Logs in Cloudflare Dashboard
2. **GetResponse-Formulare funktionieren nicht**: Überprüfe die API-Keys und CORS-Einstellungen
3. **Sprachweiterleitung funktioniert nicht**: Überprüfe die Browser-Sprache und localStorage
4. **Analytics zeigt keine Daten**: Überprüfe die Umami-Website-ID in den Umgebungsvariablen

---

**Viel Erfolg beim Launch! 🚀**

Wenn du Fragen hast, beziehe dich auf die Dokumentation in:
- `README.md` – Projektübersicht
- `SETUP_GUIDE.md` – Technisches Setup
- `SOCIAL_MEDIA_STRATEGY.md` – Social Media Strategie
- `KI_AUTOMATION_PLAN.md` – KI-Automation

