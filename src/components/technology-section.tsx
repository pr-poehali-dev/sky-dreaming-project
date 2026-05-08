import Icon from "@/components/ui/icon"

const technologies = [
  {
    icon: "Cpu",
    title: "Нейроморфный чип N-7",
    description:
      "Процессор с 1024 параллельными нейронными каналами обрабатывает ЭЭГ-сигналы с задержкой менее 0,3 мс — быстрее, чем человеческая реакция.",
    stat: "0.3 мс",
    statLabel: "латентность",
  },
  {
    icon: "Wifi",
    title: "Беспроводная нейропередача",
    description:
      "Защищённый протокол BrainLink 2.0 передаёт зашифрованные нейроданные на скорости 4 Гбит/с без проводов и внешних устройств.",
    stat: "4 Гбит/с",
    statLabel: "скорость",
  },
  {
    icon: "Shield",
    title: "Биосовместимый корпус",
    description:
      "Медицинский титан с нано-покрытием предотвращает воспаление. Срок службы устройства — более 25 лет без замены.",
    stat: "25+ лет",
    statLabel: "ресурс",
  },
  {
    icon: "Brain",
    title: "Адаптивный ИИ-декодер",
    description:
      "Персональная модель машинного обучения обучается на паттернах мозга конкретного пользователя, достигая точности декодирования 99,7%.",
    stat: "99.7%",
    statLabel: "точность",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
            Технология под капотом
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Каждый компонент SynapseAI разработан в партнёрстве с ведущими нейробиологами и инженерами MEMS-систем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="border border-red-500/20 rounded-xl p-8 bg-white/5 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                  <Icon name={tech.icon} fallback="CircleAlert" size={28} className="text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{tech.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-orbitron text-2xl font-bold text-red-400">{tech.stat}</span>
                    <span className="text-gray-500 text-sm uppercase tracking-wider">{tech.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-red-500/20 rounded-2xl bg-gradient-to-r from-red-950/20 via-black to-red-950/20 text-center">
          <p className="font-orbitron text-white text-lg md:text-2xl font-semibold mb-2">
            Архитектура прошла клинические испытания в 14 странах
          </p>
          <p className="text-gray-400">Более 2 300 пациентов в программе раннего доступа</p>
        </div>
      </div>
    </section>
  )
}
