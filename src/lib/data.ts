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
  title: "Computer Science Engineer | Data Science | AI & ML",
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
  email: "shettytanvi19@gmail.com",            // ← add your email            // ← add your phone
  resumeUrl: "/resume.pdf",
  phone: "",
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
    "Computer Science & Data Science student with hands-on experience developing AI-powered applications, enterprise software solutions, and intelligent automation systems. My work spans document intelligence, OCR, computer vision, natural language processing, Salesforce CRM automation, and full-stack application development. Through academic, internship, and personal projects, I have built solutions that combine machine learning, software engineering, and data-driven problem solving to address real-world challenges. Currently exploring Generative AI, Retrieval-Augmented Generation (RAG), LangChain, LLM fine-tuning, MLOps, and distributed systems through hands-on projects, coursework, and continuous learning.",

  objective:
    "Aspiring AI/ML Engineer and Software Engineer passionate about building intelligent, scalable, and user-focused applications. Seeking opportunities to apply skills in artificial intelligence, machine learning, software development, and data science while continuously learning, innovating, and contributing to impactful technology solutions.",

  interests: [
    "Generative AI & Large Language Models",
    "RAG & LangChain Applications",
    "Document Intelligence & OCR",
    "Computer Vision",
    "Natural Language Processing",
    "Full Stack Development",
    "Enterprise Software & CRM Automation",
    "MLOps & AI Deployment",
    "Cloud Technologies",
    "Distributed Systems",
    "Data Science & Analytics",
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
{ name: "TensorFlow / Keras", level: 82 },
{ name: "Scikit-learn", level: 84 },
{ name: "PyTorch", level: 70 },
{ name: "HuggingFace Transformers", level: 78 },
{ name: "OpenCV", level: 80 },
{ name: "XGBoost / Ensemble Methods", level: 76 },
{ name: "Generative AI", level: 72 },
{ name: "LangChain & RAG", level: 55 },
{ name: "Prompt Engineering", level: 75 },
{ name: "LLM Fine-tuning (LoRA / PEFT)", level: 45 },
{ name: "AI Agents", level: 45 },
],
},

{
category: "NLP & Computer Vision",
icon: Cpu,
accent: "from-neon-purple to-neon-blue",
skills: [
{ name: "Transformers (BERT / DistilBERT)", level: 78 },
{ name: "OCR (DocTR / TrOCR / EasyOCR)", level: 86 },
{ name: "Document Layout Analysis", level: 80 },
{ name: "Computer Vision", level: 82 },
{ name: "Kannada / Indic NLP", level: 76 },
{ name: "Sentiment & Sarcasm Detection", level: 78 },
{ name: "Medical Image Analysis", level: 74 },
],
},

{
category: "Data Science & Analytics",
icon: LineChart,
accent: "from-neon-cyan to-neon-blue",
skills: [
{ name: "Pandas & NumPy", level: 88 },
{ name: "Matplotlib / Seaborn", level: 84 },
{ name: "Plotly", level: 78 },
{ name: "Streamlit", level: 80 },
{ name: "EDA & Feature Engineering", level: 82 },
{ name: "Statistics", level: 65 },
{ name: "Power BI", level: 45 },
{ name: "Tableau", level: 40 },
],
},

{
category: "MLOps & Deployment",
icon: Server,
accent: "from-neon-cyan to-neon-purple",
skills: [
{ name: "FastAPI", level: 82 },
{ name: "Docker", level: 62 },
{ name: "Git & GitHub", level: 85 },
{ name: "Linux", level: 65 },
{ name: "MLflow / W&B", level: 40 },
{ name: "CI/CD (GitHub Actions)", level: 42 },
{ name: "HuggingFace Spaces", level: 60 },
{ name: "Streamlit Cloud / Render", level: 58 },
],
},

{
category: "Development & Tools",
icon: Globe,
accent: "from-neon-blue to-neon-violet",
skills: [
{ name: "React.js", level: 65 },
{ name: "Tailwind CSS", level: 70 },
{ name: "Gradio", level: 80 },
{ name: "Google Colab", level: 90 },
{ name: "Jupyter Notebook", level: 90 },
{ name: "VS Code", level: 88 },
{ name: "Postman", level: 75 },
{ name: "Microsoft Excel", level: 80 },
{ name: "Salesforce CRM", level: 65 },
{ name: "Apex & Salesforce Flows", level: 60 },
],
},

{
category: "Databases",
icon: Database,
accent: "from-neon-pink to-neon-purple",
skills: [
{ name: "PostgreSQL", level: 62 },
{ name: "MySQL", level: 65 },
{ name: "MongoDB", level: 48 },
{ name: "SQLite", level: 70 },
{ name: "ChromaDB / Vector Databases", level: 52 },
{ name: "Redis", level: 40 },
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
| "Enterprise Software"
| "Salesforce"
| "Data Science";

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
slug: "document-intelligence-studio-v2",
title: "Document Intelligence Studio V2",
category: "AI/ML",


description:
  "AI-powered document intelligence platform developed to automate extraction, validation, alignment, and processing of information from scanned forms and multi-page documents using OCR and computer vision techniques.",

achievements: [
  "Developed document alignment and preprocessing pipelines using computer vision techniques",
  "Integrated TrOCR, DocTR, and EasyOCR for intelligent document processing",
  "Built template creation and field mapping workflows for structured extraction",
  "Implemented batch document processing and validation mechanisms",
  "Developed FastAPI backend services and React-based interfaces for document management"
],

tech: [
  "Python",
  "FastAPI",
  "React",
  "OpenCV",
  "TrOCR",
  "DocTR",
  "EasyOCR",
  "Docker",
  "Hugging Face Transformers",
  "JavaScript",
  "HTML",
  "CSS",
  "Prometheus",
  "Grafana",
  "PDF Processing"
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
slug: "cloud-based-naac-system",
title: "Cloud-Based NAAC Data Management System",
category: "Enterprise Software",


description:
  "Centralized cloud-based platform for managing accreditation documents, institutional records, workflows, and secure collaboration with role-based access control and advanced search capabilities.",

achievements: [
  "Developed secure document management and workflow platform",
  "Implemented authentication and authorization using Keycloak",
  "Integrated MeiliSearch for fast document discovery",
  "Containerized services using Docker",
  "Built scalable backend architecture with PostgreSQL and MinIO"
],

tech: [
  "Django",
  "Django REST Framework",
  "React",
  "PostgreSQL",
  "Docker",
  "Keycloak",
  "MinIO",
  "MeiliSearch",
  "JWT",
  "OIDC",
  "RBAC",
  "Audit Logging"
],
gradient: "from-violet-500/30 via-purple-500/20 to-indigo-500/30",
    emoji: "🏛️",
    emojiImage: "/projects/naac-1.png",
    images: [
      "/projects/naac-1.png",
      "/projects/naac-2.png",
      "/projects/naac-3.png",
    ],
  },
  {
  slug: "emobhaava-kannada-sarcasm",
  title: "EmoBhaava – Kannada Sarcasm & Sentiment Analysis",
  category: "NLP",


  description:
    "Multilingual NLP application for sarcasm and sentiment detection in Kannada, Romanized Kannada, and Kannada-English code-mixed text using transformer-based architectures.",

  achievements: [
    "Developed transformer-based sarcasm and sentiment detection models",
    "Worked with multilingual and code-mixed social media datasets",
    "Implemented REST APIs and batch prediction workflows",
    "Built web interfaces for real-time inference",
    "Containerized deployment using Docker"
  ],

  tech: [
    "Python",
    "PyTorch",
    "XLM-RoBERTa",
    "Transformers",
    "Flask",
    "Docker",
    "REST API",
    "Pandas",
    "NumPy",
    "NLP"
  ],

  github: "",
  demo: "",
  gradient: "from-violet-500/30 via-purple-500/20 to-indigo-500/30",
  emoji: "Kannada-1.png",
  emojiImage: "/projects/Kannada-1.png",
    images: [
      "/projects/Kannada-1.png",
      "/projects/Kannada-2.png",
      
    ],


  },
  // 4. DOCUMENT INTELLIGENCE STUDIO V1

{
slug: "document-intelligence-studio-v1",
title: "Document Intelligence Studio V1",
category: "AI/ML",


description:
  "Initial version of a document processing platform focused on OCR-driven extraction, document alignment, template matching, and structured information retrieval.",

achievements: [
  "Implemented OCR-based information extraction workflows",
  "Built document alignment and correction pipelines",
  "Integrated multiple OCR engines for experimentation",
  "Developed automated extraction pipelines for structured forms"
],

tech: [
  "Python",
  "FastAPI",
  "OpenCV",
  "TrOCR",
  "DocTR",
  "EasyOCR",
  "PyTorch",
  "Template Matching",
  "PDF Processing"
],

github: "",
demo: "",
gradient: "from-orange-500/30 via-yellow-500/20 to-amber-500/30",
emoji: "docv1.png",
emojiImage: "/projects/form-extraction-4.jpeg",
    images: [
      "/projects/form-extraction-4.jpeg",
      "/projects/form-extraction-5.jpeg",
      "/projects/form-extraction-6.jpeg",
    ],
  },
// 5. ALZHEIMER'S

{
slug: "alzheimers-disease-prediction",
title: "Alzheimer's Disease Prediction using MRI Data",
category: "Computer Vision",


description:
  "Machine learning and deep learning system for Alzheimer's disease prediction using MRI scans and clinical information with interactive deployment interfaces.",

achievements: [
  "Developed MRI image classification pipeline",
  "Implemented transfer learning for medical image analysis",
  "Built Streamlit-based prediction interface",
  "Developed API endpoints for model inference",
  "Containerized deployment workflows using Docker"
],

tech: [
  "Python",
  "TensorFlow",
  "FastAPI",
  "Streamlit",
  "Docker",
  "Scikit-learn",
  "OpenCV",
  "Pandas",
  "NumPy",
  "Medical Imaging"
],

github: "",
demo: "",
gradient: "from-cyan-500/30 via-sky-500/20 to-emerald-500/30",
emoji: "alzheimers-1.png",
emojiImage: "/projects/alzheimers-1.png",

    images: [
      "/projects/alzheimers-1.png",
      "/projects/alzheimers-2.png",
      
    ],
},

// 6. STELLAR WATCH

{
slug: "stellar-watch",
title: "Stellar Watch",
category: "Data Science",


description:
  "Astronomy-focused data visualization and analysis platform for exploring celestial data and observational insights.",

achievements: [
  "Processed astronomical datasets",
  "Performed exploratory data analysis",
  "Built interactive visualizations",
  "Developed data-driven insights from celestial observations"
],

tech: [
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Data Analysis"
],

github: "",
demo: "",
gradient: "from-indigo-500/30 via-purple-500/20 to-blue-500/30",
emoji: "stellar.png",
emojiImage: "/projects/stellar-1.png",
images: [
      "/projects/stellar-1.png",
      "/projects/stellar-2.png",
      "/projects/stellar-3.png",
    ],


},

// 7. HELMET DETECTION

{
slug: "helmet-detection-system",
title: "Helmet Detection System",
category: "Computer Vision",


description:
  "Computer vision application for detecting helmet compliance using image processing and deep learning techniques.",

achievements: [
  "Developed helmet detection workflow",
  "Performed image preprocessing and feature extraction",
  "Implemented computer vision-based detection pipeline",
  "Evaluated model performance on traffic imagery"
],

tech: [
  "Python",
  "OpenCV",
  "TensorFlow",
  "Computer Vision",
  "Image Processing"
],

github: "",
demo: "",
gradient: "from-green-500/30 via-teal-500/20 to-cyan-500/30",
emoji: "helmet.png",
emojiImage: "/projects/helmet-1.jpeg",
images: [
      "/projects/helmet-1.jpeg",
      "/projects/helmet-2.jpeg",
     
    ],

},

// 8. SALESFORCE CRM

{
slug: "whatnext-vision-motors-crm",
title: "WhatNext Vision Motors CRM",
category: "Salesforce",


description:
  "Salesforce CRM solution developed for vehicle ordering, inventory management, dealer allocation, workflow automation, and customer relationship management.",

achievements: [
  "Designed custom Salesforce data model and object relationships",
  "Implemented Apex classes, triggers, schedulers, and validation logic",
  "Automated dealer assignment and inventory validation workflows",
  "Developed dashboards, reports, and role-based access controls",
  "Built scalable CRM processes for order management and customer engagement"
],

tech: [
  "Salesforce",
  "Apex",
  "Batch Apex",
  "Triggers",
  "Flows",
  "Validation Rules",
  "Dashboards",
  "Reports",
  "CRM Automation"
],

github: "www.github.com/salesforce-crm",
demo: "",
gradient: "from-sky-500/30 via-blue-500/20 to-cyan-500/30",
emoji: "salesforce.png",
emojiImage: "/projects/salesforce-1.png",
images: [
      "/projects/salesforce-1.png",
      
    ],
}

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
    duration: "2022 – 2026",
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
    degree: "Class XII — Pre-University Course (PCMB)",
    institution: "M.G.M PU College, Udupi",
    duration: "2020 – 2022",
    score: "94.17%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Biology"],
  },
  {
    degree: "SSLC",
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
    | "Software Engineering" | "Cybersecurity"
    | "Other";
  year: string;
  gradient: string;
  image?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
// ─────────────────────────────────────────────
// TOP INDUSTRY CERTIFICATIONS
// ─────────────────────────────────────────────

{
title: "OCI 2025 Generative AI Professional",
issuer: "Oracle Cloud Infrastructure",
category: "AI/ML",
year: "2025",
gradient: "from-purple-500/40 to-fuchsia-500/30",
image: "/certificates/oci-generative-ai-professional.png",
},

{
title: "OCI 2025 AI Foundations Associate",
issuer: "Oracle Cloud Infrastructure",
category: "AI/ML",
year: "2025",
gradient: "from-violet-500/40 to-purple-500/30",
image: "/certificates/oci-ai-foundations-associate.png",
},

{
title: "OCI 2025 Foundations Associate",
issuer: "Oracle Cloud Infrastructure",
category: "Cloud",
year: "2025",
gradient: "from-indigo-500/40 to-blue-500/30",
image: "/certificates/oci-foundations-associate.png",
},

{
title: "Agentblazer Champion Program",
issuer: "Salesforce",
category: "Salesforce",
year: "2025",
gradient: "from-cyan-500/40 to-blue-500/30",
image: "/certificates/salesforce-agentblazer-champion.png",
},

{
title: "Developer Catalyst V3.0",
issuer: "Salesforce",
category: "Salesforce",
year: "2025",
gradient: "from-blue-500/40 to-cyan-500/30",
image: "/certificates/salesforce-developer-catalyst.png",
},

{
title: "Administrator Explorer",
issuer: "Salesforce",
category: "Salesforce",
year: "2025",
gradient: "from-sky-500/40 to-cyan-500/30",
image: "/certificates/salesforce-administrator-explorer.png",
},

// ─────────────────────────────────────────────
// NPTEL CERTIFICATIONS
// ─────────────────────────────────────────────

{
title: "Foundation of Cloud IoT Edge ML (Elite)",
issuer: "NPTEL",
category: "AI/ML",
year: "2024",
gradient: "from-purple-500/40 to-indigo-500/30",
image: "/certificates/nptel-cloud-iot-edge-ml.png",
},

{
title: "Large Applications Practicum (Elite)",
issuer: "NPTEL",
category: "Software Engineering",
year: "2024",
gradient: "from-blue-500/40 to-violet-500/30",
image: "/certificates/nptel-large-applications-practicum.png",
},

// ─────────────────────────────────────────────
// IBM PROFESSIONAL COURSES
// ─────────────────────────────────────────────

{
title: "Data Analysis with Python",
issuer: "IBM Skills Network",
category: "Data Science",
year: "2024",
gradient: "from-orange-500/40 to-amber-500/30",
image: "/certificates/ibm-data-analysis-python.png",
},

{
title: "Data Science 101",
issuer: "IBM Skills Network",
category: "Data Science",
year: "2024",
gradient: "from-rose-500/40 to-orange-500/30",
image: "/certificates/ibm-data-science-101.png",
},

{
title: "Big Data 101",
issuer: "IBM Skills Network",
category: "Data Science",
year: "2024",
gradient: "from-red-500/40 to-orange-500/30",
image: "/certificates/ibm-big-data-101.png",
},

{
title: "Tools for Data Science",
issuer: "IBM Skills Network",
category: "Data Science",
year: "2024",
gradient: "from-pink-500/40 to-rose-500/30",
image: "/certificates/ibm-tools-for-data-science.png",
},

{
title: "Project Management Fundamentals",
issuer: "IBM Skills Network",
category: "Other",
year: "2024",
gradient: "from-emerald-500/40 to-green-500/30",
image: "/certificates/ibm-project-management-fundamentals.png",
},

// ─────────────────────────────────────────────
// CYBERSECURITY
// ─────────────────────────────────────────────

{
title: "Introduction to Cybersecurity",
issuer: "Cisco Networking Academy",
category: "Cybersecurity",
year: "2024",
gradient: "from-teal-500/40 to-cyan-500/30",
image: "/certificates/cisco-introduction-to-cybersecurity.png",
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
