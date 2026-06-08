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
  "I'm a Senior Software Engineer and Tech Lead at Tesla, where I lead engineering platform work — building tooling that engineers across the company rely on every day. On the side I'm doing an MS in Biomedical Engineering at Johns Hopkins. Based in Palo Alto.";

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer, Tech Lead",
    company: "Tesla",
    dates: "July 2022 – Present",
    bullets: [
      "Two promotions in 3 years; Senior Software Engineer + Tech Lead since Apr 2025; currently also acting PM.",
      "Led engineering platform tooling generating $22M+/year in validated time savings across the org.",
      "Designed and shipped a Kafka / Kubernetes / Go notification system worth ~$18.8M in business impact.",
      "Spearheaded AI integration that eliminated ~6,000 hours/year of manual work at 97% accuracy ($1.2M/year saved).",
    ],
  },
  {
    role: "Project Manager, Governance & University Collaboration",
    company: "Bombardier, Mitsubishi Heavy Industries",
    dates: "May 2019 – Aug 2020",
    bullets: [
      "Managed 50+ enterprise projects; led a team of 6 coordinating university partnerships and recruiting 26 interns.",
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
];
