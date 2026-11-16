import { motion } from "framer-motion";
import StoreButton from "./StoreButton";
import appIcon from "@/assets/app-icon.png";

const CtaSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-card-gradient border border-border p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
          </div>

          <div className="relative z-10">
            <img src={appIcon} alt="VoxMark" className="w-20 h-20 rounded-2xl mx-auto mb-8 shadow-glow" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ready to own your performance?
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
              Download VoxMark for free and turn your lyrics into a living, breathing vocal guide.
            </p>
            <StoreButton short />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
