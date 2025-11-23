"use client";

import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { SEOAnalysis } from "@/types";

interface SeoAnalysisProps {
  seo: SEOAnalysis;
}

export default function SeoAnalysis({ seo }: SeoAnalysisProps) {
  const getScoreVariant = (
    score: number
  ): "success" | "warning" | "destructive" => {
    if (score >= 90) return "success";
    if (score >= 70) return "warning";
    return "destructive";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>SEO Analysis</span>
          <Badge
            variant={getScoreVariant(seo.score)}
            className="text-lg px-4 py-1"
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
      <CardContent className="max-h-96 overflow-y-auto">
        {seo.suggestions.length > 0 ? (
          <div className="space-y-4">
            {seo.suggestions.map((suggestion, index) => (
              <div key={index} className="border-l-4 border-primary pl-4 py-2">
                <div className="flex items-start gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{suggestion.issue}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {suggestion.suggestion}
                </p>
                {suggestion.sources.length > 0 && (
                  <div className="text-xs space-y-1">
                    <p className="font-semibold">Sources:</p>
                    {suggestion.sources.map((source, idx) => (
                      <a
                        key={idx}
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline block truncate"
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
            <CheckCircle2 className="h-5 w-5" />
            <p className="text-sm">This article is well-optimized for SEO!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
