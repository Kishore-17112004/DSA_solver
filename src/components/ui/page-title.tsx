export function PageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold md:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-foreground/70 md:text-base">{subtitle}</p>
    </div>
  );
}
