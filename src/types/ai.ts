export type AiAlertLevel = "高" | "中" | "低";

export type AiAlert = {
  id: string;
  level: AiAlertLevel;
  type: string;
  relatedObject: string;
  dateShift?: string;
  problem: string;
  reason: string;
  suggestion: string;
  targetRoute?: string;
  resolved?: boolean;
};

export type AiAnswer = {
  id: string;
  question: string;
  conclusion: string;
  basis: string;
  relatedData: string[];
  suggestion: string;
  createdAt: string;
};
