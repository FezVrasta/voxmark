import { motion } from "framer-motion";
import { FileText, Scissors, Share2, Download } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "PDF Export",
    description: "Export any song as a beautifully formatted PDF — complete with annotations, color-coded tags, and all your markings. Perfect for printing or sharing with your band.",
  },
  {
    icon: Scissors,
    title: "Session Clips",
    description: "Trim and export specific moments from your lesson recordings. Save that perfect vocal run or coaching tip as a standalone clip you can revisit anytime.",
  },
  {
    icon: Share2,
    title: "Share Anywhere",
    description: "Send PDFs, clips, or entire songs to bandmates, teachers, or students. Everything stays formatted and ready to use on any device.",
  },
  {
    icon: Download,
    title: "Offline Ready",
    description: "All your exports are saved locally. Access your PDFs and clips even without an internet connection — on stage, in the studio, or on the go.",
  },
];

const ExportSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background for visual break */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-display font-semibold tracking-widest uppercase text-primary mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
            New
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
            Take it{" "}
            <span className="text-gradient">everywhere</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Export your songs as PDFs, trim lesson clips, and share everything with anyone — your music, your way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 hover:border-primary/30 hover:shadow-glow/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportSection;
