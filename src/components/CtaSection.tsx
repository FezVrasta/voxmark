import { motion } from "framer-motion";
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
            <img src={appIcon} alt="VoxMark" className="w-20 h-20 rounded-3xl mx-auto mb-8 shadow-glow" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ready to own your performance?
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
              Download VoxMark for free and turn your lyrics into a living, breathing vocal guide.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 font-display font-semibold text-base hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Get it on the App Store
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
