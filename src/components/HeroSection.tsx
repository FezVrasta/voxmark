import { motion } from "framer-motion";
import appIcon from "@/assets/app-icon.png";
import { usePlatform } from "@/context/Platform";
import { shot } from "@/assets/v2";
import StoreButton from "./StoreButton";

const HeroSection = () => {
  const { platform } = usePlatform();
  return (
    <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={appIcon} alt="VoxMark app icon" className="w-14 h-14 rounded-xl" />
            <span className="font-display text-2xl font-bold text-foreground">VoxMark</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
            Your lyrics,{" "}
            <span className="text-gradient">your voice</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            A digital lyric book for vocalists. Add breathing marks and technique cues, separate any song into vocals and instruments, see where your voice sits, and record every take.
          </p>

          <StoreButton />

          <p className="mt-4 text-sm text-muted-foreground">
            {platform === "android" ? "Free · No ads · Open beta on Google Play" : "Free · No ads · No account required"}
          </p>
        </motion.div>

        <div className="flex justify-center items-end gap-4 md:gap-8">
          {[
            { src: shot(platform, "studio"), alt: "Studio sessions", delay: 0.2, scale: 0.9 },
            { src: shot(platform, "song-pitch"), alt: "Lyrics with live pitch", delay: 0.1, scale: 1 },
            { src: shot(platform, "mixer"), alt: "Mixer with separated parts", delay: 0.3, scale: 0.9 },
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
