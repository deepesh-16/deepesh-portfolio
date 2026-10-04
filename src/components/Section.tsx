import Typography from "@mui/material/Typography";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="pt-16 max-md:pt-14">
      <Typography
        variant="h2"
        component="h2"
        className="!mb-6 border-b-2 border-ink pb-2 !text-[1.9rem]"
      >
        {title}
      </Typography>
      {children}
    </section>
  );
}
