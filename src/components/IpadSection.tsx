import { motion } from "framer-motion";
import { Tablet, Layout } from "lucide-react";
import ipadSongs from "@/assets/ipad-songs.png";
import ipadStudio from "@/assets/ipad-studio.png";

const IpadSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card/30 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block text-xs font-display font-semibold tracking-widest uppercase text-primary mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
            iPad
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Made for the <span className="text-gradient">big screen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full split-view layouts on iPad let you browse your library and read lyrics side by side, or record a session with all your markers visible at once.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 mt-12">
          {[
            { src: ipadSongs, alt: "iPad song library with annotated lyrics", icon: Layout, label: "Songs & Annotations" },
            { src: ipadStudio, alt: "iPad studio recording with waveform", icon: Tablet, label: "Studio" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex-1 w-full"
            >
              <div className="rounded-2xl overflow-hidden border border-border bg-background/50 shadow-lg">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-display font-medium text-muted-foreground">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IpadSection;
