"use client";

import React from "react";
import { CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { AnalysisResult } from "@/types";

interface AnalysisResultsProps {
  result: AnalysisResult;
}

export default function AnalysisResults({ result }: AnalysisResultsProps) {
  const { article, seo, factual } = result;

  const getScoreColor = (score: number) => {
    if (score >= 90) return "success";
    if (score >= 70) return "warning";
    return "destructive";
  };

  const getScoreVariant = (
    score: number
  ): "success" | "warning" | "destructive" => {
    if (score >= 90) return "success";
    if (score >= 70) return "warning";
    return "destructive";
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Article Content */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="mb-2 text-3xl">{article.title}</CardTitle>
              <CardDescription className="flex flex-wrap items-center gap-2">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  {article.url}
                  <ExternalLink className="w-3 h-3" />
                </a>
                {article.author && <span>• By {article.author}</span>}
                {article.publishedDate && (
                  <span>
                    • {new Date(article.publishedDate).toLocaleDateString()}
                  </span>
                )}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {article.excerpt && (
            <p className="mb-4 italic text-muted-foreground">
              {article.excerpt}
            </p>
          )}
          <div className="prose-sm prose max-w-none">
            <pre className="p-4 overflow-y-auto bg-gray-100 rounded-md max-h-96">
              <code>{article.content}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Scores Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* SEO Score */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>SEO Analysis</span>
              <Badge
                variant={getScoreVariant(seo.score)}
                className="px-4 py-1 text-lg"
              >
                {seo.score}/100
              </Badge>
            </CardTitle>
            <CardDescription>
              {seo.suggestions.length === 0
                ? "Excellent! No SEO improvements needed."
                : `${seo.suggestions.length} improvement${
                    seo.suggestions.length > 1 ? "s" : ""
                  } suggested`}
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-y-auto max-h-96">
            {seo.suggestions.length > 0 ? (
              <div className="space-y-4">
                {seo.suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="py-2 pl-4 border-l-4 border-primary"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">
                          {suggestion.issue}
                        </p>
                      </div>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {suggestion.suggestion}
                    </p>
                    {suggestion.sources.length > 0 && (
                      <div className="space-y-1 text-xs">
                        <p className="font-semibold">Sources:</p>
                        {suggestion.sources.map((source, idx) => (
                          <a
                            key={idx}
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block truncate text-primary hover:underline"
                          >
                            {source}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <p className="text-sm">
                  This article is well-optimized for SEO!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Factual Accuracy Score */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Factual Accuracy</span>
              <Badge
                variant={getScoreVariant(factual.score)}
                className="px-4 py-1 text-lg"
              >
                {factual.score}/100
              </Badge>
            </CardTitle>
            <CardDescription>
              {factual.suggestions.length === 0
                ? "Great! All information appears accurate and current."
                : `${factual.suggestions.length} issue${
                    factual.suggestions.length > 1 ? "s" : ""
                  } found`}
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-y-auto max-h-96">
            {factual.suggestions.length > 0 ? (
              <div className="space-y-4">
                {factual.suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="py-2 pl-4 border-l-4 border-destructive"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">
                          Claim: {suggestion.claim}
                        </p>
                      </div>
                    </div>
                    <p className="mb-1 text-sm text-muted-foreground">
                      <span className="font-semibold">Issue:</span>{" "}
                      {suggestion.issue}
                    </p>
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Correction:</span>{" "}
                      {suggestion.correction}
                    </p>
                    {suggestion.sources.length > 0 && (
                      <div className="space-y-1 text-xs">
                        <p className="font-semibold">Sources:</p>
                        {suggestion.sources.map((source, idx) => (
                          <a
                            key={idx}
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block truncate text-primary hover:underline"
                          >
                            {source}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <p className="text-sm">
                  All factual claims are accurate and up-to-date!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
