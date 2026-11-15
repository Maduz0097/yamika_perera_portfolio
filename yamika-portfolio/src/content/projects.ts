export interface Project {
  slug: string;
  title: string;
  client: string;
  tagline: string;
  description: string;
  role: string;
  context: string;
  scope: string[];
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
    tagline: "Product management and engineering leadership for field operations",
    description:
      "Enterprise field-services platform covering work orders, inspections, offline workflows, and AI-supported functionality. Direct client collaboration on requirements, prioritisation, planning, and delivery.",
    role: "Technical Product Manager / Engineering Lead",
    context:
      "Origis USA required a comprehensive field-services platform to manage work orders, inspections, and offline-capable workflows for their operations teams.",
    scope: [
      "Work order management and tracking",
      "Inspection workflows",
      "Offline-capable field operations",
      "AI-supported functionality",
      "Requirements gathering and prioritisation",
      "Engineering team coordination",
    ],
    technologies: [],
    delivery:
      "End-to-end product delivery with direct international client collaboration. Leading engineering execution from requirements through production release.",
    priority: 1,
    current: true,
  },
  {
    slug: "flo-recruiter",
    title: "Flo Recruiter Platform",
    client: "Celestial BI",
    tagline: "AI-enabled recruitment platform from product to production",
    description:
      "AI-enabled recruitment platform encompassing product planning, team formation, requirements definition, engineering execution, and releases with AI-enabled capabilities woven throughout recruitment workflows.",
    role: "Technical Product Manager",
    context:
      "Celestial BI needed an AI-powered recruitment platform to streamline hiring workflows and leverage AI capabilities across the recruitment process.",
    scope: [
      "Product planning and delivery",
      "Team formation and engineering execution",
      "Requirements definition",
      "AI-enabled recruitment workflows",
      "Production releases",
    ],
    technologies: [],
    delivery:
      "Built the team from scratch through technical interviews and hiring. Led planning, execution, and production releases.",
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
