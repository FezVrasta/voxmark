import { motion } from "framer-motion";
import appIcon from "@/assets/app-icon.png";
import screenshotLyrics from "@/assets/screenshot-lyrics.png";
import screenshotSongs from "@/assets/screenshot-songs.png";
import screenshotLesson from "@/assets/screenshot-lesson.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 py-24 lg:py-32">
        {/* Top: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={appIcon} alt="VoxMark app icon" className="w-14 h-14 rounded-2xl" />
            <span className="font-display text-2xl font-bold text-foreground">VoxMark</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
            Your lyrics,{" "}
            <span className="text-gradient">your roadmap</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            A digital lyric book for vocalists and coaches. Add breathing marks, dynamics, and technique cues — then sync it all to your own pace.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 font-display font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            Download Free on App Store
          </a>

          <p className="mt-4 text-sm text-muted-foreground">
            Free · No ads · No account required
          </p>
        </motion.div>

        {/* Bottom: 3 Phone mockups */}
        <div className="flex justify-center items-end gap-4 md:gap-8">
          {[
            { src: screenshotSongs, alt: "Song library", delay: 0.2, scale: 0.9 },
            { src: screenshotLyrics, alt: "Lyrics with annotations", delay: 0.1, scale: 1 },
            { src: screenshotLesson, alt: "Lesson recorder", delay: 0.3, scale: 0.9 },
          ].map((phone, i) => (
            <motion.div
              key={phone.alt}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: phone.delay }}
              className="relative"
              style={{ transform: `scale(${phone.scale})` }}
            >
              {i === 1 && <div className="absolute -inset-8 bg-primary/10 rounded-full blur-[80px]" />}
              <div className={`relative w-[200px] md:w-[260px] phone-mockup ${i === 1 ? "animate-float" : ""}`}>
                <img src={phone.src} alt={phone.alt} className="w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
