import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Database,
  Cloud,
  Cpu,
  LineChart,
  Boxes,
  Globe,
  GraduationCap,
  Briefcase,
  Trophy,
  Award,
  Server,
} from "lucide-react";

// ─────────────────────────────────────────────
//  PERSONAL
// ─────────────────────────────────────────────
export const personal = {
  name: "Tanvi Shetty",
  firstName: "Tanvi",
  avatar: "https://avatar.iran.liara.run/public/girl",
  title: "AI/ML Engineer & Data Scientist | Building intelligent systems with ML, GenAI & LLMs",
  roles: [
    "AI/ML Engineer",
    "Data Scientist",
    "NLP Engineer",
    "GenAI & LLM Builder",
    "Full Stack Developer",
    "Problem Solver",
  ],
  intro:
    "Computer Science Engineer specializing in Data Science from St. Joseph Engineering College, " +
    "Mangaluru (CGPA 9.79). I build intelligent software solutions using machine learning, " +
    "artificial intelligence, and software engineering — from OCR-powered document intelligence to " +
    "multilingual NLP systems. I'm actively expanding my expertise in Generative AI, large language " +
    "models (LLMs), Retrieval-Augmented Generation (RAG), and AI agent frameworks.",
  location: "Udupi, Karnataka, India",
  email: "shettytanvi19@gmail.com",
  phone: "",            // ← add your phone
  website: "https://tanvi19.netlify.app",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/TanviShetty19",
    linkedin: "https://www.linkedin.com/in/tanvi-shetty19",
    email: "mailto:shettytanvi19@gmail.com",
  },
};

// ─────────────────────────────────────────────
//  ABOUT
// ─────────────────────────────────────────────
export const about = {
  summary:
    "Computer Science Engineer specializing in Data Science with experience developing intelligent " +
    "software solutions using machine learning, artificial intelligence, and software engineering " +
    "principles. Strong foundation in problem solving, data analysis, automation, and application " +
    "development, with the ability to translate data-driven insights into practical solutions. " +
    "She has interned at Geojit Technologies and Salesforce (SkillWallet), gaining hands-on " +
    "experience across the software development lifecycle, OCR/document AI, and CRM automation.",
  objective:
    "AI/ML Engineer and Data Scientist actively expanding expertise in Generative AI, large " +
    "language models (LLMs), Retrieval-Augmented Generation (RAG), and AI agent frameworks. She is " +
    "seeking a role to engineer scalable, production-ready AI solutions and grow into a senior " +
    "ML engineering or data science position.",
  interests: [
    "Generative AI, LLMs & RAG",
    "AI Agent Frameworks",
    "Document Intelligence & OCR",
    "Kannada & Indic NLP",
    "Computer Vision",
    "Machine Learning & Deep Learning",
    "Full-Stack & Backend Development",
    "Data Analysis & Automation",
  ],
};

// ─────────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────────
export type Skill = { name: string; level: number };
export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  accent: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: Code2,
    accent: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "Python",              level: 90 },
      { name: "SQL",                 level: 72 }, // actively upskilling
      { name: "Java",                level: 70 },
      { name: "C",                   level: 68 },
      { name: "HTML / CSS / JavaScript", level: 65 },
    ],
  },
  {
    category: "AI / ML Engineering",
    icon: Brain,
    accent: "from-neon-purple to-neon-pink",
    skills: [
      { name: "TensorFlow / Keras",          level: 82 },
      { name: "Scikit-learn",                level: 84 },
      { name: "PyTorch",                     level: 70 }, // upskilling
      { name: "HuggingFace Transformers",    level: 78 },
      { name: "LangChain & RAG",             level: 55 }, // actively building
      { name: "LLM Fine-tuning (LoRA/PEFT)", level: 45 }, // in progress
      { name: "OpenCV",                      level: 80 },
      { name: "XGBoost / Ensemble Methods",  level: 76 },
    ],
  },
  {
    category: "NLP & Computer Vision",
    icon: Cpu,
    accent: "from-neon-purple to-neon-blue",
    skills: [
      { name: "Transformers (BERT / DistilBERT)", level: 78 },
      { name: "OCR (DocTR / TrOCR / EasyOCR)",    level: 86 },
      { name: "Document Layout Analysis",          level: 80 },
      { name: "Kannada / Indic NLP",               level: 76 },
      { name: "Sentiment & Sarcasm Detection",     level: 78 },
      { name: "MRI / Medical Image Analysis",      level: 74 },
    ],
  },
  {
    category: "Data Science & Analytics",
    icon: LineChart,
    accent: "from-neon-cyan to-neon-blue",
    skills: [
      { name: "Pandas & NumPy",        level: 88 },
      { name: "Matplotlib / Seaborn",  level: 84 },
      { name: "Plotly",                level: 78 },
      { name: "Streamlit",             level: 80 },
      { name: "EDA & Feature Eng.",    level: 82 },
      { name: "Tableau / Power BI",    level: 45 }, // upskilling
      { name: "Statistics & A/B Tests",level: 48 }, // upskilling
    ],
  },
  {
    category: "MLOps & Deployment",
    icon: Server,
    accent: "from-neon-cyan to-neon-purple",
    skills: [
      { name: "FastAPI",                  level: 82 },
      { name: "Docker",                   level: 62 }, // upskilling
      { name: "MLflow / W&B",             level: 40 }, // upskilling
      { name: "Git & GitHub",             level: 85 },
      { name: "CI/CD (GitHub Actions)",   level: 42 }, // upskilling
      { name: "HuggingFace Spaces",       level: 60 },
      { name: "Streamlit Cloud / Render", level: 58 },
    ],
  },
  {
    category: "Development & Tools",
    icon: Globe,
    accent: "from-neon-blue to-neon-violet",
    skills: [
      { name: "Tailwind CSS",         level: 70 },
      { name: "Google Colab",         level: 90 },
      { name: "VS Code",              level: 88 },
      { name: "Postman",              level: 75 },
      { name: "Microsoft Excel",      level: 80 },
      { name: "Salesforce CRM",       level: 65 },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    accent: "from-neon-pink to-neon-purple",
    skills: [
      { name: "PostgreSQL",    level: 62 }, // upskilling
      { name: "MySQL",         level: 65 },
      { name: "MongoDB",       level: 48 }, // in progress
      { name: "ChromaDB / Vector DBs", level: 52 }, // building with RAG
      { name: "Redis",         level: 40 }, // rate limiter project
    ],
  },
];

// ─────────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────────
export type ProjectCategory =
  | "AI/ML"
  | "NLP"
  | "Computer Vision"
  | "Data Science"
  | "Full-Stack"
  | "MLOps"
  | "Software Engineering";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  achievements: string[];
  tech: string[];
  github?: string;
  demo?: string;
  gradient: string;
  emoji: string;
  emojiImage?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "document-intelligence-studio-v2",
    title: "Document Intelligence Studio V2",
    category: "AI/ML",
    description:
      "Template-driven document intelligence platform that extracts and structures " +
      "information from scanned forms and multi-page documents using OCR and computer " +
      "vision. Supports image and PDF inputs, aligns filled documents to a stored " +
      "template, performs field-specific OCR, validates values, and exports results as JSON.",
    achievements: [
      "Template-driven pipeline for extracting and structuring information from scanned forms and multi-page documents",
      "Document alignment with field-specific OCR, including handwritten and multi-line content",
      "Validation and batch-processing workflows to automate information extraction at scale",
      "Image and PDF inputs with structured JSON export",
    ],
    tech: [
      "Python", "FastAPI", "OpenCV", "TrOCR", "DocTR", "EasyOCR",
      "Docker", "HuggingFace Transformers",
    ],
    github: "https://github.com/TanviShetty19/Document-Intelligence-Studio-V2",
    demo: "",
    gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/30",
    emoji: "📄",
    images: ["/projects/form-extraction-1.png", "/projects/form-extraction-2.png"],
  },
  {
    slug: "cloud-based-naac-data-management",
    title: "Cloud-Based NAAC Data Management System",
    category: "Full-Stack",
    description:
      "Centralized, cloud-ready platform that streamlines NAAC accreditation data " +
      "management for higher-education institutions — with role-based access control, " +
      "secure document storage, search, analytics dashboards, audit logging, and " +
      "automated report generation.",
    achievements: [
      "Centralized platform for accreditation documents, workflows, and institutional data with role-based access control and secure storage",
      "Integrated search (MeiliSearch), authentication (Keycloak), and object storage (MinIO)",
      "Containerized deployment for scalable, reproducible document management",
      "Analytics dashboards, audit logging, and automated report generation",
    ],
    tech: [
      "Django", "React", "PostgreSQL", "Docker", "Keycloak", "MinIO", "MeiliSearch",
    ],
    github: "https://github.com/TanviShetty19/Cloud-Based-Naac-Data-Management-System",
    demo: "",
    gradient: "from-indigo-500/30 via-blue-500/20 to-violet-500/30",
    emoji: "🏛️",
    images: ["/projects/naac-1.png", "/projects/naac-2.png", "/projects/naac-3.png"],
  },
  {
    slug: "emobhaava-kannada-sarcasm",
    title: "EmoBhaava — Kannada Sarcasm & Sentiment Analysis",
    category: "NLP",
    description:
      "Multilingual NLP application for sarcasm and sentiment detection in Kannada, " +
      "Romanized Kannada, and Kannada–English code-mixed text using XLM-RoBERTa and " +
      "transformer-based models.",
    achievements: [
      "Context-aware sarcasm and sentiment classification across Kannada, Romanized Kannada, and code-mixed text",
      "Fine-tuned XLM-RoBERTa with transformer-based linguistic feature modeling",
      "REST APIs and batch-prediction workflows for scalable inference",
      "Web interface and Dockerized deployment pipeline with automated testing",
    ],
    tech: [
      "Python", "XLM-RoBERTa", "PyTorch", "HuggingFace Transformers", "Flask", "Docker", "NLP",
    ],
    github: "https://github.com/TanviShetty19/EmoBhaava---Kannada-Sarcasm-Detector",
    demo: "",
    gradient: "from-violet-500/30 via-purple-500/20 to-indigo-500/30",
    emoji: "🗣️",
    images: ["/projects/bot-1.png", "/projects/bot-2.png", "/projects/bot-3.png"],
  },
];

// ─────────────────────────────────────────────
//  EXPERIENCE
// ─────────────────────────────────────────────
export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
  icon: LucideIcon;
  tag: string;
};

export const experience: TimelineItem[] = [
  {
    title: "AIML — Full Stack Intern",
    org: "Geojit Technologies Pvt. Ltd.",
    period: "Jan 2026 – Apr 2026",
    tag: "Internship",
    icon: Briefcase,
    points: [
      "Contributed to the development of AI-driven software solutions by applying machine learning, OCR, and backend development concepts in an enterprise environment.",
      "Worked across the software development lifecycle — requirement analysis, implementation, testing, and deployment — collaborating within cross-functional teams.",
    ],
  },
  {
    title: "Salesforce Virtual Intern",
    org: "SkillWallet (Salesforce)",
    period: "May 2025 – Jul 2025",
    location: "Remote",
    tag: "Internship",
    icon: Cloud,
    points: [
      "Developed and configured CRM solutions using Salesforce Flow, Lightning App Builder, Reports, and Dashboards.",
      "Implemented workflow automation and data management for lead tracking, inventory management, and approval processes.",
    ],
  },
  {
    title: "Manager — Team SJEC Racing",
    org: "BAJA SAEINDIA",
    period: "2025 – 2026",
    location: "St. Joseph Engineering College, Mangaluru",
    tag: "Leadership",
    icon: Trophy,
    points: [
      "Managed Team SJEC Racing, contributing to the team's achievement of AIR 3 in ATVC and AIR 8 Overall at BAJA SAEINDIA 2026.",
      "Led planning, coordination, and cross-functional teamwork across the competition lifecycle.",
    ],
  },
];

// ─────────────────────────────────────────────
//  EDUCATION
// ─────────────────────────────────────────────
export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  score?: string;
  coursework?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "B.E. — Computer Science & Data Science",
    institution: "St. Joseph Engineering College, Mangaluru",
    duration: "2022 – Present",
    score: "CGPA: 9.79",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Data Science & Analytics",
    ],
  },
  {
    degree: "Class XII — Pre-University Course (PCMC)",
    institution: "M.G.M PU College, Udupi",
    duration: "2020 – 2022",
    score: "94.17%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    degree: "Class X — SSLC",
    institution: "St. Cecily's Institutions",
    duration: "2019 – 2020",
    score: "96.64%",
    coursework: [],
  },
];

// ─────────────────────────────────────────────
//  CERTIFICATIONS
// ─────────────────────────────────────────────
export type Certification = {
  title: string;
  issuer: string;
  category:
    | "AI/ML"
    | "Data Science"
    | "Cloud"
    | "Salesforce"
    | "Software Engineering"
    | "Other";
  year: string;
  gradient: string;
  image?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure (OCI)",
    category: "AI/ML",
    year: "2025",
    gradient: "from-purple-500/40 to-fuchsia-500/30",
    image: "/certificates/oci-generative-ai-professional.png",
  },
  {
    title: "AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure (OCI)",
    category: "AI/ML",
    year: "2025",
    gradient: "from-cyan-500/40 to-sky-500/30",
    image: "/certificates/oci-ai-foundations-associate.png",
  },
  {
    title: "Foundations Associate",
    issuer: "Oracle Cloud Infrastructure (OCI)",
    category: "Cloud",
    year: "2025",
    gradient: "from-rose-500/40 to-orange-500/30",
    image: "/certificates/oci-foundations-associate.png",
  },
  {
    title: "Developer Catalyst (Virtual Internship) & Administrator Explorer",
    issuer: "Salesforce",
    category: "Salesforce",
    year: "2025",
    gradient: "from-blue-500/40 to-cyan-500/30",
  },
];

// ─────────────────────────────────────────────
//  COURSES (learning history + in progress)
// ─────────────────────────────────────────────
export type Course = {
  title: string;
  provider: string;
  category:
    | "AI/ML"
    | "Data Science"
    | "Software Engineering"
    | "Salesforce"
    | "Cloud"
    | "NLP"
    | "MLOps";
  icon: LucideIcon;
};

export const courses: Course[] = [
  // Completed
  { title: "Generative AI Professional",              provider: "Oracle (OCI)",          category: "AI/ML",               icon: Brain },
  { title: "AI Foundations Associate",                provider: "Oracle (OCI)",          category: "AI/ML",               icon: GraduationCap },
  { title: "Developer Catalyst V3.0",                 provider: "Salesforce",            category: "Salesforce",          icon: Cloud },
  { title: "Data Science 101",                        provider: "IBM Skills Network",    category: "Data Science",        icon: LineChart },
  { title: "Data Analysis with Python",               provider: "IBM Skills Network",    category: "Data Science",        icon: LineChart },
  { title: "HuggingFace NLP Course",                  provider: "HuggingFace",           category: "NLP",                 icon: Brain },
  // In progress / planned
  { title: "Machine Learning Specialization",         provider: "DeepLearning.AI",       category: "AI/ML",               icon: Brain },
  { title: "Building & Evaluating Advanced RAG",      provider: "DeepLearning.AI",       category: "AI/ML",               icon: Brain },
  { title: "LLMOps",                                  provider: "DeepLearning.AI",       category: "MLOps",               icon: Server },
  { title: "LangChain Academy — Intro to LangGraph",  provider: "LangChain",             category: "AI/ML",               icon: Brain },
  { title: "Google Data Analytics Certificate",       provider: "Google / Coursera",     category: "Data Science",        icon: LineChart },
  { title: "Statistics with Python Specialization",   provider: "U Michigan / Coursera", category: "Data Science",        icon: LineChart },
  { title: "Meta Backend Developer Certificate",      provider: "Meta / Coursera",       category: "Software Engineering",icon: Code2 },
  { title: "dbt Fundamentals",                        provider: "dbt Labs",              category: "Data Science",        icon: Database },
];

// ─────────────────────────────────────────────
//  AWARDS & LEADERSHIP
// ─────────────────────────────────────────────
export const awards = [
  {
    title: "BAJA SAEINDIA 2026 — Team SJEC Racing",
    description: "Served as Manager; team achieved AIR 3 in ATVC and AIR 8 Overall.",
    icon: Trophy,
  },
  {
    title: "NCC Naval Wing",
    description: "Leading Cadet — demonstrated leadership, discipline, and teamwork.",
    icon: Trophy,
  },
  {
    title: "Kittur Rani Chennamma Award",
    description: "Recognized for leadership, social service, and community engagement.",
    icon: Award,
  },
  {
    title: "Laxmi Mazumdar Award",
    description: "Contributed to the award-winning Bharat Scouts and Guides unit.",
    icon: Award,
  },
];

// ─────────────────────────────────────────────
//  STATS
// ─────────────────────────────────────────────
export type Stat = { label: string; value: number; suffix: string; icon: LucideIcon };

export const stats: Stat[] = [
  { label: "CGPA",                    value: 9,  suffix: ".79", icon: GraduationCap },
  { label: "Projects Built",          value: 3,  suffix: "+",   icon: Boxes },
  { label: "Technologies",            value: 25, suffix: "+",   icon: Cpu },
  { label: "Certifications",          value: 4,  suffix: "+",   icon: Award },
];

// ─────────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────────
export const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
  { label: "Certs",      href: "#certifications" },
  { label: "Contact",    href: "#contact" },
];
