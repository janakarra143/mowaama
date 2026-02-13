const Footer = () => {
  return (
    <footer className="bg-teal-dark text-primary-foreground/70 py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-foreground mb-3">
              مُوائمة
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              ربط أطر الحوكمة الرقمية في المملكة العربية السعودية من خلال
              حلول منصات ذكية.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["الرئيسية", "#"],
                ["منصة مُوائم", "#populus"],
                ["عن مُوائمة", "#goals"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
              الأطر المدعومة
            </h4>
            <ul className="space-y-2.5 text-sm">
              {["قياس", "نُدي", "NCA ECC", "سدايا", "هيئة الاتصالات"].map((fw) => (
                <li key={fw}>{fw}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} مُوائمة. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs">
            دعماً لرؤية السعودية 2030
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
