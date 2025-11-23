"use client";

import React from "react";
import { AnalysisResult } from "@/types";
import ContentViewer from "./ContentViewer";
import SeoAnalysis from "./SeoAnalysis";
import FactualAccuracy from "./FactualAccuracy";

interface AnalysisResultsProps {
  result: AnalysisResult;
}

export default function AnalysisResults({ result }: AnalysisResultsProps) {
  const { article, seo, factual } = result;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Article Content */}
      <ContentViewer article={article} />

      {/* Scores Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* SEO Score */}
        <SeoAnalysis seo={seo} />

        {/* Factual Accuracy Score */}
        <FactualAccuracy factual={factual} />
      </div>
    </div>
  );
}
