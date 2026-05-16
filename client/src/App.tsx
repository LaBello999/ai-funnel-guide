import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import GuidesPage from "./pages/GuidesPage";
import ComparisonsPage from "./pages/ComparisonsPage";
import ToolsPage from "./pages/ToolsPage";
import { useEffect } from "react";

/**
 * App Router
 * 
 * Supports localized routes:
 * - /en/* (English)
 * - /de/* (German)
 * - / (redirects to /en/ by default)
 */

function Router() {
  const [location, setLocation] = useLocation();

  // Redirect root to /en/ (default language)
  useEffect(() => {
    if (location === "/") {
      setLocation("/en/");
    }
  }, [location, setLocation]);

  return (
    <Switch>
      {/* English routes */}
      <Route path="/en/*" component={LocalizedRoutes} />
      
      {/* German routes */}
      <Route path="/de/*" component={LocalizedRoutes} />
      
      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function LocalizedRoutes() {
  const [location] = useLocation();
  
  return (
    <Switch>
      <Route path="/en/" component={Home} />
      <Route path="/de/" component={Home} />
      <Route path="/en/guides" component={GuidesPage} />
      <Route path="/de/guides" component={GuidesPage} />
      <Route path="/en/comparisons" component={ComparisonsPage} />
      <Route path="/de/comparisons" component={ComparisonsPage} />
      <Route path="/en/tools" component={ToolsPage} />
      <Route path="/de/tools" component={ToolsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <AppContent />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
