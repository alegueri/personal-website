import { personal } from "@/data/resume";
import Section from "./Section";

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.6 0h4.37v1.92h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v7.45h-4.56v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V22H7.82V8z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.2 1.18.93-.26 1.92-.39 2.91-.39s1.98.13 2.91.39c2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
      />
    </svg>
  );
}

const links = [
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    display: personal.email,
    Icon: EmailIcon,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    display: "linkedin.com/in/alessandraguerinoni",
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: personal.github,
    display: "github.com/alegueri",
    Icon: GitHubIcon,
  },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        Always open to interesting conversations — feel free to reach out.
      </p>
      <ul className="mt-6 space-y-3 text-sm">
        {links.map(({ label, href, display, Icon }) => {
          const isExternal = !href.startsWith("mailto:");
          return (
            <li key={label}>
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-3 text-zinc-900 dark:text-zinc-100"
              >
                <span className="text-zinc-500 transition-colors group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-zinc-100">
                  <Icon />
                </span>
                <span className="underline decoration-zinc-300 underline-offset-4 transition-colors group-hover:decoration-zinc-900 dark:decoration-zinc-700 dark:group-hover:decoration-zinc-100">
                  {display}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
