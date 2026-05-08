import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-red-950/30 via-black to-red-950/30 border-t border-red-500/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Станьте первыми, кто шагнёт за грань
          </h2>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
            Список раннего доступа уже открыт. Оставьте заявку сейчас — мы свяжемся с вами для предварительной
            оценки и бесплатной консультации с нейрохирургом.
          </p>
          <p className="text-red-400 font-orbitron text-sm mb-10 tracking-wider">
            ОСТАЛОСЬ МЕСТ НА ЭТОЙ НЕДЕЛЕ: 12
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-500 text-white hover:bg-red-600 pulse-button text-lg px-10 py-4 font-orbitron border-0"
            >
              Записаться в лист ожидания
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:border-red-500 hover:text-red-400 text-lg px-8 py-4 bg-transparent font-orbitron"
            >
              Скачать White Paper
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
