import { personal } from "@/data/resume";
import Section from "./Section";

const links = [
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    display: personal.email,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    display: "linkedin.com/in/alessandraguerinoni",
  },
  {
    label: "GitHub",
    href: personal.github,
    display: "github.com/alegueri",
  },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        Always open to interesting conversations — feel free to reach out.
      </p>
      <ul className="mt-6 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <span className="w-20 text-zinc-500 dark:text-zinc-500">
              {l.label}
            </span>
            <a
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
            >
              {l.display}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
