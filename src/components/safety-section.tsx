import Icon from "@/components/ui/icon"

const safetyPillars = [
  {
    icon: "Lock",
    title: "Шифрование нейроданных",
    description: "Все нейронные сигналы шифруются на устройстве с использованием AES-256 до передачи. Ваши мысли — только ваши.",
  },
  {
    icon: "UserCheck",
    title: "FDA & CE сертификация",
    description: "SynapseAI прошёл полный цикл регуляторной проверки в США и ЕС. Класс III медицинского устройства.",
  },
  {
    icon: "HeartPulse",
    title: "Непрерывный биомониторинг",
    description: "Встроенные датчики отслеживают температуру ткани, pH и микровоспаления 24/7 и сигнализируют при отклонениях.",
  },
  {
    icon: "RotateCcw",
    title: "Полная обратимость",
    description: "Имплант разработан для безопасного извлечения в любой момент. Минимально инвазивная процедура под местной анестезией.",
  },
  {
    icon: "ServerOff",
    title: "Локальная обработка",
    description: "Декодирование происходит на чипе, не в облаке. Данные не покидают устройство без явного согласия пользователя.",
  },
  {
    icon: "Gavel",
    title: "Этический протокол",
    description: "Независимый комитет по биоэтике проверяет каждый кейс применения. Нулевая толерантность к использованию без согласия.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
            Безопасность без компромиссов
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Нейроинтерфейс находится в мозге — безопасность здесь не функция, а фундамент всей архитектуры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyPillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 bg-white/3 hover:border-red-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors duration-300">
                <Icon name={pillar.icon} fallback="Shield" size={22} className="text-red-400" />
              </div>
              <h3 className="font-orbitron text-base font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="font-orbitron text-4xl font-bold text-red-400 mb-1">0</span>
            <span className="text-gray-400 text-sm">серьёзных инцидентов</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-red-500/20" />
          <div className="flex flex-col items-center">
            <span className="font-orbitron text-4xl font-bold text-red-400 mb-1">7</span>
            <span className="text-gray-400 text-sm">лет клинических испытаний</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-red-500/20" />
          <div className="flex flex-col items-center">
            <span className="font-orbitron text-4xl font-bold text-red-400 mb-1">100%</span>
            <span className="text-gray-400 text-sm">данных под контролем пользователя</span>
          </div>
        </div>
      </div>
    </section>
  )
}
