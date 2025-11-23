import axios from "axios";
import { AnalysisResult } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export const analyzeArticle = async (url: string): Promise<AnalysisResult> => {
  try {
    const response = await axios.post<AnalysisResult>(`${API_URL}/analyze`, {
      url,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to analyze article"
      );
    }
    throw new Error("Network error: Failed to connect to the server");
  }
};
