import {
  // ====== LANGUAGES ======
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiC,
  SiPhp,
  SiRuby,
  SiGo,
  SiRust,
  SiSwift,
  SiKotlin,
  SiLua,
  SiDart,
  SiElixir,
  SiErlang,
  SiHaskell,
  SiScala,
  SiClojure,
  SiZig,
  SiOcaml,
  SiPerl,
  SiR,
  SiJulia,
  SiSolidity,

  // ====== WEB TECHNOLOGIES ======
  SiHtml5,
  SiCss3,
  SiSass,
  SiLess,
  SiStylus,
  SiWebassembly,

  // ====== FRONTEND FRAMEWORKS ======
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiSolid,
  SiPreact,
  SiQwik,
  SiLit,
  SiAlpinedotjs,
  SiHtmx,

  // ====== META FRAMEWORKS ======
  SiNextdotjs,
  SiNuxtdotjs,
  SiGatsby,
  SiAstro,
  SiRemix,

  // ====== CSS & UI FRAMEWORKS ======
  SiTailwindcss,
  SiBootstrap,
  SiBulma,
  SiChakraui,
  SiMantine,
  SiAntdesign,
  SiMui,
  SiRadixui,
  SiHeadlessui,
  SiDaisyui,
  SiShadcnui,
  SiStyledcomponents,
  SiVuetify,
  SiQuasar,
  SiPrimevue,

  // ====== NODE.JS FRAMEWORKS ======
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFastify,
  SiHono,
  SiAdonisjs,
  SiKoa,

  // ====== PYTHON FRAMEWORKS ======
  SiDjango,
  SiFlask,
  SiFastapi,

  // ====== OTHER BACKEND FRAMEWORKS ======
  SiSpringboot,
  SiRubyonrails,
  SiLaravel,
  SiSymfony,
  SiPhoenixframework,
  SiGin,
  SiActix,

  // ====== RUNTIMES ======
  SiBun,
  SiDeno,

  // ====== ORMs & DATABASE TOOLS ======
  SiPrisma,
  SiDrizzle,
  SiSequelize,
  SiTypeorm,
  SiMongoose,

  // ====== SQL DATABASES ======
  SiPostgresql,
  SiMysql,
  SiMariadb,
  SiSqlite,
  SiOracle,

  // ====== NoSQL DATABASES ======
  SiMongodb,
  SiRedis,
  SiApachecassandra,
  SiCouchbase,
  SiNeo4J,
  SiArangodb,

  // ====== ANALYTICS & TIME SERIES ======
  SiInfluxdb,
  SiTimescale,
  SiClickhouse,
  SiDuckdb,

  // ====== DISTRIBUTED & NewSQL ======
  SiCockroachlabs,
  SiPlanetscale,
  SiSurrealdb,

  // ====== BaaS & DATABASE PLATFORMS ======
  SiSupabase,
  SiFirebase,
  SiAppwrite,
  SiTurso,
  SiUpstash,
  SiFauna,

  // ====== BUILD TOOLS & BUNDLERS ======
  SiVite,
  SiWebpack,
  SiEsbuild,
  SiRollupdotjs,
  SiSwc,
  SiTurborepo,
  SiBabel,

  // ====== PACKAGE MANAGERS ======
  SiNpm,
  SiYarn,
  SiPnpm,

  // ====== MONOREPO TOOLS ======
  SiNx,
  SiLerna,

  // ====== CODE QUALITY ======
  SiPrettier,
  SiEslint,
  SiBiome,
  SiSonarqube,
  SiCommitlint,

  // ====== VERSION CONTROL ======
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiGitea,

  // ====== CI/CD ======
  SiGithubactions,
  SiJenkins,
  SiCircleci,
  SiTravisci,
  SiDrone,
  SiBuildkite,

  // ====== CLOUD PROVIDERS ======
  SiAmazonwebservices,
  SiGooglecloud,
  SiDigitalocean,
  SiVultr,
  SiHetzner,
  SiOvh,
  SiScaleway,
  SiAlibabacloud,

  // ====== AWS SERVICES ======
  SiAmazonec2,
  SiAmazons3,
  SiAmazonrds,
  SiAwslambda,
  SiAmazondynamodb,
  SiAmazonecs,
  SiAmazoneks,
  SiAmazonsqs,
  SiAwsamplify,

  // ====== HOSTING & DEPLOYMENT ======
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiRailway,
  SiRender,
  SiFlydotio,
  SiCloudflare,
  SiCloudflarepages,
  SiGithubpages,

  // ====== CONTAINERIZATION ======
  SiDocker,
  SiPodman,
  SiContainerd,

  // ====== CONTAINER ORCHESTRATION ======
  SiKubernetes,
  SiHelm,
  SiRancher,
  SiK3S,
  SiPortainer,
  SiArgo,

  // ====== INFRASTRUCTURE AS CODE ======
  SiTerraform,
  SiPulumi,
  SiAnsible,
  SiVagrant,
  SiPacker,

  // ====== WEB SERVERS & PROXIES ======
  SiNginx,
  SiApache,
  SiCaddy,
  SiTraefikproxy,

  // ====== SERVICE MESH ======
  SiIstio,
  SiEnvoyproxy,
  SiCilium,
  SiConsul,
  SiLinkerd,

  // ====== SECRETS MANAGEMENT ======
  SiVault,

  // ====== MESSAGE QUEUES ======
  SiApachekafka,
  SiRabbitmq,
  SiApachepulsar,
  SiNatsdotio,
  SiEclipsemosquitto,

  // ====== SEARCH ENGINES ======
  SiElasticsearch,
  SiOpensearch,
  SiAlgolia,
  SiMeilisearch,

  // ====== MONITORING ======
  SiGrafana,
  SiPrometheus,
  SiDatadog,
  SiNewrelic,

  // ====== ERROR TRACKING & APM ======
  SiSentry,
  SiOpentelemetry,
  SiJaeger,
  SiPagerduty,

  // ====== LOGGING ======
  SiKibana,
  SiLogstash,
  SiFluentbit,

  // ====== TESTING - JAVASCRIPT ======
  SiJest,
  SiVitest,
  SiMocha,
  SiTestinglibrary,

  // ====== TESTING - E2E ======
  SiCypress,
  SiSelenium,
  SiPuppeteer,

  // ====== TESTING - COMPONENTS ======
  SiStorybook,
  SiChromatic,

  // ====== TESTING - API & LOAD ======
  SiPostman,
  SiInsomnia,
  SiHoppscotch,
  SiBruno,
  SiK6,

  // ====== TESTING - PYTHON ======
  SiPytest,

  // ====== API TECHNOLOGIES ======
  SiGraphql,
  SiApollographql,
  SiTrpc,
  SiSwagger,
  SiHasura,

  // ====== VALIDATION & HTTP ======
  SiZod,
  SiAxios,
  SiJsonwebtokens,

  // ====== REAL-TIME COMMUNICATION ======
  SiSocketdotio,
  SiWebrtc,
  SiPusher,
  SiTwilio,

  // ====== AUTHENTICATION ======
  SiAuth0,
  SiClerk,
  SiLucia,
  SiOkta,
  SiKeycloak,

  // ====== CMS - HEADLESS ======
  SiStrapi,
  SiSanity,
  SiContentful,
  SiDirectus,
  SiPayloadcms,
  SiGhost,

  // ====== CMS - TRADITIONAL ======
  SiWordpress,
  SiDrupal,

  // ====== E-COMMERCE ======
  SiShopify,
  SiWoocommerce,
  SiMagento,

  // ====== PAYMENTS ======
  SiStripe,
  SiPaypal,
  SiSquare,
  SiMercadopago,

  // ====== MOBILE & CROSS-PLATFORM ======
  SiFlutter,
  SiIonic,
  SiCapacitor,
  SiExpo,

  // ====== DESKTOP APPS ======
  SiTauri,
  SiElectron,
  SiWails,

  // ====== GAME DEVELOPMENT ======
  SiUnity,
  SiUnrealengine,
  SiGodotengine,
  SiThreedotjs,
  SiBabylondotjs,

  // ====== ML FRAMEWORKS ======
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiOpencv,

  // ====== DATA SCIENCE ======
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiGooglecolab,

  // ====== LLMs & AI ======
  SiOpenai,
  SiAnthropic,
  SiHuggingface,
  SiOllama,
  SiLangchain,

  // ====== MLOps & DATA ENGINEERING ======
  SiMlflow,
  SiDatabricks,
  SiApachespark,
  SiDbt,
  SiAirbyte,
  SiMinio,
  SiSnowflake,

  // ====== PRODUCTIVITY & COLLABORATION ======
  SiFigma,
  SiNotion,
  SiMiro,
  SiExcalidraw,

  // ====== COMMUNICATION ======
  SiSlack,
  SiDiscord,

  // ====== PROJECT MANAGEMENT ======
  SiLinear,
  SiJira,
  SiAsana,
  SiTrello,
  SiClickup,
  SiConfluence,

  // ====== DOCUMENTATION ======
  SiDocusaurus,
  SiGitbook,
  SiReadthedocs,
  SiMdx,

  // ====== IDEs & EDITORS ======
  SiNeovim,
  SiVim,
  SiIntellijidea,
  SiWebstorm,
  SiPycharm,
  SiAndroidstudio,

  // ====== KNOWLEDGE MANAGEMENT ======
  SiObsidian,
  SiLogseq,

  // ====== DEVELOPER TOOLS ======
  SiGitpod,
  SiDependabot,
  SiRenovate,

  // ====== SECURITY ======
  SiSnyk,
  SiTrivy,
  SiBitwarden,
  SiLetsencrypt,
  SiBurpsuite,

} from 'react-icons/si';

import { FaJava, FaServer, FaDatabase, FaCloud, FaLock, FaRobot, FaMobile, FaCogs, FaNetworkWired } from "react-icons/fa";
import { MdWeb, MdStorage, MdApi } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { DiDotnet } from "react-icons/di";

const languageIcons = [
  // ============================================
  // STACKS (Generic Architecture Components)
  // ============================================
  {
    category: "Stacks",
    icons: [
      { component: MdWeb, id: "frontend", label: "Frontend", type: "CustomNode", color: "#61DAFB" },
      { component: FaServer, id: "backend", label: "Backend", type: "CustomNode", color: "#339933" },
      { component: FaDatabase, id: "database", label: "Database", type: "CustomNode", color: "#336791" },
      { component: FaCloud, id: "cloud", label: "Cloud", type: "CustomNode", color: "#FF9900" },
      { component: MdApi, id: "api", label: "API", type: "CustomNode", color: "#6C63FF" },
      { component: FaCogs, id: "microservice", label: "Microservice", type: "CustomNode", color: "#17A2B8" },
      { component: FaNetworkWired, id: "gateway", label: "Gateway", type: "CustomNode", color: "#7952B3" },
      { component: MdStorage, id: "cache", label: "Cache", type: "CustomNode", color: "#DC382D" },
      { component: FaRobot, id: "ai-ml", label: "AI/ML", type: "CustomNode", color: "#FF6F00" },
      { component: FaMobile, id: "mobile", label: "Mobile", type: "CustomNode", color: "#3DDC84" },
      { component: FaLock, id: "auth", label: "Auth", type: "CustomNode", color: "#EB5424" },
      { component: BiTestTube, id: "testing", label: "Testing", type: "CustomNode", color: "#99425B" },
    ],
  },

  // ============================================
  // PROGRAMMING LANGUAGES
  // ============================================
  {
    category: "Popular Languages",
    icons: [
      { component: SiJavascript, id: "javascript", label: "JavaScript", type: "CustomNode", color: "#F7DF1E" },
      { component: SiTypescript, id: "typescript", label: "TypeScript", type: "CustomNode", color: "#3178C6" },
      { component: SiPython, id: "python", label: "Python", type: "CustomNode", color: "#3776AB" },
      { component: FaJava, id: "java", label: "Java", type: "CustomNode", color: "#ED8B00" },
      { component: SiCplusplus, id: "cpp", label: "C++", type: "CustomNode", color: "#00599C" },
      { component: SiC, id: "c", label: "C", type: "CustomNode", color: "#A8B9CC" },
      { component: DiDotnet, id: "dotnet", label: ".NET/C#", type: "CustomNode", color: "#512BD4" },
      { component: SiPhp, id: "php", label: "PHP", type: "CustomNode", color: "#777BB4" },
      { component: SiRuby, id: "ruby", label: "Ruby", type: "CustomNode", color: "#CC342D" },
      { component: SiGo, id: "go", label: "Go", type: "CustomNode", color: "#00ADD8" },
      { component: SiRust, id: "rust", label: "Rust", type: "CustomNode", color: "#000000" },
      { component: SiSwift, id: "swift", label: "Swift", type: "CustomNode", color: "#FA7343" },
      { component: SiKotlin, id: "kotlin", label: "Kotlin", type: "CustomNode", color: "#7F52FF" },
      { component: SiDart, id: "dart", label: "Dart", type: "CustomNode", color: "#0175C2" },
    ],
  },
  {
    category: "Functional & Modern Languages",
    icons: [
      { component: SiElixir, id: "elixir", label: "Elixir", type: "CustomNode", color: "#4B275F" },
      { component: SiErlang, id: "erlang", label: "Erlang", type: "CustomNode", color: "#A90533" },
      { component: SiHaskell, id: "haskell", label: "Haskell", type: "CustomNode", color: "#5D4F85" },
      { component: SiScala, id: "scala", label: "Scala", type: "CustomNode", color: "#DC322F" },
      { component: SiClojure, id: "clojure", label: "Clojure", type: "CustomNode", color: "#5881D8" },
      { component: SiZig, id: "zig", label: "Zig", type: "CustomNode", color: "#F7A41D" },
      { component: SiOcaml, id: "ocaml", label: "OCaml", type: "CustomNode", color: "#EC6813" },
      { component: SiLua, id: "lua", label: "Lua", type: "CustomNode", color: "#2C2D72" },
    ],
  },
  {
    category: "Data Science Languages",
    icons: [
      { component: SiR, id: "r", label: "R", type: "CustomNode", color: "#276DC3" },
      { component: SiJulia, id: "julia", label: "Julia", type: "CustomNode", color: "#9558B2" },
      { component: SiPerl, id: "perl", label: "Perl", type: "CustomNode", color: "#39457E" },
    ],
  },
  {
    category: "Blockchain",
    icons: [
      { component: SiSolidity, id: "solidity", label: "Solidity", type: "CustomNode", color: "#363636" },
    ],
  },

  // ============================================
  // WEB TECHNOLOGIES
  // ============================================
  {
    category: "Web Technologies",
    icons: [
      { component: SiHtml5, id: "html5", label: "HTML5", type: "CustomNode", color: "#E34F26" },
      { component: SiCss3, id: "css3", label: "CSS3", type: "CustomNode", color: "#1572B6" },
      { component: SiWebassembly, id: "webassembly", label: "WebAssembly", type: "CustomNode", color: "#654FF0" },
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

  // ============================================
  // FRONTEND FRAMEWORKS
  // ============================================
  {
    category: "Frontend Frameworks",
    icons: [
      { component: SiReact, id: "react", label: "React", type: "CustomNode", color: "#61DAFB" },
      { component: SiVuedotjs, id: "vue", label: "Vue.js", type: "CustomNode", color: "#4FC08D" },
      { component: SiAngular, id: "angular", label: "Angular", type: "CustomNode", color: "#DD0031" },
      { component: SiSvelte, id: "svelte", label: "Svelte", type: "CustomNode", color: "#FF3E00" },
      { component: SiSolid, id: "solidjs", label: "Solid.js", type: "CustomNode", color: "#2C4F7C" },
      { component: SiPreact, id: "preact", label: "Preact", type: "CustomNode", color: "#673AB8" },
      { component: SiQwik, id: "qwik", label: "Qwik", type: "CustomNode", color: "#18B6F6" },
      { component: SiLit, id: "lit", label: "Lit", type: "CustomNode", color: "#325CFF" },
      { component: SiAlpinedotjs, id: "alpinejs", label: "Alpine.js", type: "CustomNode", color: "#8BC0D0" },
      { component: SiHtmx, id: "htmx", label: "HTMX", type: "CustomNode", color: "#3366CC" },
    ],
  },
  {
    category: "Meta Frameworks",
    icons: [
      { component: SiNextdotjs, id: "nextjs", label: "Next.js", type: "CustomNode", color: "#000000" },
      { component: SiNuxtdotjs, id: "nuxtjs", label: "Nuxt.js", type: "CustomNode", color: "#00DC82" },
      { component: SiGatsby, id: "gatsby", label: "Gatsby", type: "CustomNode", color: "#663399" },
      { component: SiAstro, id: "astro", label: "Astro", type: "CustomNode", color: "#FF5D01" },
      { component: SiRemix, id: "remix", label: "Remix", type: "CustomNode", color: "#000000" },
    ],
  },

  // ============================================
  // CSS FRAMEWORKS & UI LIBRARIES
  // ============================================
  {
    category: "CSS Frameworks",
    icons: [
      { component: SiTailwindcss, id: "tailwind", label: "Tailwind CSS", type: "CustomNode", color: "#38BDF8" },
      { component: SiBootstrap, id: "bootstrap", label: "Bootstrap", type: "CustomNode", color: "#7952B3" },
      { component: SiBulma, id: "bulma", label: "Bulma", type: "CustomNode", color: "#00D1B2" },
    ],
  },
  {
    category: "UI Component Libraries",
    icons: [
      { component: SiChakraui, id: "chakraui", label: "Chakra UI", type: "CustomNode", color: "#319795" },
      { component: SiMantine, id: "mantine", label: "Mantine", type: "CustomNode", color: "#339AF0" },
      { component: SiAntdesign, id: "antdesign", label: "Ant Design", type: "CustomNode", color: "#1677FF" },
      { component: SiMui, id: "mui", label: "MUI", type: "CustomNode", color: "#007FFF" },
      { component: SiRadixui, id: "radixui", label: "Radix UI", type: "CustomNode", color: "#161618" },
      { component: SiHeadlessui, id: "headlessui", label: "Headless UI", type: "CustomNode", color: "#66E3FF" },
      { component: SiDaisyui, id: "daisyui", label: "DaisyUI", type: "CustomNode", color: "#5A0EF8" },
      { component: SiShadcnui, id: "shadcnui", label: "shadcn/ui", type: "CustomNode", color: "#000000" },
      { component: SiVuetify, id: "vuetify", label: "Vuetify", type: "CustomNode", color: "#1867C0" },
      { component: SiQuasar, id: "quasar", label: "Quasar", type: "CustomNode", color: "#1976D2" },
      { component: SiPrimevue, id: "primevue", label: "PrimeVue", type: "CustomNode", color: "#41B883" },
      { component: SiStyledcomponents, id: "styledcomponents", label: "Styled Components", type: "CustomNode", color: "#DB7093" },
    ],
  },

  // ============================================
  // BACKEND FRAMEWORKS
  // ============================================
  {
    category: "Node.js Frameworks",
    icons: [
      { component: SiNodedotjs, id: "nodejs", label: "Node.js", type: "CustomNode", color: "#339933" },
      { component: SiExpress, id: "express", label: "Express", type: "CustomNode", color: "#000000" },
      { component: SiNestjs, id: "nestjs", label: "NestJS", type: "CustomNode", color: "#E0234E" },
      { component: SiFastify, id: "fastify", label: "Fastify", type: "CustomNode", color: "#000000" },
      { component: SiHono, id: "hono", label: "Hono", type: "CustomNode", color: "#E36002" },
      { component: SiAdonisjs, id: "adonisjs", label: "AdonisJS", type: "CustomNode", color: "#5A45FF" },
      { component: SiKoa, id: "koa", label: "Koa", type: "CustomNode", color: "#33333D" },
    ],
  },
  {
    category: "Python Frameworks",
    icons: [
      { component: SiDjango, id: "django", label: "Django", type: "CustomNode", color: "#092E20" },
      { component: SiFlask, id: "flask", label: "Flask", type: "CustomNode", color: "#000000" },
      { component: SiFastapi, id: "fastapi", label: "FastAPI", type: "CustomNode", color: "#009688" },
    ],
  },
  {
    category: "Other Backend Frameworks",
    icons: [
      { component: SiSpringboot, id: "springboot", label: "Spring Boot", type: "CustomNode", color: "#6DB33F" },
      { component: SiRubyonrails, id: "rails", label: "Ruby on Rails", type: "CustomNode", color: "#CC0000" },
      { component: SiLaravel, id: "laravel", label: "Laravel", type: "CustomNode", color: "#FF2D20" },
      { component: SiSymfony, id: "symfony", label: "Symfony", type: "CustomNode", color: "#000000" },
      { component: SiPhoenixframework, id: "phoenix", label: "Phoenix", type: "CustomNode", color: "#FD4F00" },
      { component: SiGin, id: "gin", label: "Gin", type: "CustomNode", color: "#00ADD8" },
      { component: SiActix, id: "actix", label: "Actix", type: "CustomNode", color: "#000000" },
    ],
  },

  // ============================================
  // JAVASCRIPT RUNTIMES
  // ============================================
  {
    category: "JavaScript Runtimes",
    icons: [
      { component: SiBun, id: "bun", label: "Bun", type: "CustomNode", color: "#FBF0DF" },
      { component: SiDeno, id: "deno", label: "Deno", type: "CustomNode", color: "#000000" },
    ],
  },

  // ============================================
  // ORMs & DATABASE TOOLS
  // ============================================
  {
    category: "ORMs & Query Builders",
    icons: [
      { component: SiPrisma, id: "prisma", label: "Prisma", type: "CustomNode", color: "#2D3748" },
      { component: SiDrizzle, id: "drizzle", label: "Drizzle", type: "CustomNode", color: "#C5F74F" },
      { component: SiSequelize, id: "sequelize", label: "Sequelize", type: "CustomNode", color: "#52B0E7" },
      { component: SiTypeorm, id: "typeorm", label: "TypeORM", type: "CustomNode", color: "#FE0803" },
      { component: SiMongoose, id: "mongoose", label: "Mongoose", type: "CustomNode", color: "#880000" },
    ],
  },

  // ============================================
  // DATABASES
  // ============================================
  {
    category: "SQL Databases",
    icons: [
      { component: SiPostgresql, id: "postgresql", label: "PostgreSQL", type: "CustomNode", color: "#336791" },
      { component: SiMysql, id: "mysql", label: "MySQL", type: "CustomNode", color: "#4479A1" },
      { component: SiMariadb, id: "mariadb", label: "MariaDB", type: "CustomNode", color: "#003545" },
      { component: SiSqlite, id: "sqlite", label: "SQLite", type: "CustomNode", color: "#003B57" },
      { component: SiOracle, id: "oracle", label: "Oracle", type: "CustomNode", color: "#F80000" },
    ],
  },
  {
    category: "NoSQL Databases",
    icons: [
      { component: SiMongodb, id: "mongodb", label: "MongoDB", type: "CustomNode", color: "#47A248" },
      { component: SiRedis, id: "redis", label: "Redis", type: "CustomNode", color: "#DC382D" },
      { component: SiApachecassandra, id: "cassandra", label: "Cassandra", type: "CustomNode", color: "#1287B1" },
      { component: SiCouchbase, id: "couchbase", label: "Couchbase", type: "CustomNode", color: "#EA2328" },
      { component: SiNeo4J, id: "neo4j", label: "Neo4j", type: "CustomNode", color: "#008CC1" },
      { component: SiArangodb, id: "arangodb", label: "ArangoDB", type: "CustomNode", color: "#DDE072" },
    ],
  },
  {
    category: "Time Series & Analytics",
    icons: [
      { component: SiInfluxdb, id: "influxdb", label: "InfluxDB", type: "CustomNode", color: "#22ADF6" },
      { component: SiTimescale, id: "timescale", label: "TimescaleDB", type: "CustomNode", color: "#FDB515" },
      { component: SiClickhouse, id: "clickhouse", label: "ClickHouse", type: "CustomNode", color: "#FFCC01" },
      { component: SiDuckdb, id: "duckdb", label: "DuckDB", type: "CustomNode", color: "#FFF000" },
    ],
  },
  {
    category: "NewSQL & Distributed",
    icons: [
      { component: SiCockroachlabs, id: "cockroachdb", label: "CockroachDB", type: "CustomNode", color: "#6933FF" },
      { component: SiPlanetscale, id: "planetscale", label: "PlanetScale", type: "CustomNode", color: "#000000" },
      { component: SiSurrealdb, id: "surrealdb", label: "SurrealDB", type: "CustomNode", color: "#FF00A0" },
    ],
  },

  // ============================================
  // BAAS & DATABASE PLATFORMS
  // ============================================
  {
    category: "BaaS & Database Platforms",
    icons: [
      { component: SiSupabase, id: "supabase", label: "Supabase", type: "CustomNode", color: "#3ECF8E" },
      { component: SiFirebase, id: "firebase", label: "Firebase", type: "CustomNode", color: "#FFCA28" },
      { component: SiAppwrite, id: "appwrite", label: "Appwrite", type: "CustomNode", color: "#FD366E" },
      { component: SiTurso, id: "turso", label: "Turso", type: "CustomNode", color: "#4FF8D2" },
      { component: SiUpstash, id: "upstash", label: "Upstash", type: "CustomNode", color: "#00E9A3" },
      { component: SiFauna, id: "fauna", label: "Fauna", type: "CustomNode", color: "#3A1AB6" },
    ],
  },

  // ============================================
  // BUILD TOOLS & BUNDLERS
  // ============================================
  {
    category: "Build Tools & Bundlers",
    icons: [
      { component: SiVite, id: "vite", label: "Vite", type: "CustomNode", color: "#646CFF" },
      { component: SiWebpack, id: "webpack", label: "Webpack", type: "CustomNode", color: "#8DD6F9" },
      { component: SiEsbuild, id: "esbuild", label: "esbuild", type: "CustomNode", color: "#FFCF00" },
      { component: SiRollupdotjs, id: "rollup", label: "Rollup", type: "CustomNode", color: "#EC4A3F" },
      { component: SiSwc, id: "swc", label: "SWC", type: "CustomNode", color: "#F8C457" },
      { component: SiTurborepo, id: "turborepo", label: "Turborepo", type: "CustomNode", color: "#EF4444" },
      { component: SiBabel, id: "babel", label: "Babel", type: "CustomNode", color: "#F9DC3E" },
    ],
  },

  // ============================================
  // PACKAGE MANAGERS & MONOREPO
  // ============================================
  {
    category: "Package Managers",
    icons: [
      { component: SiNpm, id: "npm", label: "npm", type: "CustomNode", color: "#CB3837" },
      { component: SiYarn, id: "yarn", label: "Yarn", type: "CustomNode", color: "#2C8EBB" },
      { component: SiPnpm, id: "pnpm", label: "pnpm", type: "CustomNode", color: "#F69220" },
    ],
  },
  {
    category: "Monorepo Tools",
    icons: [
      { component: SiNx, id: "nx", label: "Nx", type: "CustomNode", color: "#143055" },
      { component: SiLerna, id: "lerna", label: "Lerna", type: "CustomNode", color: "#9333EA" },
    ],
  },

  // ============================================
  // CODE QUALITY
  // ============================================
  {
    category: "Code Quality & Formatting",
    icons: [
      { component: SiPrettier, id: "prettier", label: "Prettier", type: "CustomNode", color: "#F7B93E" },
      { component: SiEslint, id: "eslint", label: "ESLint", type: "CustomNode", color: "#4B32C3" },
      { component: SiBiome, id: "biome", label: "Biome", type: "CustomNode", color: "#60A5FA" },
      { component: SiSonarqube, id: "sonarqube", label: "SonarQube", type: "CustomNode", color: "#4E9BCD" },
      { component: SiCommitlint, id: "commitlint", label: "commitlint", type: "CustomNode", color: "#000000" },
    ],
  },

  // ============================================
  // VERSION CONTROL
  // ============================================
  {
    category: "Version Control",
    icons: [
      { component: SiGit, id: "git", label: "Git", type: "CustomNode", color: "#F05032" },
      { component: SiGithub, id: "github", label: "GitHub", type: "CustomNode", color: "#181717" },
      { component: SiGitlab, id: "gitlab", label: "GitLab", type: "CustomNode", color: "#FC6D26" },
      { component: SiBitbucket, id: "bitbucket", label: "Bitbucket", type: "CustomNode", color: "#0052CC" },
      { component: SiGitea, id: "gitea", label: "Gitea", type: "CustomNode", color: "#609926" },
    ],
  },

  // ============================================
  // CI/CD
  // ============================================
  {
    category: "CI/CD",
    icons: [
      { component: SiGithubactions, id: "githubactions", label: "GitHub Actions", type: "CustomNode", color: "#2088FF" },
      { component: SiJenkins, id: "jenkins", label: "Jenkins", type: "CustomNode", color: "#D24939" },
      { component: SiCircleci, id: "circleci", label: "CircleCI", type: "CustomNode", color: "#343434" },
      { component: SiTravisci, id: "travisci", label: "Travis CI", type: "CustomNode", color: "#3EAAAF" },
      { component: SiDrone, id: "drone", label: "Drone", type: "CustomNode", color: "#212121" },
      { component: SiBuildkite, id: "buildkite", label: "Buildkite", type: "CustomNode", color: "#14CC80" },
    ],
  },

  // ============================================
  // CLOUD PROVIDERS
  // ============================================
  {
    category: "Major Cloud Providers",
    icons: [
      { component: SiAmazonwebservices, id: "aws", label: "AWS", type: "CustomNode", color: "#FF9900" },
      { component: SiGooglecloud, id: "googlecloud", label: "Google Cloud", type: "CustomNode", color: "#4285F4" },
      { component: VscAzure, id: "azure", label: "Azure", type: "CustomNode", color: "#0078D4" },
    ],
  },
  {
    category: "Alternative Cloud Providers",
    icons: [
      { component: SiDigitalocean, id: "digitalocean", label: "DigitalOcean", type: "CustomNode", color: "#0080FF" },
      { component: SiVultr, id: "vultr", label: "Vultr", type: "CustomNode", color: "#007BFC" },
      { component: SiHetzner, id: "hetzner", label: "Hetzner", type: "CustomNode", color: "#D50C2D" },
      { component: SiOvh, id: "ovh", label: "OVH", type: "CustomNode", color: "#123F6D" },
      { component: SiScaleway, id: "scaleway", label: "Scaleway", type: "CustomNode", color: "#4F0599" },
      { component: SiAlibabacloud, id: "alibabacloud", label: "Alibaba Cloud", type: "CustomNode", color: "#FF6A00" },
    ],
  },
  {
    category: "AWS Services",
    icons: [
      { component: SiAmazonec2, id: "ec2", label: "EC2", type: "CustomNode", color: "#FF9900" },
      { component: SiAmazons3, id: "s3", label: "S3", type: "CustomNode", color: "#569A31" },
      { component: SiAmazonrds, id: "rds", label: "RDS", type: "CustomNode", color: "#527FFF" },
      { component: SiAwslambda, id: "lambda", label: "Lambda", type: "CustomNode", color: "#FF9900" },
      { component: SiAmazondynamodb, id: "dynamodb", label: "DynamoDB", type: "CustomNode", color: "#4053D6" },
      { component: SiAmazonecs, id: "ecs", label: "ECS", type: "CustomNode", color: "#FF9900" },
      { component: SiAmazoneks, id: "eks", label: "EKS", type: "CustomNode", color: "#FF9900" },
      { component: SiAmazonsqs, id: "sqs", label: "SQS", type: "CustomNode", color: "#FF4F8B" },
      { component: SiAwsamplify, id: "amplify", label: "Amplify", type: "CustomNode", color: "#FF9900" },
    ],
  },

  // ============================================
  // HOSTING & DEPLOYMENT
  // ============================================
  {
    category: "Hosting & Deployment",
    icons: [
      { component: SiVercel, id: "vercel", label: "Vercel", type: "CustomNode", color: "#000000" },
      { component: SiNetlify, id: "netlify", label: "Netlify", type: "CustomNode", color: "#00C7B7" },
      { component: SiHeroku, id: "heroku", label: "Heroku", type: "CustomNode", color: "#430098" },
      { component: SiRailway, id: "railway", label: "Railway", type: "CustomNode", color: "#0B0D0E" },
      { component: SiRender, id: "render", label: "Render", type: "CustomNode", color: "#46E3B7" },
      { component: SiFlydotio, id: "flyio", label: "Fly.io", type: "CustomNode", color: "#7B3BE2" },
      { component: SiCloudflare, id: "cloudflare", label: "Cloudflare", type: "CustomNode", color: "#F38020" },
      { component: SiCloudflarepages, id: "cloudflarepages", label: "Cloudflare Pages", type: "CustomNode", color: "#F38020" },
      { component: SiGithubpages, id: "githubpages", label: "GitHub Pages", type: "CustomNode", color: "#222222" },
    ],
  },

  // ============================================
  // CONTAINERIZATION
  // ============================================
  {
    category: "Containerization",
    icons: [
      { component: SiDocker, id: "docker", label: "Docker", type: "CustomNode", color: "#2496ED" },
      { component: SiPodman, id: "podman", label: "Podman", type: "CustomNode", color: "#892CA0" },
      { component: SiContainerd, id: "containerd", label: "containerd", type: "CustomNode", color: "#575757" },
    ],
  },
  {
    category: "Container Orchestration",
    icons: [
      { component: SiKubernetes, id: "kubernetes", label: "Kubernetes", type: "CustomNode", color: "#326CE5" },
      { component: SiHelm, id: "helm", label: "Helm", type: "CustomNode", color: "#0F1689" },
      { component: SiRancher, id: "rancher", label: "Rancher", type: "CustomNode", color: "#0075A8" },
      { component: SiK3S, id: "k3s", label: "K3s", type: "CustomNode", color: "#FFC61C" },
      { component: SiPortainer, id: "portainer", label: "Portainer", type: "CustomNode", color: "#13BEF9" },
      { component: SiArgo, id: "argo", label: "Argo", type: "CustomNode", color: "#EF7B4D" },
    ],
  },

  // ============================================
  // INFRASTRUCTURE AS CODE
  // ============================================
  {
    category: "Infrastructure as Code",
    icons: [
      { component: SiTerraform, id: "terraform", label: "Terraform", type: "CustomNode", color: "#7B42BC" },
      { component: SiPulumi, id: "pulumi", label: "Pulumi", type: "CustomNode", color: "#8A3391" },
      { component: SiAnsible, id: "ansible", label: "Ansible", type: "CustomNode", color: "#EE0000" },
      { component: SiVagrant, id: "vagrant", label: "Vagrant", type: "CustomNode", color: "#1868F2" },
      { component: SiPacker, id: "packer", label: "Packer", type: "CustomNode", color: "#02A8EF" },
    ],
  },

  // ============================================
  // NETWORKING & SERVICE MESH
  // ============================================
  {
    category: "Web Servers & Proxies",
    icons: [
      { component: SiNginx, id: "nginx", label: "Nginx", type: "CustomNode", color: "#009639" },
      { component: SiApache, id: "apache", label: "Apache", type: "CustomNode", color: "#D22128" },
      { component: SiCaddy, id: "caddy", label: "Caddy", type: "CustomNode", color: "#1F88C0" },
      { component: SiTraefikproxy, id: "traefik", label: "Traefik", type: "CustomNode", color: "#24A1C1" },
    ],
  },
  {
    category: "Service Mesh",
    icons: [
      { component: SiIstio, id: "istio", label: "Istio", type: "CustomNode", color: "#466BB0" },
      { component: SiEnvoyproxy, id: "envoy", label: "Envoy", type: "CustomNode", color: "#AC6199" },
      { component: SiCilium, id: "cilium", label: "Cilium", type: "CustomNode", color: "#F8C517" },
      { component: SiConsul, id: "consul", label: "Consul", type: "CustomNode", color: "#F24C53" },
      { component: SiLinkerd, id: "linkerd", label: "Linkerd", type: "CustomNode", color: "#2BEDA7" },
    ],
  },
  {
    category: "Secrets Management",
    icons: [
      { component: SiVault, id: "vault", label: "Vault", type: "CustomNode", color: "#FFEC6E" },
    ],
  },

  // ============================================
  // MESSAGE QUEUES & STREAMING
  // ============================================
  {
    category: "Message Queues & Streaming",
    icons: [
      { component: SiApachekafka, id: "kafka", label: "Kafka", type: "CustomNode", color: "#231F20" },
      { component: SiRabbitmq, id: "rabbitmq", label: "RabbitMQ", type: "CustomNode", color: "#FF6600" },
      { component: SiApachepulsar, id: "pulsar", label: "Pulsar", type: "CustomNode", color: "#188FFF" },
      { component: SiNatsdotio, id: "nats", label: "NATS", type: "CustomNode", color: "#27AAE1" },
      { component: SiEclipsemosquitto, id: "mosquitto", label: "Mosquitto", type: "CustomNode", color: "#3C5280" },
    ],
  },

  // ============================================
  // SEARCH ENGINES
  // ============================================
  {
    category: "Search Engines",
    icons: [
      { component: SiElasticsearch, id: "elasticsearch", label: "Elasticsearch", type: "CustomNode", color: "#005571" },
      { component: SiOpensearch, id: "opensearch", label: "OpenSearch", type: "CustomNode", color: "#005EB8" },
      { component: SiAlgolia, id: "algolia", label: "Algolia", type: "CustomNode", color: "#003DFF" },
      { component: SiMeilisearch, id: "meilisearch", label: "Meilisearch", type: "CustomNode", color: "#FF5CAA" },
    ],
  },

  // ============================================
  // MONITORING & OBSERVABILITY
  // ============================================
  {
    category: "Monitoring & Metrics",
    icons: [
      { component: SiGrafana, id: "grafana", label: "Grafana", type: "CustomNode", color: "#F46800" },
      { component: SiPrometheus, id: "prometheus", label: "Prometheus", type: "CustomNode", color: "#E6522C" },
      { component: SiDatadog, id: "datadog", label: "Datadog", type: "CustomNode", color: "#632CA6" },
      { component: SiNewrelic, id: "newrelic", label: "New Relic", type: "CustomNode", color: "#1CE783" },
    ],
  },
  {
    category: "Error Tracking & APM",
    icons: [
      { component: SiSentry, id: "sentry", label: "Sentry", type: "CustomNode", color: "#362D59" },
      { component: SiOpentelemetry, id: "opentelemetry", label: "OpenTelemetry", type: "CustomNode", color: "#F5A800" },
      { component: SiJaeger, id: "jaeger", label: "Jaeger", type: "CustomNode", color: "#60D0E4" },
      { component: SiPagerduty, id: "pagerduty", label: "PagerDuty", type: "CustomNode", color: "#06AC38" },
    ],
  },
  {
    category: "Logging",
    icons: [
      { component: SiKibana, id: "kibana", label: "Kibana", type: "CustomNode", color: "#005571" },
      { component: SiLogstash, id: "logstash", label: "Logstash", type: "CustomNode", color: "#005571" },
      { component: SiFluentbit, id: "fluentbit", label: "Fluent Bit", type: "CustomNode", color: "#49BDA5" },
    ],
  },

  // ============================================
  // TESTING
  // ============================================
  {
    category: "JavaScript Testing",
    icons: [
      { component: SiJest, id: "jest", label: "Jest", type: "CustomNode", color: "#C21325" },
      { component: SiVitest, id: "vitest", label: "Vitest", type: "CustomNode", color: "#6E9F18" },
      { component: SiMocha, id: "mocha", label: "Mocha", type: "CustomNode", color: "#8D6748" },
      { component: SiTestinglibrary, id: "testinglibrary", label: "Testing Library", type: "CustomNode", color: "#E33332" },
    ],
  },
  {
    category: "E2E Testing",
    icons: [
      { component: SiCypress, id: "cypress", label: "Cypress", type: "CustomNode", color: "#17202C" },
      { component: SiSelenium, id: "selenium", label: "Selenium", type: "CustomNode", color: "#43B02A" },
      { component: SiPuppeteer, id: "puppeteer", label: "Puppeteer", type: "CustomNode", color: "#40B5A4" },
    ],
  },
  {
    category: "Component Testing",
    icons: [
      { component: SiStorybook, id: "storybook", label: "Storybook", type: "CustomNode", color: "#FF4785" },
      { component: SiChromatic, id: "chromatic", label: "Chromatic", type: "CustomNode", color: "#FC521F" },
    ],
  },
  {
    category: "API & Load Testing",
    icons: [
      { component: SiPostman, id: "postman", label: "Postman", type: "CustomNode", color: "#FF6C37" },
      { component: SiInsomnia, id: "insomnia", label: "Insomnia", type: "CustomNode", color: "#4000BF" },
      { component: SiHoppscotch, id: "hoppscotch", label: "Hoppscotch", type: "CustomNode", color: "#31C48D" },
      { component: SiBruno, id: "bruno", label: "Bruno", type: "CustomNode", color: "#F5A623" },
      { component: SiK6, id: "k6", label: "k6", type: "CustomNode", color: "#7D64FF" },
    ],
  },
  {
    category: "Python Testing",
    icons: [
      { component: SiPytest, id: "pytest", label: "Pytest", type: "CustomNode", color: "#0A9EDC" },
    ],
  },

  // ============================================
  // API & DATA
  // ============================================
  {
    category: "API Technologies",
    icons: [
      { component: SiGraphql, id: "graphql", label: "GraphQL", type: "CustomNode", color: "#E10098" },
      { component: SiApollographql, id: "apollographql", label: "Apollo GraphQL", type: "CustomNode", color: "#311C87" },
      { component: SiTrpc, id: "trpc", label: "tRPC", type: "CustomNode", color: "#2596BE" },
      { component: SiSwagger, id: "swagger", label: "Swagger", type: "CustomNode", color: "#85EA2D" },
      { component: SiHasura, id: "hasura", label: "Hasura", type: "CustomNode", color: "#1EB4D4" },
    ],
  },
  {
    category: "Validation & HTTP",
    icons: [
      { component: SiZod, id: "zod", label: "Zod", type: "CustomNode", color: "#3E67B1" },
      { component: SiAxios, id: "axios", label: "Axios", type: "CustomNode", color: "#5A29E4" },
      { component: SiJsonwebtokens, id: "jwt", label: "JWT", type: "CustomNode", color: "#000000" },
    ],
  },

  // ============================================
  // REAL-TIME COMMUNICATION
  // ============================================
  {
    category: "Real-time Communication",
    icons: [
      { component: SiSocketdotio, id: "socketio", label: "Socket.io", type: "CustomNode", color: "#010101" },
      { component: SiWebrtc, id: "webrtc", label: "WebRTC", type: "CustomNode", color: "#333333" },
      { component: SiPusher, id: "pusher", label: "Pusher", type: "CustomNode", color: "#300D4F" },
      { component: SiTwilio, id: "twilio", label: "Twilio", type: "CustomNode", color: "#F22F46" },
    ],
  },

  // ============================================
  // AUTHENTICATION
  // ============================================
  {
    category: "Authentication",
    icons: [
      { component: SiAuth0, id: "auth0", label: "Auth0", type: "CustomNode", color: "#EB5424" },
      { component: SiClerk, id: "clerk", label: "Clerk", type: "CustomNode", color: "#6C47FF" },
      { component: SiLucia, id: "lucia", label: "Lucia", type: "CustomNode", color: "#5F57FF" },
      { component: SiOkta, id: "okta", label: "Okta", type: "CustomNode", color: "#007DC1" },
      { component: SiKeycloak, id: "keycloak", label: "Keycloak", type: "CustomNode", color: "#4D4D4D" },
    ],
  },

  // ============================================
  // CMS
  // ============================================
  {
    category: "Headless CMS",
    icons: [
      { component: SiStrapi, id: "strapi", label: "Strapi", type: "CustomNode", color: "#4945FF" },
      { component: SiSanity, id: "sanity", label: "Sanity", type: "CustomNode", color: "#F03E2F" },
      { component: SiContentful, id: "contentful", label: "Contentful", type: "CustomNode", color: "#2478CC" },
      { component: SiDirectus, id: "directus", label: "Directus", type: "CustomNode", color: "#6644FF" },
      { component: SiPayloadcms, id: "payload", label: "Payload CMS", type: "CustomNode", color: "#000000" },
      { component: SiGhost, id: "ghost", label: "Ghost", type: "CustomNode", color: "#15171A" },
    ],
  },
  {
    category: "Traditional CMS",
    icons: [
      { component: SiWordpress, id: "wordpress", label: "WordPress", type: "CustomNode", color: "#21759B" },
      { component: SiDrupal, id: "drupal", label: "Drupal", type: "CustomNode", color: "#0678BE" },
    ],
  },

  // ============================================
  // E-COMMERCE
  // ============================================
  {
    category: "E-commerce Platforms",
    icons: [
      { component: SiShopify, id: "shopify", label: "Shopify", type: "CustomNode", color: "#7AB55C" },
      { component: SiWoocommerce, id: "woocommerce", label: "WooCommerce", type: "CustomNode", color: "#96588A" },
      { component: SiMagento, id: "magento", label: "Magento", type: "CustomNode", color: "#EE672F" },
    ],
  },
  {
    category: "Payments",
    icons: [
      { component: SiStripe, id: "stripe", label: "Stripe", type: "CustomNode", color: "#008CDD" },
      { component: SiPaypal, id: "paypal", label: "PayPal", type: "CustomNode", color: "#00457C" },
      { component: SiSquare, id: "square", label: "Square", type: "CustomNode", color: "#006AFF" },
      { component: SiMercadopago, id: "mercadopago", label: "Mercado Pago", type: "CustomNode", color: "#00B1EA" },
    ],
  },

  // ============================================
  // MOBILE & CROSS-PLATFORM
  // ============================================
  {
    category: "Mobile Development",
    icons: [
      { component: SiReact, id: "reactnative", label: "React Native", type: "CustomNode", color: "#61DAFB" },
      { component: SiFlutter, id: "flutter", label: "Flutter", type: "CustomNode", color: "#02569B" },
      { component: SiIonic, id: "ionic", label: "Ionic", type: "CustomNode", color: "#3880FF" },
      { component: SiCapacitor, id: "capacitor", label: "Capacitor", type: "CustomNode", color: "#119EFF" },
      { component: SiExpo, id: "expo", label: "Expo", type: "CustomNode", color: "#000020" },
    ],
  },
  {
    category: "Desktop Apps",
    icons: [
      { component: SiTauri, id: "tauri", label: "Tauri", type: "CustomNode", color: "#FFC131" },
      { component: SiElectron, id: "electron", label: "Electron", type: "CustomNode", color: "#47848F" },
      { component: SiWails, id: "wails", label: "Wails", type: "CustomNode", color: "#DF0000" },
    ],
  },

  // ============================================
  // GAME DEVELOPMENT
  // ============================================
  {
    category: "Game Engines",
    icons: [
      { component: SiUnity, id: "unity", label: "Unity", type: "CustomNode", color: "#000000" },
      { component: SiUnrealengine, id: "unreal", label: "Unreal Engine", type: "CustomNode", color: "#0E1128" },
      { component: SiGodotengine, id: "godot", label: "Godot", type: "CustomNode", color: "#478CBF" },
    ],
  },
  {
    category: "Web 3D & Graphics",
    icons: [
      { component: SiThreedotjs, id: "threejs", label: "Three.js", type: "CustomNode", color: "#000000" },
      { component: SiBabylondotjs, id: "babylonjs", label: "Babylon.js", type: "CustomNode", color: "#BB464B" },
    ],
  },

  // ============================================
  // AI/ML
  // ============================================
  {
    category: "ML Frameworks",
    icons: [
      { component: SiTensorflow, id: "tensorflow", label: "TensorFlow", type: "CustomNode", color: "#FF6F00" },
      { component: SiPytorch, id: "pytorch", label: "PyTorch", type: "CustomNode", color: "#EE4C2C" },
      { component: SiKeras, id: "keras", label: "Keras", type: "CustomNode", color: "#D00000" },
      { component: SiScikitlearn, id: "scikitlearn", label: "scikit-learn", type: "CustomNode", color: "#F7931E" },
      { component: SiOpencv, id: "opencv", label: "OpenCV", type: "CustomNode", color: "#5C3EE8" },
    ],
  },
  {
    category: "Data Science",
    icons: [
      { component: SiNumpy, id: "numpy", label: "NumPy", type: "CustomNode", color: "#013243" },
      { component: SiPandas, id: "pandas", label: "Pandas", type: "CustomNode", color: "#150458" },
      { component: SiJupyter, id: "jupyter", label: "Jupyter", type: "CustomNode", color: "#F37626" },
      { component: SiGooglecolab, id: "colab", label: "Google Colab", type: "CustomNode", color: "#F9AB00" },
    ],
  },
  {
    category: "LLMs & AI",
    icons: [
      { component: SiOpenai, id: "openai", label: "OpenAI", type: "CustomNode", color: "#412991" },
      { component: SiAnthropic, id: "anthropic", label: "Anthropic", type: "CustomNode", color: "#D4A27F" },
      { component: SiHuggingface, id: "huggingface", label: "Hugging Face", type: "CustomNode", color: "#FFD21E" },
      { component: SiOllama, id: "ollama", label: "Ollama", type: "CustomNode", color: "#000000" },
      { component: SiLangchain, id: "langchain", label: "LangChain", type: "CustomNode", color: "#1C3C3C" },
    ],
  },
  {
    category: "MLOps & Data Engineering",
    icons: [
      { component: SiMlflow, id: "mlflow", label: "MLflow", type: "CustomNode", color: "#0194E2" },
      { component: SiDatabricks, id: "databricks", label: "Databricks", type: "CustomNode", color: "#FF3621" },
      { component: SiApachespark, id: "spark", label: "Apache Spark", type: "CustomNode", color: "#E25A1C" },
      { component: SiDbt, id: "dbt", label: "dbt", type: "CustomNode", color: "#FF694B" },
      { component: SiAirbyte, id: "airbyte", label: "Airbyte", type: "CustomNode", color: "#615EFF" },
      { component: SiMinio, id: "minio", label: "MinIO", type: "CustomNode", color: "#C72E49" },
      { component: SiSnowflake, id: "snowflake", label: "Snowflake", type: "CustomNode", color: "#29B5E8" },
    ],
  },

  // ============================================
  // PRODUCTIVITY & COLLABORATION
  // ============================================
  {
    category: "Design & Collaboration",
    icons: [
      { component: SiFigma, id: "figma", label: "Figma", type: "CustomNode", color: "#F24E1E" },
      { component: SiNotion, id: "notion", label: "Notion", type: "CustomNode", color: "#000000" },
      { component: SiMiro, id: "miro", label: "Miro", type: "CustomNode", color: "#050038" },
      { component: SiExcalidraw, id: "excalidraw", label: "Excalidraw", type: "CustomNode", color: "#6965DB" },
    ],
  },
  {
    category: "Communication",
    icons: [
      { component: SiSlack, id: "slack", label: "Slack", type: "CustomNode", color: "#4A154B" },
      { component: SiDiscord, id: "discord", label: "Discord", type: "CustomNode", color: "#5865F2" },
    ],
  },
  {
    category: "Project Management",
    icons: [
      { component: SiLinear, id: "linear", label: "Linear", type: "CustomNode", color: "#5E6AD2" },
      { component: SiJira, id: "jira", label: "Jira", type: "CustomNode", color: "#0052CC" },
      { component: SiAsana, id: "asana", label: "Asana", type: "CustomNode", color: "#F06A6A" },
      { component: SiTrello, id: "trello", label: "Trello", type: "CustomNode", color: "#0052CC" },
      { component: SiClickup, id: "clickup", label: "ClickUp", type: "CustomNode", color: "#7B68EE" },
      { component: SiConfluence, id: "confluence", label: "Confluence", type: "CustomNode", color: "#172B4D" },
    ],
  },

  // ============================================
  // DOCUMENTATION
  // ============================================
  {
    category: "Documentation",
    icons: [
      { component: SiDocusaurus, id: "docusaurus", label: "Docusaurus", type: "CustomNode", color: "#3ECC5F" },
      { component: SiGitbook, id: "gitbook", label: "GitBook", type: "CustomNode", color: "#3884FF" },
      { component: SiReadthedocs, id: "readthedocs", label: "Read the Docs", type: "CustomNode", color: "#8CA1AF" },
      { component: SiMdx, id: "mdx", label: "MDX", type: "CustomNode", color: "#1B1F24" },
    ],
  },

  // ============================================
  // IDEs & EDITORS
  // ============================================
  {
    category: "IDEs & Editors",
    icons: [
      { component: VscVscode, id: "vscode", label: "VS Code", type: "CustomNode", color: "#007ACC" },
      { component: SiNeovim, id: "neovim", label: "Neovim", type: "CustomNode", color: "#57A143" },
      { component: SiVim, id: "vim", label: "Vim", type: "CustomNode", color: "#019733" },
      { component: SiIntellijidea, id: "intellij", label: "IntelliJ IDEA", type: "CustomNode", color: "#000000" },
      { component: SiWebstorm, id: "webstorm", label: "WebStorm", type: "CustomNode", color: "#000000" },
      { component: SiPycharm, id: "pycharm", label: "PyCharm", type: "CustomNode", color: "#000000" },
      { component: SiAndroidstudio, id: "androidstudio", label: "Android Studio", type: "CustomNode", color: "#3DDC84" },
    ],
  },

  // ============================================
  // KNOWLEDGE MANAGEMENT
  // ============================================
  {
    category: "Knowledge Management",
    icons: [
      { component: SiObsidian, id: "obsidian", label: "Obsidian", type: "CustomNode", color: "#483699" },
      { component: SiLogseq, id: "logseq", label: "Logseq", type: "CustomNode", color: "#85C8C8" },
    ],
  },

  // ============================================
  // DEVELOPER TOOLS
  // ============================================
  {
    category: "Developer Tools",
    icons: [
      { component: SiGitpod, id: "gitpod", label: "Gitpod", type: "CustomNode", color: "#FFAE33" },
      { component: SiDependabot, id: "dependabot", label: "Dependabot", type: "CustomNode", color: "#025E8C" },
      { component: SiRenovate, id: "renovate", label: "Renovate", type: "CustomNode", color: "#1A1F6C" },
    ],
  },

  // ============================================
  // SECURITY
  // ============================================
  {
    category: "Security",
    icons: [
      { component: SiSnyk, id: "snyk", label: "Snyk", type: "CustomNode", color: "#4C4A73" },
      { component: SiTrivy, id: "trivy", label: "Trivy", type: "CustomNode", color: "#1904DA" },
      { component: SiBitwarden, id: "bitwarden", label: "Bitwarden", type: "CustomNode", color: "#175DDC" },
      { component: SiLetsencrypt, id: "letsencrypt", label: "Let's Encrypt", type: "CustomNode", color: "#003A70" },
      { component: SiBurpsuite, id: "burpsuite", label: "Burp Suite", type: "CustomNode", color: "#FF6633" },
    ],
  },
];

export default languageIcons;
