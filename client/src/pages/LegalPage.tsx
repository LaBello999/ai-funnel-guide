import { useLocation } from "wouter";

export default function LegalPage() {
  const [location] = useLocation();
  
  const isImprint = location === "/imprint" || location === "/impressum";
  const isPrivacy = location === "/privacy" || location === "/datenschutz";
  const isTerms = location === "/terms" || location === "/agb";

  const content = {
    en: {
      imprint: {
        title: "Imprint",
        operator: "Operator",
        address: "Address",
        email: "Email",
        phone: "Phone",
        responsible: "Responsible for content",
        disclaimer: "Disclaimer",
        disclaimerText: "The contents of our website have been created with the greatest care. However, we cannot guarantee the accuracy, completeness and topicality of the contents. As a service provider, we are responsible for our own content on these pages in accordance with general laws.",
        liability: "Limitation of Liability",
        liabilityText: "Our liability for slight negligence is excluded, insofar as this is permitted by law. All offers are subject to change and non-binding.",
        links: "External Links",
        linksText: "We are not responsible for the contents of external links. The operators of the linked pages are solely responsible for their content.",
        copyright: "Copyright",
        copyrightText: "The layout, graphics, images and other contents of this website are protected by copyright. Any reproduction, distribution or transmission is prohibited without prior written permission.",
      },
      privacy: {
        title: "Privacy Policy",
        intro: "We take the protection of your personal data very seriously. This privacy policy explains how we collect, use and protect your data.",
        responsible: "Responsible Party",
        responsibleText: "Responsible for data processing: AI Funnel Guide",
        dataCollection: "Data Collection",
        dataCollectionText: "We collect the following data: IP address, browser type, operating system, pages visited, time spent on pages, and cookies (only with your consent).",
        legalBasis: "Legal Basis",
        legalBasisText: "Processing is based on: Article 6(1)(a) GDPR (consent) and Article 6(1)(f) GDPR (legitimate interests).",
        cookies: "Cookies",
        cookiesText: "We use cookies only with your consent. You can disable cookies in your browser settings at any time.",
        rights: "Your Rights",
        rightsText: "You have the right to: access your data, correct inaccurate data, delete your data, restrict processing, and data portability.",
        contact: "Contact",
        contactText: "For data protection inquiries, please contact us at: mehrwertsales@gmail.com",
      },
      terms: {
        title: "Terms of Service",
        intro: "These terms of service govern your use of our website and services.",
        use: "Use of Website",
        useText: "You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website.",
        intellectual: "Intellectual Property",
        intellectualText: "All content on this website, including text, graphics, logos, images, and software, is the property of AI Funnel Guide or its content suppliers and is protected by copyright laws.",
        liability: "Limitation of Liability",
        liabilityText: "AI Funnel Guide shall not be liable for any damages arising from the use of this website or its content, including but not limited to direct, indirect, incidental, or consequential damages.",
        disclaimer: "Disclaimer",
        disclaimerText: "The information provided on this website is for educational purposes only. We do not guarantee the accuracy or completeness of any information.",
        changes: "Changes to Terms",
        changesText: "We reserve the right to modify these terms at any time. Your continued use of the website constitutes your acceptance of any changes.",
      },
    },
    de: {
      imprint: {
        title: "Impressum",
        operator: "Betreiber",
        address: "Adresse",
        email: "E-Mail",
        phone: "Telefon",
        responsible: "Verantwortlich für Inhalte",
        disclaimer: "Haftungsausschluss",
        disclaimerText: "Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Wir können jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen.",
        liability: "Haftungsbeschränkung",
        liabilityText: "Unsere Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit dies gesetzlich zulässig ist. Alle Angebote sind freibleibend und unverbindlich.",
        links: "Externe Links",
        linksText: "Wir sind nicht verantwortlich für die Inhalte externer Links. Die Betreiber der verlinkten Seiten sind allein für deren Inhalte verantwortlich.",
        copyright: "Urheberrecht",
        copyrightText: "Das Layout, die Grafiken, Bilder und weitere Inhalte dieser Website sind urheberrechtlich geschützt. Jede Vervielfältigung, Verbreitung oder Übertragung ist ohne vorherige schriftliche Genehmigung untersagt.",
      },
      privacy: {
        title: "Datenschutzerklärung",
        intro: "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung erläutert, wie wir Ihre Daten erfassen, verwenden und schützen.",
        responsible: "Verantwortliche Stelle",
        responsibleText: "Verantwortlich für die Datenverarbeitung: AI Funnel Guide",
        dataCollection: "Datenerfassung",
        dataCollectionText: "Wir erfassen folgende Daten: IP-Adresse, Browsertyp, Betriebssystem, besuchte Seiten, Verweilzeiten und Cookies (nur mit Ihrer Zustimmung).",
        legalBasis: "Rechtsgrundlage",
        legalBasisText: "Die Verarbeitung erfolgt auf Basis von: Artikel 6 Abs. 1 lit. a DSGVO (Zustimmung) und Artikel 6 Abs. 1 lit. f DSGVO (berechtigte Interessen).",
        cookies: "Cookies",
        cookiesText: "Wir verwenden Cookies nur mit Ihrer Zustimmung. Sie können Cookies jederzeit in Ihren Browsereinstellungen deaktivieren.",
        rights: "Ihre Rechte",
        rightsText: "Sie haben das Recht auf: Auskunft über Ihre Daten, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenportabilität.",
        contact: "Kontakt",
        contactText: "Für Anfragen zum Datenschutz kontaktieren Sie uns unter: mehrwertsales@gmail.com",
      },
      terms: {
        title: "Nutzungsbedingungen",
        intro: "Diese Nutzungsbedingungen regeln die Nutzung unserer Website und Dienstleistungen.",
        use: "Nutzung der Website",
        useText: "Sie erklären sich einverstanden, diese Website nur für rechtmäßige Zwecke zu nutzen und nicht in einer Weise, die die Rechte anderer verletzt.",
        intellectual: "Geistiges Eigentum",
        intellectualText: "Alle Inhalte dieser Website, einschließlich Text, Grafiken, Logos, Bilder und Software, sind Eigentum von AI Funnel Guide und urheberrechtlich geschützt.",
        liability: "Haftungsbeschränkung",
        liabilityText: "AI Funnel Guide haftet nicht für Schäden, die sich aus der Nutzung dieser Website ergeben, einschließlich direkter, indirekter oder Folgeschäden.",
        disclaimer: "Haftungsausschluss",
        disclaimerText: "Die auf dieser Website bereitgestellten Informationen dienen nur zu Bildungszwecken. Wir garantieren nicht die Richtigkeit oder Vollständigkeit der Informationen.",
        changes: "Änderungen der Bedingungen",
        changesText: "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Ihre weitere Nutzung der Website bedeutet Ihre Zustimmung zu Änderungen.",
      },
    },
  };

  const t = content[location.includes("/de") || location.includes("/impressum") || location.includes("/datenschutz") || location.includes("/agb") ? "de" : "en"] as any;
  const section = isImprint ? t.imprint : isPrivacy ? t.privacy : t.terms;

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-foreground">{section.title}</h1>

        {isImprint && (
          <>
            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">
                {section.operator}
              </h2>
              <div className="text-card-foreground space-y-2">
                <p><strong>Peer Kramer</strong></p>
                <p>c/o Postflex #8731</p>
                <p>Emsdettener Str. 10</p>
                <p>48268 Greven</p>
                <p>Deutschland</p>
                <p className="mt-4"><strong>{section.phone}:</strong> <a href="tel:+4915223292905" className="text-blue-600 hover:underline">+49 152 23292905</a></p>
                <p><strong>{section.email}:</strong> <a href="mailto:mehrwertsales@gmail.com" className="text-blue-600 hover:underline">mehrwertsales@gmail.com</a></p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.disclaimer}
              </h2>
              <p className="text-card-foreground">{section.disclaimerText}</p>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.liability}
              </h2>
              <p className="text-card-foreground">{section.liabilityText}</p>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.links}
              </h2>
              <p className="text-card-foreground">{section.linksText}</p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.copyright}
              </h2>
              <p className="text-card-foreground">{section.copyrightText}</p>
            </div>
          </>
        )}

        {isPrivacy && (
          <>
            <p className="text-lg text-foreground mb-6">{section.intro}</p>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.responsible}
              </h2>
              <p className="text-card-foreground">{section.responsibleText}</p>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.dataCollection}
              </h2>
              <p className="text-card-foreground">{section.dataCollectionText}</p>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.legalBasis}
              </h2>
              <p className="text-card-foreground">{section.legalBasisText}</p>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.cookies}
              </h2>
              <p className="text-card-foreground">{section.cookiesText}</p>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.rights}
              </h2>
              <p className="text-card-foreground">{section.rightsText}</p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.contact}
              </h2>
              <p className="text-card-foreground">{section.contactText}</p>
            </div>
          </>
        )}

        {isTerms && (
          <>
            <p className="text-lg text-foreground mb-6">{section.intro}</p>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.use}
              </h2>
              <p className="text-card-foreground">{section.useText}</p>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.intellectual}
              </h2>
              <p className="text-card-foreground">{section.intellectualText}</p>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.liability}
              </h2>
              <p className="text-card-foreground">{section.liabilityText}</p>
            </div>

            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.disclaimer}
              </h2>
              <p className="text-card-foreground">{section.disclaimerText}</p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {section.changes}
              </h2>
              <p className="text-card-foreground">{section.changesText}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
