import { motion } from "framer-motion";
import { Monitor, Layers, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "تكامل متعدد الأطر",
    description: "اربط قياس ونُدي وغيرها من الأطر السعودية في لوحة تحكم موحدة.",
  },
  {
    icon: Monitor,
    title: "مراقبة فورية",
    description: "تابع حالة الامتثال ومواءمة الأطر عبر جميع مبادراتك الرقمية.",
  },
  {
    icon: ShieldCheck,
    title: "امتثال آلي",
    description: "تحقق تلقائياً من خدماتك الرقمية وفقاً لأحدث المتطلبات التنظيمية.",
  },
  {
    icon: BarChart3,
    title: "تحليلات وتقارير",
    description: "أنشئ تقارير مفصلة ورؤى تحليلية لتسريع رحلة التحول الرقمي.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const PopulusSection = () => {
  return (
    <section id="populus" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
            المنصة
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            تعرّف على <span className="text-primary">مُوائم</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            مُوائم هو البرنامج الرئيسي لمُوائمة — منصة مركزية مصممة لإدارة
            ومراقبة ومواءمة أطر الحوكمة الرقمية في المملكة العربية السعودية
            بسهولة تامة.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group rounded-xl border border-border bg-card p-7 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopulusSection;
