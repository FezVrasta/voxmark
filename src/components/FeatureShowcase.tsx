import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureShowcaseProps {
  title: string;
  highlight: string;
  description: string;
  bullets: { icon: LucideIcon; text: string }[];
  screenshots: { src: string; alt: string }[];
  reverse?: boolean;
  badge?: string;
  backgroundImage?: string;
  darkBg?: boolean;
}

const FeatureShowcase = ({
  title,
  highlight,
  description,
  bullets,
  screenshots,
  reverse = false,
  badge,
  backgroundImage,
}: FeatureShowcaseProps) => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, hsl(var(--background)) 85%)"
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>
      )}
      <div className="container relative z-10">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-12 lg:gap-20`}
        >
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-lg"
          >
            {badge && (
              <span className="inline-block text-xs font-display font-semibold tracking-widest uppercase text-primary mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
                {badge}
              </span>
            )}
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
              {title}{" "}
              <span className="text-gradient">{highlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {description}
            </p>
            <ul className="space-y-4">
              {bullets.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <b.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Screenshots side */}
          <div className="flex-1 flex justify-center items-end gap-4 md:gap-6">
            {screenshots.map((screen, i) => (
              <motion.div
                key={screen.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div
                  className={`phone-mockup ${
                    screenshots.length > 1 && i === 0
                      ? "w-[160px] md:w-[200px]"
                      : screenshots.length > 1
                      ? "w-[160px] md:w-[200px]"
                      : "w-[220px] md:w-[260px]"
                  }`}
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="w-full"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
