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

export type Project = {
  name: string;
  context: string;
  dates: string;
  description: string;
  stack?: string[];
};

export const personal = {
  name: "Alessandra Guerinoni",
  title: "Senior Software Engineer & Neuroengineering Student",
  tagline: "Applying distributed systems to neuroscience & clinical tech.",
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
    details: [
      "Focus area: Neuroengineering. Current GPA: 3.90/4.0.",
      "Completed coursework: Physiology for Applied BME I & II, Mathematical Methods for Applied BME.",
    ],
  },
  {
    degree: "Bachelor of Engineering with Distinction, Mechatronics Engineering",
    institution: "McMaster University",
    dates: "Sept 2016 – Apr 2022",
    details: [
      "Dean's Honour List (multi-time).",
      "Golden Key Award (top 15% of the faculty).",
      "Future Leader Recognition Award for exemplary co-op work.",
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
      "MATLAB",
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

export const projects: Project[] = [
  {
    name: "TriAuto",
    context: "McMaster University Capstone",
    dates: "Sept 2021 – Apr 2022",
    description:
      "Emergency department triage is a manual, high-stakes classification: nurses assign each incoming patient an acuity level (CTAS 1–5) based on symptoms and vitals. When EDs get overwhelmed, mis-triage can delay care for the most vulnerable patients. Co-developed a real-time decision-support system with a 4-person team that ingests patient intake data and produces a recommended acuity classification, giving nurses a second-check during busy shifts.",
    stack: ["React", "Node.js", "MySQL", "Socket.IO"],
  },
];
