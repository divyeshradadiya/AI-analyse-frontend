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
import { FactualAnalysis } from "@/types";

interface FactualAccuracyProps {
  factual: FactualAnalysis;
}

export default function FactualAccuracy({ factual }: FactualAccuracyProps) {
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
      <CardContent className="max-h-[400px] overflow-y-auto">
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
  );
}
