type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-zinc-200 py-16 dark:border-zinc-800">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
