"use client";

import { useState } from "react";
import { FileSearch, AlertCircle } from "lucide-react";
import ArticleForm from "@/components/ArticleForm";
import AnalysisResults from "@/components/AnalysisResults";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { analyzeArticle } from "@/lib/api";
import { AnalysisResult } from "@/types";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (url: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const analysisResult = await analyzeArticle(url);
      setResult(analysisResult);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileSearch className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold tracking-tight">
              AI Content Analyzer
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant SEO analysis and factual accuracy checks for any article
            URL. Powered by AI.
          </p>
        </div>

        {/* Form */}
        <div className="mb-12">
          <ArticleForm onSubmit={handleAnalyze} isLoading={isLoading} />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">
              Analyzing article... This may take a minute.
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <Alert variant="destructive" className="max-w-3xl mx-auto mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Results */}
        {result && !isLoading && <AnalysisResults result={result} />}

        {/* Example URLs */}
        {!result && !isLoading && (
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Example URLs to Try:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  https://www.wikipedia.org/wiki/Artificial_intelligence
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>https://techcrunch.com/latest/ (pick any article)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>https://www.bbc.com/news (pick any article)</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            Built with Next.js, TypeScript, and AI • © 2025 AI Content Analyzer
          </p>
        </div>
      </footer>
    </main>
  );
}
