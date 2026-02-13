import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-teal-dark/90 via-primary/80 to-primary/60" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              إدارة الأطر الرقمية
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 tracking-tight">
            توحيد الأطر
            <br />
            <span className="text-gold">الرقمية السعودية</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-xl mb-10 leading-relaxed">
            مُوائمة تربط وتدير قياس ونُدي وغيرها من أطر التحول الرقمي
            السعودية في منصة واحدة متكاملة — لتعزيز الامتثال والكفاءة
            والتحول الرقمي.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#populus"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition hover:brightness-110"
            >
              استكشف مُوائم
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </a>
            <a
              href="#goals"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-7 py-3.5 font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              رؤيتنا
            </a>
          </div>
        </motion.div>

        {/* Framework badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {["قياس", "نُدي", "NCA", "سدايا", "هيئة الاتصالات"].map((fw) => (
            <span
              key={fw}
              className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm font-medium text-primary-foreground/70 backdrop-blur"
            >
              {fw}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
