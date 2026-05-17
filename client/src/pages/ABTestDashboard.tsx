import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getABTestResults, clearABTestData, AB_TEST_VARIANTS } from '@/hooks/useABTest';
import { useLanguage } from '@/contexts/LanguageContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Download, Trash2 } from 'lucide-react';

interface TestResult {
  variant: string;
  total_interactions: number;
  quiz_clicks: number;
  tool_clicks: number;
  affiliate_clicks: number;
  quiz_rate: string | number;
  tool_rate: string | number;
  affiliate_rate: string | number;
}

export default function ABTestDashboard() {
  const { language } = useLanguage();
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const loadResults = () => {
      const data = getABTestResults();
      setResults(data);
    };

    loadResults();

    if (autoRefresh) {
      const interval = setInterval(loadResults, 5000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const handleExport = () => {
    if (!results) return;

    const csv = [
      ['Variant', 'Total Interactions', 'Quiz Clicks', 'Tool Clicks', 'Affiliate Clicks', 'Quiz Rate %', 'Tool Rate %', 'Affiliate Rate %'],
      ...results.map(r => [
        r.variant,
        r.total_interactions,
        r.quiz_clicks,
        r.tool_clicks,
        r.affiliate_clicks,
        r.quiz_rate,
        r.tool_rate,
        r.affiliate_rate,
      ]),
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ab-test-results-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleClear = () => {
    if (window.confirm('Are you sure? This will clear all test data.')) {
      clearABTestData();
      setResults(null);
    }
  };

  if (!results || results.length === 0) {
    return (
      <div className="min-h-screen py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">A/B Test Dashboard</h1>
            <p className="text-muted-foreground mb-8">
              No test data yet. Visit the homepage to start collecting conversion data.
            </p>
            <Button onClick={() => window.location.href = '/'}>
              Go to Homepage
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Find winner
  const winner = results.reduce((prev, current) => 
    (parseInt(current.affiliate_rate as string) > parseInt(prev.affiliate_rate as string)) ? current : prev
  );

  // Prepare chart data
  const chartData = results.map(r => ({
    variant: r.variant,
    'Quiz Clicks': r.quiz_clicks,
    'Tool Clicks': r.tool_clicks,
    'Affiliate Clicks': r.affiliate_clicks,
  }));

  const conversionRateData = results.map(r => ({
    variant: r.variant,
    'Quiz Rate': parseFloat(r.quiz_rate as string),
    'Tool Rate': parseFloat(r.tool_rate as string),
    'Affiliate Rate': parseFloat(r.affiliate_rate as string),
  }));

  return (
    <div className="min-h-screen py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">A/B Test Dashboard</h1>
          <p className="text-muted-foreground mb-6">
            Real-time conversion tracking for all variants. Auto-refreshing every 5 seconds.
          </p>
          <div className="flex gap-4">
            <Button onClick={handleExport} className="gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
            <Button 
              variant="outline"
              onClick={() => setAutoRefresh(!autoRefresh)}
            >
              {autoRefresh ? 'Pause' : 'Resume'} Auto-Refresh
            </Button>
            <Button 
              variant="destructive"
              onClick={handleClear}
              className="gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear Data
            </Button>
          </div>
        </div>

        {/* Winner Badge */}
        {winner && (
          <Card className="p-6 mb-12 bg-green-50 border-green-200">
            <h3 className="font-bold text-lg mb-2">🏆 Current Winner: Variant {winner.variant}</h3>
            <p className="text-muted-foreground mb-4">
              {AB_TEST_VARIANTS[winner.variant].hero_subtitle}
            </p>
            <p className="font-semibold">
              Affiliate Click Rate: <span className="text-green-600">{winner.affiliate_rate}%</span>
            </p>
          </Card>
        )}

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {results.map(r => (
            <Card key={r.variant} className="p-6">
              <h3 className="text-2xl font-bold mb-4">Variant {r.variant}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Total Interactions</p>
                  <p className="text-2xl font-bold">{r.total_interactions}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quiz Clicks</p>
                  <p className="text-lg font-semibold">{r.quiz_clicks}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tool Clicks</p>
                  <p className="text-lg font-semibold">{r.tool_clicks}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Affiliate Clicks</p>
                  <p className="text-lg font-bold text-primary">{r.affiliate_clicks}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Interaction Volume Chart */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Interaction Volume</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="variant" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Quiz Clicks" fill="#3b82f6" />
                <Bar dataKey="Tool Clicks" fill="#8b5cf6" />
                <Bar dataKey="Affiliate Clicks" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Conversion Rate Chart */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Conversion Rates (%)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversionRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="variant" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Quiz Rate" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="Tool Rate" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="Affiliate Rate" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Variant Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Variant Copy</h2>
          {results.map(r => (
            <Card key={r.variant} className="p-6">
              <h3 className="text-xl font-bold mb-4">Variant {r.variant}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-muted-foreground">Hero Subtitle</p>
                  <p className="text-foreground">{AB_TEST_VARIANTS[r.variant].hero_subtitle}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Hero CTA</p>
                  <p className="text-foreground">{AB_TEST_VARIANTS[r.variant].hero_cta}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Problem Title</p>
                  <p className="text-foreground">{AB_TEST_VARIANTS[r.variant].problem_title}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Solution CTA</p>
                  <p className="text-foreground">{AB_TEST_VARIANTS[r.variant].solution_cta}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
