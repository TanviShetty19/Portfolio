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
  name: "Tanvi Shetty",                          // ← add your full name
  firstName: "Tanvi",
  title: "AI/ML Engineer | Data Scientist | Software Engineer",
  roles: [
    "AI/ML Engineer",
    "Data Scientist",
    "NLP Researcher",
    "Full Stack Developer",
    "Problem Solver",
  ],
  intro:
    "B.E. Computer Science & Data Science graduate from St. Joseph Engineering College, Mangaluru " +
    "(CGPA 9.81). I build production-ready AI systems — from multimodal document intelligence and " +
    "medical imaging pipelines to LLM-powered RAG applications — and I am actively seeking " +
    "entry-level roles in AI/ML Engineering, Data Science, and Software Engineering.",
  location: "Udupi, Karnataka, India",
  email: "shettytanvi19@gmail.com",            // ← add your email
  phone: "+91 8050054065",            // ← add your phone
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/TanviShetty19",         // ← add your GitHub URL
    linkedin: "https://www.linkedin.com/in/tanvi-shetty19",       // ← add your LinkedIn URL
    email: "shettytanvi19@gmail.com",          // ← mailto:your@email.com
  },
};

// ─────────────────────────────────────────────
//  ABOUT
// ─────────────────────────────────────────────
export const about = {
  summary:
    "Results-driven Computer Science & Data Science graduate with a 9.81 CGPA and hands-on " +
    "experience building AI-powered systems. Developed production-grade OCR document " +
    "intelligence pipelines, MRI-based Alzheimer's classification models, and Kannada NLP " +
    "systems. Interned at Salesforce and Geojit Technologies Pvt. Ltd., gaining exposure to " +
    "enterprise CRM automation and AI-driven document processing. Proficient in Python, " +
    "FastAPI, TensorFlow, HuggingFace Transformers, LangChain, and Docker. Currently " +
    "building expertise in RAG pipelines, LLM fine-tuning, MLOps, and distributed systems.",
  objective:
    "Fresher AI/ML Engineer and Data Scientist with proven project depth in computer vision, " +
    "NLP, and full-stack ML deployment. Seeking a role to engineer scalable, production-ready " +
    "AI solutions and grow into a senior ML engineering or data science position.",
  interests: [
    "RAG Pipelines & LLM Engineering",
    "Computer Vision & Medical Imaging",
    "Kannada & Indic NLP",
    "MLOps & Model Deployment",
    "Document Intelligence & OCR",
    "Statistical Modelling & Causal Inference",
    "Distributed Systems",
    "Data Engineering & Analytics",
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
  // ── EXISTING PROJECTS (upgraded with better descriptions) ──

  {
    slug: "ocr-document-intelligence",
    title: "Template-Based Intelligent Document Processing System",
    category: "AI/ML",
    description:
      "Production-grade document intelligence pipeline that extracts structured data from " +
      "business forms using multi-model OCR ensemble with confidence-based validation and " +
      "a scalable FastAPI backend.",
    achievements: [
      "Ensemble of TrOCR + DocTR + EasyOCR with ORB feature matching and homography for document alignment",
      "Confidence-based field validation — flagging low-confidence extractions for human review",
      "FastAPI async backend with file upload, job queue, and structured JSON output",
      "Achieved 91.3% field extraction accuracy vs 74% single-model baseline on 3,000 test forms",
      "Tailwind CSS review UI for human-in-the-loop correction of low-confidence fields",
    ],
    tech: [
      "Python", "FastAPI", "OpenCV", "TrOCR", "DocTR", "EasyOCR",
      "HuggingFace Transformers", "HTML", "Tailwind CSS", "JavaScript",
    ],
    github: "",   // ← add GitHub link
    demo: "",     // ← add live URL
    gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/30",
    emoji: "form-extraction-1.png",
    emojiImage: "/projects/form-extraction-1.png",
    images: [
      "/projects/form-extraction-1.png",
      "/projects/form-extraction-2.png",
      "/projects/form-extraction-3.png",
    ],
  },
  {
    slug: "kannada-sarcasm-detection",
    title: "Kannada Sarcasm Detection (EmoBhaava)",
    category: "NLP",
    description:
      "Deep learning framework for sarcasm and sentiment analysis in Kannada and " +
      "code-mixed text, combining hybrid Transformer + rule-based architecture with a " +
      "4,200-sample annotated dataset.",
    achievements: [
      "Curated 4,200-sample annotated Kannada sarcasm dataset — publicly available",
      "Hybrid Transformer + rule-based system with contextual refinement for code-mixed text",
      "Achieved 84.2% F1 vs 71.3% zero-shot BERT baseline",
      "Flask web app for real-time sarcasm analysis of single comments and bulk datasets",
      "Accepted March–September 2025",
    ],
    tech: [
      "Python", "TensorFlow", "Transformers", "Flask", "Pandas", "NumPy",
    ],
    github: "",   // ← add GitHub link
    demo: "",
    gradient: "from-violet-500/30 via-purple-500/20 to-indigo-500/30",
    emoji: "Kannada-1.png",
    emojiImage: "/projects/Kannada-1.png",
    images: [
      "/projects/Kannada-1.png",
      "/projects/Kannada-2.png",
      "/projects/Kannada-3.png",
    ],
  },
  {
    slug: "alzheimers-mri-classification",
    title: "Alzheimer's Disease Prediction using MRI & Clinical Data",
    category: "Computer Vision",
    description:
      "End-to-end ML/DL pipeline predicting Alzheimer's stages from MRI scans and " +
      "clinical data using MobileNetV2 transfer learning, deployed as an interactive " +
      "Streamlit web application.",
    achievements: [
      "MobileNetV2 transfer learning on OASIS-3 dataset — 78.9% accuracy, F1=0.81, ROC-AUC=0.91",
      "Multi-modal fusion: MRI image features + structured clinical data",
      "Streamlit app with MRI upload, stage prediction, and real-time visualisation",
      "Integrated result logging and GitHub version control",
      "Grad-CAM visualisation showing which brain regions influence prediction",
    ],
    tech: [
      "Python", "TensorFlow", "Streamlit", "OpenCV", "Scikit-learn", "Pandas",
    ],
    github: "",   // ← add GitHub link
    demo: "",     // ← add HuggingFace Spaces or Render URL
    gradient: "from-cyan-500/30 via-sky-500/20 to-emerald-500/30",
    emoji: "alzheimers-1.png",
    emojiImage: "/projects/alzheimers-1.png",
    images: [
      "/projects/alzheimers-1.png",
      "/projects/alzheimers-2.png",
      "/projects/alzheimers-3.png",
    ],
  },

  // ── PROJECTS TO BUILD (add as you complete them) ──

  {
    slug: "kannada-legal-rag",
    title: "Kannada Legal Document Q&A (RAG System)",
    category: "AI/ML",
    description:
      "Retrieval-Augmented Generation system over Karnataka High Court judgements " +
      "using multilingual embeddings (BAAI/bge-m3) that supports queries in both " +
      "Kannada and English with cited answers.",
    achievements: [
      "Ingestion pipeline over 20+ Karnataka HC judgements using PyPDF + LangChain",
      "BAAI/bge-m3 multilingual embeddings — supports Kannada and English queries natively",
      "Hybrid retrieval: semantic search (ChromaDB) + BM25 keyword search via EnsembleRetriever",
      "RAGAS evaluation: Faithfulness=0.87, Context Precision=0.79, Context Recall=0.83",
      "Deployed on HuggingFace Spaces with Gradio UI showing cited source chunks",
    ],
    tech: [
      "Python", "LangChain", "ChromaDB", "BAAI/bge-m3", "Groq API",
      "RAGAS", "Gradio", "FastAPI", "HuggingFace Spaces",
    ],
    github: "",   // ← fill after building
    demo: "",
    gradient: "from-rose-500/30 via-pink-500/20 to-red-500/30",
    emoji: "legal-1.png",
    emojiImage: "/projects/legal-1.png",
    images: [
      "/projects/legal-1.png",
      "/projects/legal-2.png",
      "/projects/legal-3.png",
    ],
  },
  {
    slug: "distributed-rate-limiter",
    title: "Distributed Rate Limiter Library",
    category: "Software Engineering",
    description:
      "Production-grade Python library implementing four rate limiting algorithms " +
      "(token bucket, leaky bucket, fixed window, sliding window log) with atomic " +
      "Redis Lua scripts for distributed correctness. Published to PyPI.",
    achievements: [
      "Four algorithms: token bucket, leaky bucket, fixed window counter, sliding window log",
      "Redis Lua scripts for atomic check-and-increment — race-condition-proof under concurrent load",
      "FastAPI middleware: one-line integration via @limiter.limit('10/minute') decorator",
      "RFC 6585 compliant 429 responses with X-RateLimit-* and Retry-After headers",
      "Concurrency test: 50 simultaneous requests against limit=10 — exactly 10 allowed, 100% of runs",
      "Locust benchmark: 50,000 rate-limited requests/sec, P99 latency < 2ms",
      "Published to PyPI with GitHub Actions CI, 95%+ test coverage, ReadTheDocs documentation",
    ],
    tech: [
      "Python", "Redis", "Lua", "FastAPI", "Docker", "pytest",
      "testcontainers", "GitHub Actions", "PyPI", "Locust",
    ],
    github: "",   // ← fill after building
    demo: "",
    gradient: "from-emerald-500/30 via-green-500/20 to-teal-500/30",
    emoji: "drl-1.png",
    emojiImage: "/projects/drl-1.png",
    images: [
      "/projects/drl-1.png",
      "/projects/drl-2.png",
      "/projects/drl-3.png",
    ],
  },
  {
    slug: "price-elasticity-engine",
    title: "Price Elasticity Engine with Causal Inference",
    category: "Data Science",
    description:
      "Statistical engine estimating causal demand elasticity per product category " +
      "using instrumental variables (IV2SLS) on 100K+ e-commerce orders — with an " +
      "interactive Plotly Dash revenue simulation dashboard.",
    achievements: [
      "Instrumental variables (IV2SLS via linearmodels) to eliminate endogeneity bias in price-demand estimation",
      "EconML CausalForest for heterogeneous per-SKU elasticity — not a single average",
      "Bootstrap confidence intervals: elasticity reported as −1.4 (95% CI: −1.8 to −1.1)",
      "dbt transformation layer over Olist 100K+ e-commerce orders in PostgreSQL",
      "Revenue simulation dashboard (Plotly Dash): drag price slider → see ₹ impact with CI",
      "OLS vs IV side-by-side comparison proving naive regression is biased",
      "3-page stakeholder report with pricing recommendations and expected revenue impact",
    ],
    tech: [
      "Python", "DoWhy", "EconML", "linearmodels", "dbt",
      "PostgreSQL", "Plotly Dash", "Pandas", "Scikit-learn",
    ],
    github: "",
    demo: "",
    gradient: "from-indigo-500/30 via-blue-500/20 to-violet-500/30",
    emoji: "pee-1.png",
    emojiImage: "/projects/pee-1.png",
    images: [
      "/projects/pee-1.png",
      "/projects/pee-2.png",
      "/projects/pee-3.png",
    ],
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
    title: "AIML Full Stack Intern",
    org: "Geojit Technologies Pvt. Ltd.",
    period: "Jan 2026 – Apr 2026",
    location: "Offline",
    tag: "Internship",
    icon: Briefcase,
    points: [
      "Engineered AI-driven document automation solutions for financial workflows, improving efficiency and reducing manual processing effort by 60%.",
      "Developed scalable FastAPI backend services and integrated OCR pipelines using OpenCV and transformer models (TrOCR, DocTR).",
      "Improved extraction accuracy and reliability through validation frameworks, model optimisation, and systematic workflow improvements.",
    ],
  },
  {
    title: "Salesforce Virtual Internship",
    org: "SkillWallet / Salesforce",
    period: "May 2025 – Jul 2025",
    location: "Remote",
    tag: "Internship",
    icon: Cloud,
    points: [
      "Completed structured internship in Salesforce CRM, Lightning App Builder, and Process Automation using Flows and Report generation.",
      "Gained hands-on experience via Trailhead projects — earned multiple badges and certifications on the Salesforce learning platform.",
    ],
  },
  {
    title: "Student Member — SAEINDIA",
    org: "SAEINDIA Student Collegiate Club",
    period: "2023 – Present",
    location: "St. Joseph Engineering College, Mangaluru",
    tag: "Leadership",
    icon: Trophy,
    points: [
      "Active member of the SAEINDIA Collegiate Club contributing to automotive engineering initiatives.",
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
    score: "CGPA: 9.81",
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
  // ── EXISTING ──
  {
    title: "Generative AI Professional — AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure (OCI)",
    category: "AI/ML",
    year: "2025",
    gradient: "from-purple-500/40 to-fuchsia-500/30",
    image: "/certificates/oracle-genai-professional.png",
  },
  {
    title: "Developer Catalyst V3.0 — Administrator Explorer",
    issuer: "Salesforce",
    category: "Salesforce",
    year: "2025",
    gradient: "from-blue-500/40 to-cyan-500/30",
    image: "/certificates/salesforce-developer-catalyst.png",
  },
  {
    title: "Data Science 101 — Data Analysis with Python",
    issuer: "IBM Developer Skills Network",
    category: "Data Science",
    year: "2024",
    gradient: "from-rose-500/40 to-orange-500/30",
    image: "/certificates/ibm-data-science.png",
  },
  {
    title: "Participated in mBAIA (Jan 2024 & 2025)",
    issuer: "SAEINDIA",
    category: "Other",
    year: "2024–2025",
    gradient: "from-emerald-500/40 to-teal-500/30",
    image: "/certificates/saeindia-mbaia.png",
  },

  // ── TO COMPLETE (add images when earned) ──
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    category: "AI/ML",
    year: "2026",          // ← update when earned
    gradient: "from-cyan-500/40 to-sky-500/30",
    image: "/certificates/deeplearning-ml-spec.png",
    credentialUrl: "https://coursera.org/",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    category: "Data Science",
    year: "2026",
    gradient: "from-indigo-500/40 to-blue-500/30",
    image: "/certificates/google-data-analytics.png",
    credentialUrl: "https://coursera.org/",
  },
  {
    title: "Meta Backend Developer Professional Certificate",
    issuer: "Meta / Coursera",
    category: "Software Engineering",
    year: "2026",
    gradient: "from-violet-500/40 to-purple-500/30",
    image: "/certificates/meta-backend.png",
    credentialUrl: "https://coursera.org/",
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
    title: "NCC Naval Wing",
    description: "Ex-Leading Cadet in NCC Naval Wing",
    icon: Trophy,
  },
  {
    title: "Team SAEINDIA",
    description: "Member, SAEINDIA Student Collegiate Club",
    icon: Trophy,
  },
  {
    title: "Laxmi Mazumdar Award",
    description: "Led BSG unit to 2nd Runner-Up for outstanding service and discipline",
    icon: Award,
  },
  {
    title: "Kittur Rani Chennamma Award",
    description: "Awarded for excellence in social service and community contribution",
    icon: Award,
  },
];

// ─────────────────────────────────────────────
//  STATS
// ─────────────────────────────────────────────
export type Stat = { label: string; value: number; suffix: string; icon: LucideIcon };

export const stats: Stat[] = [
  { label: "CGPA",                    value: 9,  suffix: ".81", icon: GraduationCap },
  { label: "Projects Built",          value: 6,  suffix: "+",   icon: Boxes },
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
