import { skillIcon } from "./skillIcons";

// Small pill with a brand icon, used for tech stacks.
export default function SkillTag({ name }: { name: string }) {
  const { icon: Icon, color } = skillIcon(name);
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-[0.85rem]">
      <Icon size={14} color={color} aria-hidden />
      {name}
    </li>
  );
}
