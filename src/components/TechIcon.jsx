import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const iconMap = [
  { match: "react", Icon: SiReact, color: "#61DAFB" },
  { match: "vue", Icon: SiVuedotjs, color: "#4FC08D" },
  { match: "svelte", Icon: SiSvelte, color: "#FF3E00" },
  { match: "next", Icon: SiNextdotjs, color: "#000000" },
  { match: "node", Icon: SiNodedotjs, color: "#339933" },
  { match: "postgres", Icon: SiPostgresql, color: "#336791" },
  { match: "redis", Icon: SiRedis, color: "#DC382D" },
  { match: "typescript", Icon: SiTypescript, color: "#3178C6" },
  { match: "javascript", Icon: SiJavascript, color: "#F7DF1E" },
  { match: "tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { match: "docker", Icon: SiDocker, color: "#2496ED" },
  { match: "mongo", Icon: SiMongodb, color: "#47A248" },
  { match: "java", Icon: FaJava, color: "#EA2D2E", exclude: "script" },
];

// Reusable icon resolver + component used by TechCard, Sidebar, or anywhere else //
export default function TechIcon({ name, size = 40 }) {
  const key = name?.toLowerCase().trim().replace(/[\s.\-]+/g, "");

  for (const entry of iconMap) {
    if (key.includes(entry.match) && !(entry.exclude && key.includes(entry.exclude))) {
      const { Icon, color } = entry;
      return <Icon size={size} color={color} />;
    }
  }

  return <SiReact size={size} color="#94a3b8" />;
}