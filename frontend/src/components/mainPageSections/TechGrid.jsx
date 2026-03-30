import {
  SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiSvelte, SiSolid, SiAstro,
  SiTypescript, SiJavascript, SiPython, SiGo, SiRust, SiNodedotjs, SiPhp, SiRuby, SiSwift, SiKotlin,
  SiDocker, SiKubernetes, SiTerraform, SiNginx, SiHelm, SiAnsible,
  SiPostgresql, SiMongodb, SiRedis, SiMysql, SiSqlite, SiNeo4J,
  SiTailwindcss, SiGraphql, SiGit, SiGithubactions, SiGithub,
  SiAmazonwebservices, SiVercel, SiCloudflare, SiFirebase, SiDigitalocean, SiHeroku, SiNetlify,
  SiDjango, SiFlask, SiLaravel, SiExpress, SiNestjs, SiFastapi, SiSpringboot, SiRubyonrails,
  SiElasticsearch, SiApachekafka, SiGrafana, SiSentry, SiPrometheus, SiDatadog,
  SiStripe, SiAuth0, SiSupabase, SiPrisma,
  SiFigma, SiLinear, SiJest, SiStorybook, SiCypress, SiVitest,
  SiRabbitmq, SiApollographql, SiSocketdotio,
  SiVite, SiWebpack, SiTurborepo,
  SiOpenai, SiHuggingface, SiTensorflow, SiPytorch,
  SiFlutter, SiElectron, SiTauri,
  SiShopify, SiWordpress, SiStrapi,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { FaJava } from 'react-icons/fa'
import { useTheme } from '../../hooks/useTheme'

const techs = [
  { icon: SiReact, color: '#61DAFB' },
  { icon: SiNextdotjs, color: '#808080' },
  { icon: SiVuedotjs, color: '#4FC08D' },
  { icon: SiAngular, color: '#DD0031' },
  { icon: SiSvelte, color: '#FF3E00' },
  { icon: SiSolid, color: '#2C4F7C' },
  { icon: SiAstro, color: '#FF5D01' },
  { icon: SiJavascript, color: '#F7DF1E' },
  { icon: SiTypescript, color: '#3178C6' },
  { icon: SiPython, color: '#3776AB' },
  { icon: FaJava, color: '#ED8B00' },
  { icon: SiGo, color: '#00ADD8' },
  { icon: SiRust, color: '#CE422B' },
  { icon: SiSwift, color: '#FA7343' },
  { icon: SiKotlin, color: '#7F52FF' },
  { icon: SiPhp, color: '#777BB4' },
  { icon: SiRuby, color: '#CC342D' },
  { icon: SiNodedotjs, color: '#339933' },
  { icon: SiExpress, color: '#808080' },
  { icon: SiNestjs, color: '#E0234E' },
  { icon: SiFastapi, color: '#009688' },
  { icon: SiDjango, color: '#092E20' },
  { icon: SiFlask, color: '#808080' },
  { icon: SiLaravel, color: '#FF2D20' },
  { icon: SiSpringboot, color: '#6DB33F' },
  { icon: SiRubyonrails, color: '#CC0000' },
  { icon: SiDocker, color: '#2496ED' },
  { icon: SiKubernetes, color: '#326CE5' },
  { icon: SiTerraform, color: '#7B42BC' },
  { icon: SiHelm, color: '#0F1689' },
  { icon: SiAnsible, color: '#EE0000' },
  { icon: SiNginx, color: '#009639' },
  { icon: SiPostgresql, color: '#4169E1' },
  { icon: SiMongodb, color: '#47A248' },
  { icon: SiRedis, color: '#DC382D' },
  { icon: SiMysql, color: '#4479A1' },
  { icon: SiSqlite, color: '#003B57' },
  { icon: SiNeo4J, color: '#008CC1' },
  { icon: SiAmazonwebservices, color: '#FF9900' },
  { icon: VscAzure, color: '#0078D4' },
  { icon: SiVercel, color: '#808080' },
  { icon: SiNetlify, color: '#00C7B7' },
  { icon: SiCloudflare, color: '#F38020' },
  { icon: SiFirebase, color: '#FFCA28' },
  { icon: SiDigitalocean, color: '#0080FF' },
  { icon: SiHeroku, color: '#430098' },
  { icon: SiGraphql, color: '#E10098' },
  { icon: SiApollographql, color: '#311C87' },
  { icon: SiTailwindcss, color: '#06B6D4' },
  { icon: SiVite, color: '#646CFF' },
  { icon: SiWebpack, color: '#8DD6F9' },
  { icon: SiTurborepo, color: '#EF4444' },
  { icon: SiGit, color: '#F05032' },
  { icon: SiGithub, color: '#808080' },
  { icon: SiGithubactions, color: '#2088FF' },
  { icon: SiElasticsearch, color: '#005571' },
  { icon: SiApachekafka, color: '#808080' },
  { icon: SiRabbitmq, color: '#FF6600' },
  { icon: SiGrafana, color: '#F46800' },
  { icon: SiPrometheus, color: '#E6522C' },
  { icon: SiDatadog, color: '#632CA6' },
  { icon: SiSentry, color: '#362D59' },
  { icon: SiJest, color: '#C21325' },
  { icon: SiVitest, color: '#6E9F18' },
  { icon: SiCypress, color: '#17202C' },
  { icon: SiStorybook, color: '#FF4785' },
  { icon: SiStripe, color: '#635BFF' },
  { icon: SiAuth0, color: '#EB5424' },
  { icon: SiSupabase, color: '#3FCF8E' },
  { icon: SiPrisma, color: '#2D3748' },
  { icon: SiSocketdotio, color: '#808080' },
  { icon: SiOpenai, color: '#808080' },
  { icon: SiHuggingface, color: '#FFD21E' },
  { icon: SiTensorflow, color: '#FF6F00' },
  { icon: SiPytorch, color: '#EE4C2C' },
  { icon: SiFlutter, color: '#02569B' },
  { icon: SiElectron, color: '#47848F' },
  { icon: SiTauri, color: '#FFC131' },
  { icon: SiFigma, color: '#F24E1E' },
  { icon: SiLinear, color: '#5E6AD2' },
  { icon: SiShopify, color: '#7AB55C' },
  { icon: SiWordpress, color: '#21759B' },
  { icon: SiStrapi, color: '#4945FF' },
]

const TechGrid = () => {
  const { dark } = useTheme()

  return (
    <section
      className={`w-full transition-colors duration-300 overflow-hidden ${
        dark ? 'bg-[#030712]' : 'bg-white'
      }`}
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-24 lg:pt-32 pb-14 lg:pb-18">
        <div className="text-center">
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-linear-to-r from-violet-500 to-indigo-400 bg-clip-text text-transparent">
              {techs.length}+
            </span>{' '}
            tecnologias
          </h2>
          <p className={`mt-4 text-lg max-w-md mx-auto ${
            dark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            De frameworks a bancos de dados, tudo pronto pra usar no canvas.
          </p>
        </div>
      </div>

      {/* Full-width icon band */}
      <div className="relative w-full pb-24 lg:pb-32">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, ${dark ? '#030712' : '#ffffff'}, transparent)`,
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(270deg, ${dark ? '#030712' : '#ffffff'}, transparent)`,
          }}
        />

        {/* Icons row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-8 lg:gap-x-12 lg:gap-y-10 px-6 sm:px-10">
          {techs.map((tech, i) => {
            const Icon = tech.icon
            return (
              <Icon
                key={i}
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 shrink-0 hover:scale-110 transition-transform duration-300 ease-out motion-reduce:animate-none"
                style={{
                  color: tech.color,
                  animation: `techWave 12s ease-in-out ${(i * 0.15).toFixed(2)}s infinite`,
                }}
              />
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes techWave {
          0%, 100% { transform: translateY(0); }
          5% { transform: translateY(-8px); }
          10% { transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default TechGrid
