export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Technical Product Manager / Senior Software Engineer",
    company: "Celestial BI LLC",
    period: "December 2025 – Present",
    location: "Remote",
    current: true,
    highlights: [
      "Works directly with Origis USA on product requirements, prioritisation, planning, and delivery.",
      "Leads and co-ordinates 12+ engineers across multiple simultaneous projects.",
      "Builds teams from scratch, including technical interviews, hiring, planning, execution, and production releases.",
      "Product areas include field services, recruitment technology, and healthcare.",
      "Significant AI components across current product work.",
      "Product work includes the Origis field-services platform and Celestial's Flo Recruiter platform.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Behaviol PTY Ltd",
    period: "September 2024 – December 2025",
    location: "Sydney, Australia (Remote)",
    current: false,
    highlights: [
      "DataPlay Analytics Engine development and frontend leadership.",
      "Docker-based deployments, client demos, and technology evaluation.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Behaviol PTY Ltd",
    period: "September 2023 – September 2024",
    location: "Remote",
    current: false,
    highlights: [
      "Real-time messaging with React, Java, PubNub, and Stream Chat.",
      "User simulation with Spring Boot.",
      "Analytics platform development with Next.js and TypeScript.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Behaviol PTY Ltd",
    period: "September 2022 – September 2023",
    location: "Remote",
    current: false,
    highlights: [
      "Gaming service platform with React and Redux.",
      "Authentication, real-time updates, frontend and backend collaboration.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Science (Reading)",
    institution: "University of Colombo School of Computing",
    year: "",
  },
  {
    degree: "BSc (Hons) in Computer Studies",
    institution: "University of Kelaniya",
    year: "2023",
    note: "Second Class Honours",
  },
];
