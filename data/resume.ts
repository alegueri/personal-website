export type Experience = {
  role: string;
  company: string;
  location?: string;
  dates: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  institution: string;
  dates: string;
  details?: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const personal = {
  name: "Alessandra Guerinoni",
  title: "Senior Software Engineer, Tech Lead",
  location: "Palo Alto, CA",
  email: "ale.guerinoni@gmail.com",
  linkedin: "https://linkedin.com/in/alessandraguerinoni",
  github: "https://github.com/alegueri",
  resumePdf: "/AlessandraGuerinoni_Resume.pdf",
};

export const summary =
  "Senior Software Engineer and Tech Lead at Tesla with 4 years' experience designing distributed systems and shipping AI-powered tooling at scale. Two promotions in 3 years; portfolio of $22M+/year in validated business impact. Currently pursuing an MS in Biomedical Engineering at Johns Hopkins University with a focus in neuroengineering.";

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer, Tech Lead",
    company: "Tesla",
    dates: "July 2022 – Present",
    bullets: [
      "Advanced from Associate to Senior Software Engineer in under 3 years (two promotions, Apr 2025); recipient of Tesla performance cash award (Oct 2024).",
      "Led engineers building internal engineering platform tooling generating an estimated $22M+/year in validated time savings across the organization.",
      "Designed and implemented a notification system using Kafka, Kubernetes, and Golang, generating an estimated $18.8M in business impact.",
      "Architected and shipped a full-stack web application (Next.js, React, Go microservices, Kafka, S3) replacing legacy tooling — 10X performance improvement, 99.76% uptime, ~2000 daily users; reduced approval cycle time from ~20 days to 8 days (60% reduction); $3.1M/year validated savings.",
      "Spearheaded AI integration into engineering workflows — production features achieving 97% classification accuracy, eliminating ~6,000 hours/year of manual review ($1.2M/year validated savings).",
      "Engineered and optimized ETL pipelines for efficient data consumption via gRPC and REST APIs, leveraging Go, MySQL, and Temporal workflows.",
      "Mentored engineers and delegated major features while maintaining technical accountability; contributed to the hiring pipeline through 3+ technical screens and panel interviews; mentored intern through to full-time conversion.",
      "Assumed Acting Product Manager responsibilities (Apr 2026 – Present), owning backlog prioritization, product strategy, and stakeholder alignment after PM departure.",
    ],
  },
  {
    role: "Project Manager, Governance & University Collaboration",
    company: "Bombardier, Mitsubishi Heavy Industries",
    dates: "May 2019 – Aug 2020",
    bullets: [
      "Managed 50+ projects across the enterprise, ensuring budget and schedule adherence; chaired monthly status meetings with Managers and Senior Director.",
      "Led a team of 6 professionals coordinating university partnerships; successfully recruited 26 interns.",
      "Negotiated university contracts, reducing cost overhead by 2%.",
      "Built Python tooling for Oracle database access to streamline project reporting.",
    ],
  },
  {
    role: "Teaching Assistant — Discrete Mathematics & Computational Thinking",
    company: "McMaster Faculty of Engineering",
    dates: "Jan 2019 – Apr 2019 & Sept 2021 – Dec 2021",
    bullets: [
      "Facilitated Haskell and computer science learning for 50+ students; led tutorials, graded assignments, and ran consultations.",
    ],
  },
  {
    role: "Software Engineering Camp Counselor",
    company: "McMaster Faculty of Engineering",
    dates: "Apr 2018 – Sept 2018",
    bullets: [
      "Introduced 250+ children to Software Engineering through Python, Arduino, and web projects; delivered STEM lectures to 100+ students across Hamilton.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science, Applied Biomedical Engineering",
    institution:
      "Johns Hopkins University, Whiting School of Engineering — Engineering for Professionals",
    dates: "Sept 2025 – Present",
    details: ["Focus area: Neuroengineering."],
  },
  {
    degree: "Bachelor of Engineering, Mechatronics Engineering",
    institution: "McMaster University",
    dates: "Sept 2016 – Apr 2022",
    details: [
      "Golden Key Award (top 15% of the faculty).",
      "Future Leader Recognition Award for exemplary co-op work.",
      "Dean's Honour List — 3.7 GPA (4.0 scale).",
      "McMaster's Faculty of Engineering Entrance Award.",
    ],
  },
  {
    degree: "Machine Learning Certificate",
    institution: "Cornell University",
    dates: "May 2024 – Aug 2024",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "Go",
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "Haskell",
      "SQL",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "S3",
      "Kafka",
      "Temporal",
      "Redis",
    ],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "REST",
      "gRPC",
      "OAuth",
      "JWT",
      "Prometheus",
      "Grafana",
      "Splunk",
    ],
  },
  {
    label: "Spoken Languages",
    items: ["English (Native)", "Spanish (Native)", "French (Beginner)"],
  },
];
