import { useTheme } from "../../hooks/useTheme"

const providers = [
  {
    name: 'AWS',
    logo: '/aws-icon.webp',
    color: '#FF9900',
    services: ['EC2', 'S3', 'Lambda', 'RDS', 'DynamoDB', 'ECS', 'EKS', 'SQS', 'Amplify'],
  },
  {
    name: 'Azure',
    logo: '/azure-icon.png',
    color: '#0078D4',
    services: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database', 'Cosmos DB', 'AKS', 'Service Bus'],
  },
]

const Guide = () => {
  const { dark } = useTheme()

  return (
    <section
      id="guide"
      className={`w-full transition-colors duration-300 ${
        dark ? 'bg-[#030712]' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>
            Seus provedores,{' '}
            <span className="bg-linear-to-r from-violet-500 to-indigo-400 bg-clip-text text-transparent">
              seus componentes
            </span>
          </h2>
          <p className={`mt-4 text-lg max-w-lg mx-auto ${
            dark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Arraste serviços reais dos provedores que você já usa direto pro canvas.
          </p>
        </div>

        {/* Providers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="relative rounded-xl overflow-hidden transition-all duration-300"
              style={{
                background: dark
                  ? `linear-gradient(135deg, ${provider.color}08 0%, ${provider.color}03 100%)`
                  : `linear-gradient(135deg, ${provider.color}0A 0%, ${provider.color}04 100%)`,
                border: `1px solid ${dark ? `${provider.color}18` : `${provider.color}15`}`,
              }}
            >
              {/* Background glow */}
              <div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: provider.color, opacity: dark ? 0.12 : 0.08 }}
              />
              <div
                className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: provider.color, opacity: dark ? 0.06 : 0.04 }}
              />

              <div className="relative p-8 lg:p-10">
                {/* Provider logo + name */}
                <div className="flex items-center gap-5 mb-8">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: dark ? `${provider.color}25` : `${provider.color}15`,
                      boxShadow: `0 8px 24px ${provider.color}20`,
                    }}
                  >
                    <img
                      src={provider.logo}
                      alt={provider.name}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <div>
                    <span className={`text-2xl font-bold tracking-tight block leading-tight ${
                      dark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {provider.name}
                    </span>
                    <span className={`text-xs tracking-wide uppercase font-medium ${
                      dark ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {provider.services.length}+ serviços
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full mb-7"
                  style={{
                    background: `linear-gradient(90deg, ${provider.color}${dark ? '30' : '20'}, transparent)`,
                  }}
                />

                {/* Service pills */}
                <div className="flex flex-wrap gap-2.5">
                  {provider.services.map((service) => (
                    <span
                      key={service}
                      className={`px-4 py-2 text-sm font-medium rounded-xl ${
                        dark ? 'text-gray-200' : 'text-gray-700'
                      }`}
                      style={{
                        backgroundColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.8)',
                        border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {service}
                    </span>
                  ))}
                  <span
                    className="px-4 py-2 text-sm font-semibold rounded-xl"
                    style={{ color: provider.color }}
                  >
                    + mais
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guide
