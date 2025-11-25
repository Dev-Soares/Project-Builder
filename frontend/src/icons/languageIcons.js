import {
  // --- Languages ---
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPhp,
  SiRuby,
  SiGo,
  SiRust,
  SiSwift,
  SiKotlin,
  SiLua,

  // --- Web Technologies ---
  SiHtml5,
  SiCss3,
  SiSass,
  SiLess,
  SiStylus,

  // --- Frameworks & Libraries ---
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiSolid,
  SiNextdotjs,
  SiNuxtdotjs,
  SiGatsby,

  // --- Backend ---
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFastify,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiSpringboot,
  SiRubyonrails,
  SiLaravel,

  // --- Databases ---
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiGraphql,

  // --- DevOps & Tools ---
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,

  // --- Cloud ---
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiDigitalocean,

  // --- Testing ---
  SiJest,
  SiCypress,
  SiSelenium,
  SiPytest,

  // --- Game Development ---
  SiUnity,
  
} from 'react-icons/si';

import { FaJava } from "react-icons/fa";

const languageIcons = [
  {
    category: "Popular Languages",
    icons: [
      { component: SiJavascript, id: "javascript", label: "JavaScript", type: "CustomNode", color: "#F7DF1E" },
      { component: SiTypescript, id: "typescript", label: "TypeScript", type: "CustomNode", color: "#3178C6" },
      { component: SiPython, id: "python", label: "Python", type: "CustomNode", color: "#3776AB" },
      { component: FaJava, id: "java", label: "Java", type: "CustomNode", color: "#ED8B00" },
      { component: SiCplusplus, id: "cpp", label: "C++", type: "CustomNode", color: "#00599C" },
      { component: SiPhp, id: "php", label: "PHP", type: "CustomNode", color: "#777BB4" },
      { component: SiRuby, id: "ruby", label: "Ruby", type: "CustomNode", color: "#CC342D" },
      { component: SiGo, id: "go", label: "Go", type: "CustomNode", color: "#00ADD8" },
    ],
  },
  {
    category: "Modern Languages",
    icons: [
      { component: SiRust, id: "rust", label: "Rust", type: "CustomNode", color: "#000000" },
      { component: SiSwift, id: "swift", label: "Swift", type: "CustomNode", color: "#FA7343" },
      { component: SiKotlin, id: "kotlin", label: "Kotlin", type: "CustomNode", color: "#7F52FF" },
    ],
  },
  {
    category: "Scripting & Shell",
    icons: [
      { component: SiLua, id: "lua", label: "Lua", type: "CustomNode", color: "#2C2D72" },
    ],
  },
  {
    category: "Web Frontend",
    icons: [
      { component: SiHtml5, id: "html5", label: "HTML5", type: "CustomNode", color: "#E34F26" },
      { component: SiCss3, id: "css3", label: "CSS3", type: "CustomNode", color: "#1572B6" },
      { component: SiReact, id: "react", label: "React", type: "CustomNode", color: "#61DAFB" },
      { component: SiVuedotjs, id: "vue", label: "Vue.js", type: "CustomNode", color: "#4FC08D" },
      { component: SiAngular, id: "angular", label: "Angular", type: "CustomNode", color: "#DD0031" },
      { component: SiSvelte, id: "svelte", label: "Svelte", type: "CustomNode", color: "#FF3E00" },
      { component: SiSolid, id: "solidjs", label: "Solid.js", type: "CustomNode", color: "#2C4F7C" },
      { component: SiNextdotjs, id: "nextjs", label: "Next.js", type: "CustomNode", color: "#000000" },
      { component: SiNuxtdotjs, id: "nuxtjs", label: "Nuxt.js", type: "CustomNode", color: "#00DC82" },
      { component: SiGatsby, id: "gatsby", label: "Gatsby", type: "CustomNode", color: "#663399" },
    ],
  },
  {
    category: "CSS Preprocessors",
    icons: [
      { component: SiSass, id: "sass", label: "Sass", type: "CustomNode", color: "#CC6699" },
      { component: SiLess, id: "less", label: "Less", type: "CustomNode", color: "#1D365D" },
      { component: SiStylus, id: "stylus", label: "Stylus", type: "CustomNode", color: "#FF6347" },
    ],
  },
  {
    category: "Backend Frameworks",
    icons: [
      { component: SiNodedotjs, id: "nodejs", label: "Node.js", type: "CustomNode", color: "#339933" },
      { component: SiExpress, id: "express", label: "Express", type: "CustomNode", color: "#000000" },
      { component: SiNestjs, id: "nestjs", label: "NestJS", type: "CustomNode", color: "#E0234E" },
      { component: SiFastify, id: "fastify", label: "Fastify", type: "CustomNode", color: "#000000" },
      { component: SiDjango, id: "django", label: "Django", type: "CustomNode", color: "#092E20" },
      { component: SiFlask, id: "flask", label: "Flask", type: "CustomNode", color: "#000000" },
      { component: SiFastapi, id: "fastapi", label: "FastAPI", type: "CustomNode", color: "#009688" },
      { component: SiSpringboot, id: "springboot", label: "Spring Boot", type: "CustomNode", color: "#6DB33F" },
      { component: SiRubyonrails, id: "rails", label: "Ruby on Rails", type: "CustomNode", color: "#CC0000" },
      { component: SiLaravel, id: "laravel", label: "Laravel", type: "CustomNode", color: "#FF2D20" },
    ],
  },
  {
    category: "Databases",
    icons: [
      { component: SiMysql, id: "mysql", label: "MySQL", type: "CustomNode", color: "#4479A1" },
      { component: SiPostgresql, id: "postgresql", label: "PostgreSQL", type: "CustomNode", color: "#336791" },
      { component: SiMongodb, id: "mongodb", label: "MongoDB", type: "CustomNode", color: "#47A248" },
      { component: SiRedis, id: "redis", label: "Redis", type: "CustomNode", color: "#DC382D" },
      { component: SiSqlite, id: "sqlite", label: "SQLite", type: "CustomNode", color: "#003B57" },
    ],
  },
  {
    category: "Mobile Development", 
    icons: [
      { component: SiReact, id: "reactnative", label: "React Native", type: "CustomNode", color: "#61DAFB" },
    ],
  },
  {
    category: "Game Development",
    icons: [
      { component: SiUnity, id: "unity", label: "Unity", type: "CustomNode", color: "#000000" },
    ],
  },
  {
    category: "DevOps & Tools",
    icons: [
      { component: SiDocker, id: "docker", label: "Docker", type: "CustomNode", color: "#2496ED" },
      { component: SiKubernetes, id: "kubernetes", label: "Kubernetes", type: "CustomNode", color: "#326CE5" },
      { component: SiTerraform, id: "terraform", label: "Terraform", type: "CustomNode", color: "#7B42BC" },
      { component: SiJenkins, id: "jenkins", label: "Jenkins", type: "CustomNode", color: "#D24939" },
      { component: SiGithubactions, id: "githubactions", label: "GitHub Actions", type: "CustomNode", color: "#2088FF" },
    ],
  },
  {
    category: "Cloud Platforms",
    icons: [
      { component: SiHeroku, id: "heroku", label: "Heroku", type: "CustomNode", color: "#430098" },
      { component: SiVercel, id: "vercel", label: "Vercel", type: "CustomNode", color: "#000000" },
      { component: SiNetlify, id: "netlify", label: "Netlify", type: "CustomNode", color: "#00C7B7" },
      { component: SiDigitalocean, id: "digitalocean", label: "DigitalOcean", type: "CustomNode", color: "#0080FF" },
    ],
  },
  {
    category: "Testing",
    icons: [
      { component: SiJest, id: "jest", label: "Jest", type: "CustomNode", color: "#C21325" },
      { component: SiCypress, id: "cypress", label: "Cypress", type: "CustomNode", color: "#17202C" },
      { component: SiSelenium, id: "selenium", label: "Selenium", type: "CustomNode", color: "#43B02A" },
      { component: SiPytest, id: "pytest", label: "Pytest", type: "CustomNode", color: "#0A9EDC" },
    ],
  },
  {
    category: "Specialized",
    icons: [
      { component: SiGraphql, id: "graphql", label: "GraphQL", type: "CustomNode", color: "#E10098" },
    ],
  },
];

export default languageIcons;