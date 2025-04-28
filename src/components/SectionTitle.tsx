interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="text-3xl font-bold text-accent mb-8">{title}</h2>;
};
