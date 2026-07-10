import { projects } from "@/data/resume";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-10">
        {projects.map((p) => (
          <article key={p.name} className="space-y-3">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {p.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {p.context}
                </p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                {p.dates}
              </p>
            </header>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {p.description}
            </p>
            {p.stack && p.stack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
