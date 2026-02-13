import { motion } from "framer-motion";
import { Target, Globe, Zap } from "lucide-react";

const concepts = [
  {
    icon: Target,
    title: "منصة واحدة، جميع الأطر",
    description:
      "مُوائمة توحّد قياس ونُدي وNCA وغيرها من أطر التحول الرقمي السعودية في مركز إدارة واحد — مما يزيل تعقيد التعامل مع أنظمة ومعايير متعددة.",
  },
  {
    icon: Globe,
    title: "مواءمة سلسة بين الأطر",
    description:
      "غالباً ما تتشارك الأطر المختلفة في متطلبات متداخلة. مُوائمة تربط الضوابط بذكاء عبر الأطر، فتمتثل مرة واحدة وتُلبي متطلبات كثيرة — موفرةً الوقت والموارد.",
  },
  {
    icon: Zap,
    title: "رؤية مركزية وتحكم شامل",
    description:
      "احصل على رؤية موحدة لوضع الامتثال عبر كل إطار. تابع التقدم، وحدد الفجوات، واتخذ الإجراءات من مكان واحد بدلاً من لوحات تحكم وجداول بيانات متفرقة.",
  },
];

const GoalsSection = () => {
  return (
    <section id="goals" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
            المفهوم
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            لماذا مُوائمة؟
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            إدارة أطر التحول الرقمي السعودية المتعددة لا يجب أن تعني أدوات
            وفرق ومتاعب متعددة. مُوائمة تجمع كل شيء في مكان واحد.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {concepts.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-2xl bg-card p-8 shadow-sm border border-border overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-1 w-full bg-gradient-to-l from-primary via-teal-light to-gold" />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <goal.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {goal.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
