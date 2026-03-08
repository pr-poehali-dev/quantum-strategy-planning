import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "BookOpen",
    title: "Личные истории",
    description: "Настоящие рассказы из жизни — без приукрашивания. О людях, встречах и моментах, которые меняют.",
  },
  {
    icon: "Feather",
    title: "Мысли вслух",
    description: "Размышления о том, что важно прямо сейчас. Честный внутренний диалог, открытый для вас.",
  },
  {
    icon: "Compass",
    title: "Путь в деталях",
    description: "Дневник движения — куда иду, что нахожу, от чего отказываюсь. Живой маршрут без прикрас.",
  },
  {
    icon: "Palette",
    title: "Эстетика и красота",
    description: "Журнал создан для эстетического удовольствия — каждый текст как маленькое произведение.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Что внутри</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Темы, о которых я пишу
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-500">
                <Icon name={feature.icon} size={24} className="text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
