import { education } from "@/data/resume";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-10">
        {education.map((e) => (
          <article key={`${e.institution}-${e.dates}`} className="space-y-3">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {e.degree}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {e.institution}
                </p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                {e.dates}
              </p>
            </header>
            {e.details && e.details.length > 0 && (
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-700 marker:text-zinc-400 dark:text-zinc-300 dark:marker:text-zinc-600">
                {e.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
