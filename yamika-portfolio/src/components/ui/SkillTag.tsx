export default function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium text-muted bg-surface border border-border rounded-full">
      {label}
    </span>
  );
}
