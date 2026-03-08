export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="font-serif text-2xl tracking-tight text-foreground">
            Журнал
          </a>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <a href="#philosophy" className="hover:text-foreground transition-colors duration-300">
              О журнале
            </a>
            <a href="#features" className="hover:text-foreground transition-colors duration-300">
              Что внутри
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors duration-300">
              Подписка
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors duration-300">
              Написать мне
            </a>
          </div>

          <p className="text-sm text-muted-foreground">2026 · Мой личный журнал</p>
        </div>

        <div className="mt-20 text-center">
          <span className="font-serif text-[12rem] md:text-[16rem] leading-none text-border/50 select-none">Ж</span>
        </div>
      </div>
    </footer>
  );
}
