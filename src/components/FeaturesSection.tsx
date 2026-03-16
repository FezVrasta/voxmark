import { motion } from "framer-motion";
import { Music, Mic, Clock, Palette } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Color-Coded Annotations",
    description: "Mark breathing, dynamics, and technique with granular, color-coded tags right on your lyrics.",
  },
  {
    icon: Clock,
    title: "Tap-to-Time Sync",
    description: "Sync lyrics to your own pace with a simple tap interface. Auto-scroll follows you in real-time.",
  },
  {
    icon: Mic,
    title: "Lesson Recording",
    description: "Record vocal lessons with timestamped markers so you can revisit key moments instantly.",
  },
  {
    icon: Music,
    title: "Visual Vocal Cues",
    description: "Use wavy, stretched, or high/low text styling to visualize the nuances of your voice.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Built for the <span className="text-gradient">voice</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every feature designed around how vocalists actually practice and perform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card-gradient rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
