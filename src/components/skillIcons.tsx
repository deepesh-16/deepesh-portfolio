import type { IconType } from "react-icons";
import {
  SiReact, SiDotnet, SiTailwindcss, SiMui, SiBootstrap, SiSpringboot, SiNodedotjs,
  SiTypescript, SiOpenjdk, SiPython, SiJavascript, SiLeetcode, SiLangchain,
  SiApachekafka, SiDocker, SiSplunk, SiFlask, SiGooglecolab, SiJunit5,
} from "react-icons/si";
import {
  FaAws, FaBucket, FaDatabase, FaBell, FaLayerGroup, FaBrain, FaCloud, FaRobot,
  FaLanguage, FaUsers, FaComments, FaClock, FaCrown, FaCode, FaCodeCompare,
  FaNetworkWired, FaCheckDouble, FaEye,
} from "react-icons/fa6";

type Entry = { icon: IconType; color: string };

// Brand colors are kept as-is; they read fine on both the light and dark cards.
const icons: Record<string, Entry> = {
  "Full stack development": { icon: FaCode, color: "#0b7468" },
  "Cloud technologies": { icon: FaCloud, color: "#2f8fd8" },
  "Machine learning": { icon: FaBrain, color: "#d6609b" },
  "Agentic AI": { icon: FaRobot, color: "#8a63d2" },
  "Natural language processing": { icon: FaLanguage, color: "#e0932b" },
  "React.js": { icon: SiReact, color: "#22b8d9" },
  "ASP.NET": { icon: SiDotnet, color: "#7a5cd6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#14b8c4" },
  "Material UI": { icon: SiMui, color: "#2688e8" },
  Bootstrap: { icon: SiBootstrap, color: "#7952b3" },
  "Spring Boot": { icon: SiSpringboot, color: "#4caf50" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  "AWS S3": { icon: FaBucket, color: "#e25444" },
  DynamoDB: { icon: FaDatabase, color: "#3b6fd4" },
  RDS: { icon: FaDatabase, color: "#2f8fd8" },
  SQS: { icon: FaLayerGroup, color: "#e0932b" },
  SNS: { icon: FaBell, color: "#d6609b" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  Java: { icon: SiOpenjdk, color: "#e76f00" },
  Python: { icon: SiPython, color: "#3b82c4" },
  JavaScript: { icon: SiJavascript, color: "#e6b800" },
  "1758 rating on LeetCode (top 9%)": { icon: SiLeetcode, color: "#ffa116" },
  "200+ problems solved": { icon: FaCheckDouble, color: "#0b7468" },
  Leadership: { icon: FaCrown, color: "#e0932b" },
  Collaboration: { icon: FaUsers, color: "#2f8fd8" },
  "Clear communication": { icon: FaComments, color: "#8a63d2" },
  "Time management": { icon: FaClock, color: "#d6609b" },
  // Tech used in roles and projects
  LangGraph: { icon: SiLangchain, color: "#2f9e8f" },
  LLM: { icon: FaRobot, color: "#8a63d2" },
  AWS: { icon: FaAws, color: "#f29a1d" },
  Kafka: { icon: SiApachekafka, color: "#8c8c8c" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Splunk: { icon: SiSplunk, color: "#e0504a" },
  CNN: { icon: FaNetworkWired, color: "#d6609b" },
  "Explainable AI": { icon: FaEye, color: "#8a63d2" },
  "Google Colab": { icon: SiGooglecolab, color: "#f9ab00" },
  Flask: { icon: SiFlask, color: "#8c8c8c" },
  "Machine Learning": { icon: FaBrain, color: "#d6609b" },
  JUnit: { icon: SiJunit5, color: "#4caf50" },
};

const fallback: Entry = { icon: FaCodeCompare, color: "#0b7468" };

export function skillIcon(label: string): Entry {
  return icons[label] ?? fallback;
}

