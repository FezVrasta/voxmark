import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ipadSongs from "@/assets/ipad-songs.png";
import ipadStudio from "@/assets/ipad-studio.png";

const tabs = [
  { id: "songs", label: "Songs & Annotations", src: ipadSongs, alt: "iPad song library with annotated lyrics" },
  { id: "studio", label: "Studio", src: ipadStudio, alt: "iPad studio recording with waveform" },
];

const IpadSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-card/30 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
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

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-display font-medium transition-colors ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Screenshot display */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-border bg-background/50 shadow-lg w-fit mx-auto max-h-[70vh]">
            <AnimatePresence mode="wait">
              <motion.img
                key={tabs[active].id}
                src={tabs[active].src}
                alt={tabs[active].alt}
                className="h-auto max-h-[70vh] w-auto max-w-full"
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IpadSection;
