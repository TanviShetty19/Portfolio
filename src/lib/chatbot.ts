import {
  personal,
  about,
  skillCategories,
  projects,
  experience,
  education,
  certifications,
} from "@/lib/data";

type Rule = { keywords: string[]; answer: () => string };

const rules: Rule[] = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    answer: () =>
      `Hey! I'm Tanvi's portfolio assistant. Ask me about her skills, projects, experience, education, or how to get in touch.`,
  },
  {
    keywords: ["who", "about", "yourself", "summary", "intro"],
    answer: () => `${about.summary}`,
  },
  {
    keywords: ["objective", "goal", "career"],
    answer: () => about.objective,
  },
  {
    keywords: ["skill", "tech", "stack", "language", "tool", "framework"],
    answer: () =>
      `Tanvi works across:\n${skillCategories
        .map((c) => `• ${c.category}: ${c.skills.map((s) => s.name).join(", ")}`)
        .join("\n")}`,
  },
  {
    keywords: ["project", "build", "built", "work", "emobhaava", "healthmate", "alzheimer", "baja"],
    answer: () =>
      `Featured projects:\n${projects
        .map((p) => `• ${p.title} (${p.category}) — ${p.description}`)
        .join("\n")}`,
  },
  {
    keywords: ["ai", "ml", "machine learning", "deep learning", "nlp", "vision"],
    answer: () =>
      `On the AI/ML side, Tanvi has built EmoBhaava (Kannada sentiment & sarcasm detection), HealthMate (multimodal health assistant with Whisper + LLMs), and an Alzheimer's MRI classification study. Tools: TensorFlow, PyTorch, Scikit-Learn, NLP, Computer Vision.`,
  },
  {
    keywords: ["salesforce", "apex", "lwc", "crm", "flow"],
    answer: () =>
      `Tanvi interned at Salesforce building CRM automation with Flow, Lightning App Builder UIs, and analytics dashboards. She also built a CRM solution for WhatNext Vision Motors using Apex, LWC, Flow Builder, and SOQL.`,
  },
  {
    keywords: ["experience", "intern", "internship", "job", "geojit"],
    answer: () =>
      `Experience:\n${experience
        .map((e) => `• ${e.title} @ ${e.org} (${e.period})`)
        .join("\n")}`,
  },
  {
    keywords: ["education", "study", "college", "degree", "school", "cgpa"],
    answer: () =>
      `Education:\n${education
        .map((e) => `• ${e.degree} — ${e.institution} (${e.duration})`)
        .join("\n")}`,
  },
  {
    keywords: ["cert", "certificate", "oracle", "credential"],
    answer: () =>
      `Certifications:\n${certifications
        .map((c) => `• ${c.title} (${c.issuer})`)
        .join("\n")}`,
  },
  {
    keywords: ["contact", "email", "reach", "hire", "phone", "linkedin", "github"],
    answer: () =>
      `You can reach Tanvi at ${personal.email} or ${personal.phone}.\nLinkedIn: ${personal.socials.linkedin}\nGitHub: ${personal.socials.github}`,
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: () =>
      `You can download Tanvi's resume using the "Download Resume" button in the hero section at the top of the page.`,
  },
  {
    keywords: ["location", "where", "based", "city"],
    answer: () => `Tanvi is based in ${personal.location}.`,
  },
];

const fallback = `I can tell you about Tanvi's skills, projects, experience, education, certifications, or contact details. Try asking "What projects has she built?" or "What are her AI/ML skills?"`;

export function getBotReply(input: string): string {
  const q = input.toLowerCase();
  let best: { rule: Rule; score: number } | null = null;
  for (const rule of rules) {
    const score = rule.keywords.reduce(
      (acc, k) => (q.includes(k) ? acc + 1 : acc),
      0
    );
    if (score > 0 && (!best || score > best.score)) best = { rule, score };
  }
  return best ? best.rule.answer() : fallback;
}

export const suggestedQuestions = [
  "What are her top skills?",
  "Tell me about her projects",
  "What's her experience?",
  "How can I contact her?",
];
