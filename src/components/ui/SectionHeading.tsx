import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls} mb-14`}>
      {eyebrow && (
        <span className="font-serif italic text-gold text-xl md:text-2xl">{eyebrow}</span>
      )}
      <h2 className="font-display font-extrabold uppercase text-3xl md:text-5xl tracking-tight text-gold-gradient max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground/70 max-w-2xl text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
