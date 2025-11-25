export const personalInfo = {
  name: "Rakesh Thakkuri",
  title: "Machine Learning & Generative AI Engineer",
  email: "rakeshthakkuri969@gmail.com",
  phone: "+91 9392498378",
  location: "Hyderabad, India",
  bio: "Machine Learning & Generative AI Engineer with a strong record of building production-grade AI systems—from LLM-powered website/code generation tools and scalable FastAPI microservices to multimodal RAG assistants and end-to-end MLOps pipelines. Creator of Minus One to Zero, a platform that simplifies Data Structures & Algorithms through interactive explanations and structured problem-solving. Experienced in PyTorch, LoRA fine-tuning, Docker, CI/CD, AWS, MLflow, DVC, Airflow/ZenML, and modern cloud-native architectures. A fast learner with a research-driven mindset who also loves teaching and guiding students through DSA mastery and placement preparation.",
  shortBio: "Creator of Minus One to Zero • Building LLM, RAG, and MLOps systems that ship",
  domain: "minus1to0.in", 
};

export const socialLinks = {
  github: "https://github.com/rakeshthakkuri",
  linkedin: "https://www.linkedin.com/in/rakeshthakkuri",
  twitter: "https://x.com/rakesh_thakkuri",
  email: "rakeshthakkuri969@gmail.com",
};

export const aboutHighlights = [
  "Creator of Minus One to Zero – a full-stack learning platform helping learners go from \"minus one\" to job-ready DSA mastery.",
  "Received offer from IBM and an upcoming AI Engineer offer at SPRDLX.",
  "Building an advanced Venture Capitalist AI Intelligence tool for startup insights, diligence automation, and investment support.",
  "Hands-on across LLMs, Retrieval-Augmented Generation, FastAPI microservices, cloud, and MLOps tooling (MLflow, DVC, Airflow/ZenML).",
  "Provide DSA mentoring, resume guidance, and placement interview prep for students.",
  "Working style: fast-learning, research-level depth, shipping real products end-to-end.",
];

export const experience = [
  {
    id: 1,
    title: "AI Engineer Intern",
    company: "Mannkey Soft Solutions",
    location: "Remote",
    period: "Aug 2025 - Present",
    description: "Designed and implemented a Retrieval-Augmented Generation (RAG) application within the iHeal app to enable intelligent, context-aware responses by integrating vector databases with LLMs. Designed and optimized WhatsApp user interaction flows, making customer communication more seamless and intuitive.",
    technologies: ["Python", "FastAPI", "RAG", "LLMs", "Vector Databases", "WhatsApp API"],
  },
];

export const skills = [
  { name: "Python", level: "", category: "Languages" },
  { name: "Java", level: "Familiar", category: "Languages" },
  { name: "JavaScript", level: "", category: "Languages" },
  { name: "FastAPI", level: "", category: "Backend" },
  { name: "PostgreSQL", level: "", category: "Databases" },
  { name: "Machine Learning", level: "", category: "AI & ML" },
  { name: "Deep Learning", level: "", category: "AI & ML" },
  { name: "RAG", level: "", category: "AI & ML" },
  { name: "Generative AI", level: "", category: "AI & ML" },
  { name: "Docker", level: "", category: "DevOps" },
  { name: "Git", level: "", category: "Tools" },
  { name: "DVC", level: "Familiar", category: "Tools" },
  { name: "Data Structures", level: "", category: "Core Concepts" },
  { name: "Algorithms", level: "", category: "Core Concepts" },
];

export const projects = [
  {
    id: 4,
    title: "Minus1to0 Learning Platform",
    description:
      "Full-stack platform that helps learners go from \"minus one\" to job-ready DSA mastery. Includes a React SPA, Node/Express API, PostgreSQL data layer, resume builder with LaTeX templates, mentorship services, mock interviews, and a public leaderboard.",
    image: "/minus1to0.png",
    technologies: [
      "React 18",
      "React Router",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "LaTeX",
      "Render",
    ],
    liveUrl: "https://www.minus1to0.in",
    githubUrl: "https://github.com/rakeshthakkuri/minus1to0",
    featured: true,
    details: {
      repoStructure: [
        "frontend/ - React SPA (landing, explore, resume, dashboard UIs)",
        "backend/ - Node/Express API + PostgreSQL access",
        "README.md, backend/.env.example, frontend/.env.example",
      ],
      keyFeatures: [
        "Authenticated dashboard with topic tracking and progress visualizations",
        "Resume builder with LaTeX templates and PDF preview",
        "Explore page for services like study planner and mock interviews",
        "Public leaderboard for community competition",
        "Comprehensive API for topics, problems, users, auth, and stats",
      ],
      prerequisites: ["Node.js 18+", "npm 8+", "PostgreSQL 13+"],
      devSetup: [
        "Terminal 1: cd backend && npm install && npm run dev",
        "Terminal 2: cd frontend && npm install && npm start",
      ],
      envNotes:
        "Use .env templates for frontend/backend; backend expects DATABASE_URL or individual DB vars. Frontend proxies to REACT_APP_API_URL (default http://localhost:5001/api).",
      deployment:
        "Deployed on Render; update REACT_APP_API_URL and backend allowed origins before deploy. Keep .env secrets out of version control.",
    },
  },
  {
    id: 1,
    title: "DocQuery AI: Intelligent PDF Assistant",
    description: "Developed a full-stack AI web app with responsive front end (HTML, CSS, JS) for PDF querying and AI-generated answers. Engineered PyMuPDF text extraction, Sentence Transformers for embeddings, and integrated Gemini API with Cross-Encoder for precise, re-ranked LLM responses.",
    image: "/placeholder-project-1.jpg",
    technologies: ["Python", "FastAPI", "Gemini API", "Qdrant", "PostgreSQL", "Sentence Transformers", "Google OAuth", "JWT", "HTML/CSS/JS", "Render", "Docker", "CI/CD"],
    liveUrl: "https://docquery-rocs.onrender.com",
    githubUrl: "https://github.com/rakeshthakkuri/DocQuery",
    featured: true,
  },
  {
    id: 2,
    title: "Medical RAG Health Assistant",
    description: "Built a Retrieval-Augmented Generation (RAG) system with FastAPI to provide context-aware medical answers using patient reports and WHO guidelines. Connected Gemini API to generate reliable, context-grounded responses, prioritizing patient-specific data while supplementing with global medical guidelines.",
    image: "/placeholder-project-2.jpg",
    technologies: ["Python", "FastAPI", "Qdrant", "SentenceTransformers", "PyMuPDF", "Gemini API", "Docker", "Render"],
    liveUrl: "https://medical-rag-assistant.onrender.com",
    githubUrl: "https://github.com/rakeshthakkuri/medical-rag-assistant",
    featured: true,
  },
];

export const currentProjects = [
  {
    id: 'vc-ai',
    title: 'Venture Capitalist AI Intelligence',
    status: 'In Private Beta',
    timeline: 'Nov 2025 – Present',
    description:
      'An AI platform for VCs that automates startup scouting, due diligence, and investment decision support using proprietary datasets, LLM agents, and structured reasoning workflows.',
    focusAreas: [
      'Streaming ingestion of market, founder, and product signals',
      'LLM agent workflows for memo drafting and risk scoring',
      'RAG pipelines that blend proprietary and public intel',
      'Interactive dashboard for insights, watchlists, and reports',
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'Qdrant', 'PostgreSQL', 'AWS', 'Docker', 'LLM Agents'],
  },
  {
    id: 'sprdlx',
    title: 'SPRDLX AI Engineer Onboarding',
    status: 'Offer in Progress',
    timeline: 'Dec 2025 – Incoming',
    description:
      'Prepping production-ready tooling for an upcoming AI Engineer role at SPRDLX, focusing on generative UX, multimodal assistants, and scalable MLOps foundations.',
    focusAreas: [
      'Designing guardrailed LLM endpoints with streaming UX',
      'Building reusable evaluation harnesses for hallucination and latency',
      'Containerized microservices with CI/CD, observability, and feature flags',
      'Knowledge distillation + LoRA workflows for efficient fine-tuning',
    ],
    technologies: ['TypeScript', 'Next.js', 'FastAPI', 'OpenAI APIs', 'Weights & Biases', 'Kubernetes', 'Argo', 'MLflow'],
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for structuring and scaling React applications for production.",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "building-scalable-react-applications",
  },
  {
    id: 2,
    title: "Modern CSS Techniques for 2024",
    excerpt: "Exploring the latest CSS features and techniques to build beautiful, performant UIs.",
    date: "2024-01-10",
    readTime: "7 min read",
    slug: "modern-css-techniques-2024",
  },
  {
    id: 3,
    title: "API Design Best Practices",
    excerpt: "A comprehensive guide to designing RESTful APIs that are maintainable and developer-friendly.",
    date: "2024-01-05",
    readTime: "6 min read",
    slug: "api-design-best-practices",
  },
];

export const education = [
  {
    id: 1,
    institution: "Anurag University",
    degree: "B-Tech in Artificial Intelligence and Machine Learning",
    period: "2022 - Present",
    details: "CGPA: 8.96",
  },
  {
    id: 2,
    institution: "Jawahar Navodaya Vidhyalaya, Choppadandi, Karimnagar",
    degree: "High School",
    period: "2020",
    details: "Aggregate: 90.8%",
  },
];

export const achievements = [
  "Top 5 Finalist: Secured a place in the top 5 teams in a hackathon, demonstrating strong problem-solving, collaboration, and technical skills.",
  "Jawahar Navodaya Vidyalaya Selection: Selected among only 7 students out of 5000 applicants in a highly competitive school-level entrance competition.",
  "Finalist in coding competition within college: Finalist in college coding competition during 2nd year, demonstrating strong problem-solving and algorithmic skills under time constraints.",
];

export const codingProfiles = {
  leetcode: "rakeshthakkuri",
  geeksforgeeks: "rakeshthakkuri",
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Skills", path: "#skills" },
  { name: "Current Work", path: "#current-projects" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

