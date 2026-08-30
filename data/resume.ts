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
  title: "Senior Software Engineer, Tech Lead",
  tagline: "Distributed systems, engineering platforms, AI-powered tooling.",
  location: "Palo Alto, CA",
  email: "ale.guerinoni@gmail.com",
  linkedin: "https://linkedin.com/in/alessandraguerinoni",
  github: "https://github.com/alegueri",
  resumePdf: "/AlessandraGuerinoni_Resume.pdf",
};

export const summary =
  "I'm a Senior Software Engineer and Tech Lead at Tesla, where I lead engineering platform work, building tooling that engineers across the company rely on every day. Based in Palo Alto.";

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer, Tech Lead",
    company: "Tesla",
    dates: "July 2022 – Present",
    bullets: [
      "Two promotions in 3 years; Senior Software Engineer + Tech Lead since Apr 2025; currently also acting PM.",
      "Recruited to a critical org-wide engineering platform migration (~$100M in projected savings); shipped P1 bug fixes that prevented company-wide design work from halting, coordinated cross-team infrastructure, and unblocked change management for design data.",
      "Helped build a Kafka/Kubernetes/Go notification pipeline that gave multiple teams real-time access to engineering data, replacing manual polling and unlocking downstream automation; $18.8M in validated business impact.",
      'Led a team to ship a full-stack "GitHub for engineering design data": a change review and release platform with 3D geometry and 2D PDF diff (Next.js, React, Go microservices, Kafka, S3); delivered 10× performance, 99.76% uptime, and 60% cycle time reduction; $3.1M/year validated savings.',
      "Spearheaded AI integration into the engineering change review workflow, shipping models that classify design changes at 97% accuracy and eliminate ~6,000 hours/year of manual review of design changes ($1.2M/year saved).",
      "Helped build ETL pipelines (Go, MySQL, Temporal) exposing engineering data to internal services via gRPC and REST; ~$10M in validated business impact.",
      "Own production reliability for team platform services, including on-call rotation, incident response (with cross-team after-hours diagnoses), and observability via Prometheus, Grafana, and Splunk.",
      "Defined authorization architecture (OAuth, JWT, M2M, on-behalf-of flows) for platform services and negotiated API contracts with consumer teams.",
      "Mentored engineers, drove hiring through technical screens and panel interviews, and sponsored an intern through to full-time conversion.",
      "Acting Product Manager since Apr 2026, owning backlog prioritization, product strategy, and stakeholder alignment after PM departure.",
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
    role: "Teaching Assistant, Discrete Mathematics & Computational Thinking",
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
      "SQL",
    ],
  },
  {
    label: "Backend & Data",
    items: [
      "Kafka",
      "Temporal",
      "MySQL",
      "Redis",
      "gRPC",
      "Protobuf",
      "REST",
      "OAuth",
      "JWT",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "S3",
      "Jenkins",
      "ArgoCD",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Splunk",
    ],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "Node.js"],
  },
];

export const projects: Project[] = [
  {
    name: "TriAuto: Automated Emergency Triage System",
    context: "McMaster University Capstone",
    dates: "Sept 2021 – Apr 2022",
    description:
      "Co-developed with a 4-person team a real-time clinical decision-support system for emergency department triage that ingests patient intake data and produces a recommended acuity classification (CTAS 1 to 5), giving nurses a second-check during overwhelmed shifts when mis-triage risks delaying care.",
    stack: ["React", "Node.js", "Socket.IO", "MySQL"],
  },
];
