export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  tagline: string;
  description: string;
  role: string;
  context: string;
  scope: string[];
  features?: ProjectFeature[];
  technologies: string[];
  delivery: string;
  externalUrl?: string;
  priority: number;
  current: boolean;
}

export const projects: Project[] = [
  {
    slug: "origis-field-services",
    title: "Origis Field Services Platform",
    client: "Origis USA via Celestial BI",
    tagline: "Enterprise field operations, asset management, and offline inspections",
    description:
      "Enterprise field-services platform for utility-scale solar and clean energy operations. Supports work order lifecycles, structured equipment inspections, offline-first field synchronization, and AI-assisted findings generation directly from technician observations.",
    role: "Technical Product Manager / Engineering Lead",
    context:
      "Origis USA required a mission-critical field operations platform to manage complex work orders, safety protocols, and asset inspections across utility-scale energy installations where remote field crews often operate without cellular connectivity.",
    scope: [
      "End-to-end work order dispatch and lifecycle tracking",
      "Offline-first checklist execution and field data capture",
      "Automated photo and voice observation logging",
      "AI-assisted inspection findings and anomaly watchlists",
      "Direct international client collaboration and roadmap prioritisation",
      "Cross-functional coordination of 12+ engineers across releases",
    ],
    features: [
      {
        title: "Offline-First Execution",
        description:
          "Enables field technicians to execute multi-step inspection checklists, log photos, and capture voice notes in remote utility sites with automatic background sync upon reconnection.",
      },
      {
        title: "AI Findings Watchlist",
        description:
          "Analyzes spoken technician observations and inspection imagery to highlight critical anomalies, recurring issues, and items requiring follow-up.",
      },
      {
        title: "Zero-Retype Inspection Reports",
        description:
          "Automatically generates customer-ready service reports and billing handoffs directly from recorded field records without manual technician write-ups.",
      },
    ],
    technologies: [
      "Offline-First Architecture",
      "AI Inspection Analysis",
      "Work Order Management",
      "Field Operations Sync",
      "Enterprise Web & Mobile",
    ],
    delivery:
      "Led product strategy, client alignment with Origis USA, and technical execution. Coordinated engineering teams from discovery and architectural definition through staging, QA, and production releases.",
    priority: 1,
    current: true,
  },
  {
    slug: "flo-recruiter",
    title: "Flo Recruiter & Field Platform",
    client: "Celestial BI",
    tagline: "AI-powered hiring portal and career companion for field service talent",
    description:
      "AI-driven recruitment and career platform built for field service technicians, installers, and trade specialists across HVAC, solar, utilities, and telecom. Features an employer hiring portal with AI skill matching and SMS/WhatsApp outreach, paired with a mobile career companion offering voice-powered resume building, digital credential wallets, and AI upskilling pathways.",
    role: "Technical Product Manager",
    context:
      "Field service industries face chronic shortages of certified technicians, yet traditional ATS platforms rely on static keyword searches and desktop forms. Celestial developed Flo (celestialflo.ai) to bridge this gap: empowering field crews to build resumes by voice in under 5 minutes and equipping employers with AI skill-matching, referral pipelines, and instant multi-channel candidate messaging.",
    scope: [
      "Product vision, feature roadmaps, and stakeholder alignment",
      "Team formation: technical hiring, coding interviews, and onboarding from scratch",
      "AI skill-matching and certification gap analysis engine",
      "Voice-to-resume parsing workflow converting spoken experience into verified skills",
      "Digital Career Wallet for trade licenses (EPA, OSHA, NABCEP) and credentials",
      "Multi-channel candidate communication via integrated SMS and WhatsApp",
      "Job distribution across 100+ job boards and HRIS interoperability",
      "Sprint planning, cross-functional delivery, and iterative production releases",
    ],
    features: [
      {
        title: "Voice-Powered Resume Builder",
        description:
          "Allows technicians to speak their work history and generates a professional, structured resume in under 5 minutes with AI-suggested skills and certifications.",
      },
      {
        title: "AI Skill Matching & Gap Analysis",
        description:
          "Evaluates candidate profiles against job requirements, surfacing matched trade skills, licenses, and missing qualifications before employer review.",
      },
      {
        title: "Digital Career Wallet",
        description:
          "Centralized mobile record keeping verified licenses, safety certifications (EPA 608, OSHA 30, NABCEP), and trade experience ready for opportunities.",
      },
      {
        title: "Multi-Channel Candidate Messaging",
        description:
          "Connects recruiters and hiring teams with field talent directly over SMS and WhatsApp, drastically reducing response latency in hiring workflows.",
      },
      {
        title: "100+ Job Board & HRIS Syndication",
        description:
          "Automated multi-platform job distribution connected with enterprise applicant tracking and HR systems.",
      },
    ],
    technologies: [
      "AI Skill Matching",
      "Voice Resume Parsing (LLM)",
      "Multi-Channel Messaging (SMS/WhatsApp)",
      "Job Board & HRIS APIs",
      "Next.js & TypeScript",
      "Cloudflare / Cloud Infrastructure",
    ],
    delivery:
      "Formed and mentored the engineering team from the ground up through technical interviews. Managed end-to-end delivery across product discovery, AI workflow design, user journeys, sprint execution, and live production deployment at celestialflo.ai.",
    externalUrl: "https://celestialflo.ai/",
    priority: 2,
    current: true,
  },
  {
    slug: "dataplay",
    title: "DataPlay Analytics Engine",
    client: "Behaviol PTY Ltd",
    tagline: "AI-powered analytics for telecommunications",
    description:
      "AI-powered analytics platform serving telecommunications companies, providing data-driven insights and analytics capabilities.",
    role: "Senior Software Engineer / Frontend Lead",
    context:
      "Behaviol developed an AI-powered analytics platform targeting the telecommunications industry, requiring robust frontend architecture and real-time data handling.",
    scope: [
      "Frontend architecture and leadership",
      "Docker-based deployments",
      "Client demonstrations",
      "Technology evaluation",
    ],
    technologies: [
      "Next.js",
      "Spring Boot",
      "Python",
      "PubNub",
      "Tailwind CSS",
      "Redux.js",
    ],
    delivery:
      "Frontend leadership with Docker-based deployment pipelines. Conducted client demos and led technology evaluation for the platform.",
    externalUrl: "https://data-play.ai/",
    priority: 3,
    current: false,
  },
  {
    slug: "meta11",
    title: "Meta11",
    client: "Behaviol PTY Ltd",
    tagline: "Real-time gaming service platform",
    description:
      "Gaming service platform for real-time communication, game-data tracking, and user engagement.",
    role: "Software Engineer",
    context:
      "Meta11 required a high-performance gaming platform with real-time communication, data tracking, and engaging user experiences.",
    scope: [
      "Real-time communication systems",
      "Game data tracking",
      "User engagement features",
      "Authentication and real-time updates",
    ],
    technologies: ["React.js", "Redux.js", "Spring Boot", "PubNub"],
    delivery:
      "Built real-time messaging and game-data tracking features. Implemented authentication and real-time update systems.",
    externalUrl: "https://meta11.com/",
    priority: 4,
    current: false,
  },
  {
    slug: "sri-lanka-chatbot",
    title: "Sri Lanka Chat Agent",
    client: "Independent Project",
    tagline: "AI chatbot for Sri Lanka-related queries",
    description:
      "Python chatbot and API for Sri Lanka-related queries using Wikipedia as a knowledge source, featuring query classification, local embeddings, persistent chat history, and feedback collection.",
    role: "Developer",
    context:
      "An independent project exploring conversational AI with RAG (Retrieval-Augmented Generation) techniques for a Sri Lanka knowledge base.",
    scope: [
      "Query and greeting classification",
      "Local embeddings with RAG",
      "Persistent chat history",
      "Feedback collection",
      "FastAPI-based REST API",
    ],
    technologies: [
      "Python",
      "LlamaIndex",
      "Groq API",
      "FastAPI",
      "PostgreSQL",
    ],
    delivery:
      "End-to-end development from architecture to deployment, using modern LLM integration patterns.",
    externalUrl: "https://github.com/Maduz0097/sri_lanka_chat_agent",
    priority: 5,
    current: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
