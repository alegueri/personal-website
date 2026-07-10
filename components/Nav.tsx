import Link from "next/link";

const sections = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="#about"
          className="text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          AG
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.href} className="hidden sm:block">
              <Link
                href={s.href}
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
