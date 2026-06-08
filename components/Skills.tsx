import { skills } from "@/data/resume";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-6">
        {skills.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr] sm:gap-6"
          >
            <dt className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
