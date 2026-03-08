import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Свободный доступ",
    price: "Бесплатно",
    description: "Для тех, кто только открывает журнал для себя",
    features: ["Все открытые записи", "Новые публикации на почту", "Возможность оставить отклик"],
    cta: "Читать бесплатно",
    highlighted: false,
  },
  {
    name: "Близкий читатель",
    price: "390 ₽",
    period: "/мес",
    description: "Для тех, кто хочет быть ближе и читать всё",
    features: [
      "Все открытые записи",
      "Закрытые записи и дневники",
      "Личные истории без фильтров",
      "Ранний доступ к новым текстам",
      "Ответ на ваше сообщение лично",
    ],
    cta: "Стать близким читателем",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Подписка</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Читайте так, как вам близко
          </h2>
          <p className="text-muted-foreground text-lg">Без обязательств. Отмена в любой момент.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-2xl border ${
                plan.highlighted ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <h3 className={`text-xl mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-5xl tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className={plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`text-sm mb-8 leading-relaxed ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? "bg-primary-foreground/20" : "bg-sage/10"
                    }`}>
                      <Icon name="Check" size={12} className={plan.highlighted ? "text-primary-foreground" : "text-sage"} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3.5 px-6 rounded-full text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
