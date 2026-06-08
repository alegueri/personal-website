import { experience } from "@/data/resume";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experience.map((job) => (
          <article key={`${job.company}-${job.dates}`} className="space-y-3">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.role}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {job.company}
                </p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                {job.dates}
              </p>
            </header>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 marker:text-zinc-400 dark:text-zinc-300 dark:marker:text-zinc-600">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
