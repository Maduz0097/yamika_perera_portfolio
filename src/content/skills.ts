export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Product",
    items: [
      "Product Strategy",
      "Roadmaps",
      "Requirements Analysis",
      "Backlog Prioritisation",
      "Agile / Scrum",
      "Sprint Planning",
      "Stakeholder Management",
      "Cross-functional Delivery",
      "Release Management",
      "JIRA",
    ],
  },
  {
    category: "Leadership",
    items: [
      "Engineering Team Leadership",
      "Team Building",
      "Technical Interviews",
      "Recruitment",
      "Onboarding",
      "Planning",
      "Mentoring",
      "Client Communication",
    ],
  },
  {
    category: "AI",
    items: [
      "Generative AI",
      "LLM Integration",
      "Prompt Engineering",
      "RAG",
      "Embeddings",
      "AI-powered Applications",
      "OpenAI API",
      "Groq API",
      "LlamaIndex",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "ShadCN",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Java",
      "Spring Boot",
      "Python",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["GCP", "AWS EC2", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    category: "Data & Messaging",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Neo4j",
      "SQLite",
      "PubNub",
      "Kafka",
    ],
  },
];
