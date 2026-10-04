import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Section from "./Section";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Typography className="!mb-5 !text-[1.25rem]">
        Open to conversations about agentic AI, fraud detection and cloud platforms.
      </Typography>
      <div className="flex flex-col items-start gap-1">
        <Button href={`mailto:${profile.email}`} startIcon={<EmailOutlinedIcon />} size="large">
          {profile.email}
        </Button>
        <Button href={profile.phoneHref} startIcon={<PhoneIcon />} size="large">
          {profile.phone}
        </Button>
        <Button href={profile.linkedin} target="_blank" rel="noopener" startIcon={<LinkedInIcon />} size="large">
          {profile.linkedinLabel}
        </Button>
      </div>
      <Typography className="!mt-14 !text-[0.9rem] text-soft">© 2026 {profile.name}</Typography>
    </Section>
  );
}
