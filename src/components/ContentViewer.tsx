"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArticleContent } from "@/types";

interface ContentViewerProps {
  article: ArticleContent;
}

export default function ContentViewer({ article }: ContentViewerProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-3xl mb-2">{article.title}</CardTitle>
            <CardDescription className="flex flex-wrap gap-2 items-center">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                {article.url}
                <ExternalLink className="h-3 w-3" />
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
          <p className="text-muted-foreground italic mb-4">{article.excerpt}</p>
        )}
        <div className="prose prose-sm max-w-none max-h-96 overflow-y-auto">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
}
