export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="/professional-woman-portrait--soft-lighting--neutra.jpg"
              alt="Автор журнала"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Я пишу, потому что молчать — значит терять. Каждая запись — это я живая.»
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О журнале</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Мой путь — открыто и без прикрас
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Этот журнал родился из желания говорить вслух о том, о чём обычно молчат. О поисках себя, о страхах и открытиях, о красоте обычных дней.
              </p>
              <p>
                Здесь нет экспертных советов и готовых рецептов. Только живые слова, искренние истории и мысли, которые, возможно, перекликаются с вашими.
              </p>
            </div>
            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Что внутри</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
