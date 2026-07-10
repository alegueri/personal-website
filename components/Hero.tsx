import Image from "next/image";
import { personal, summary } from "@/data/resume";

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              {personal.name}
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              {personal.title}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {personal.tagline} · {personal.location}
            </p>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {summary}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={personal.resumePdf}
              className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
              download
            >
              Download Resume
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-100"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src="/headshot.jpg"
            alt={personal.name}
            width={180}
            height={180}
            priority
            className="h-32 w-32 rounded-full object-cover sm:h-44 sm:w-44"
          />
        </div>
      </div>
    </section>
  );
}
