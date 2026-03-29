import { motion } from "framer-motion";
import { Watch, Music, Mic } from "lucide-react";
import screenshotWatchMain from "@/assets/screenshot-watch-main.png";
import screenshotWatchPlayback from "@/assets/screenshot-watch-playback.png";
import screenshotWatchSongs from "@/assets/screenshot-watch-songs.png";

const WatchSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Watch screenshots */}
          <div className="flex-1 flex justify-center items-end gap-3 md:gap-5">
            {[
              { src: screenshotWatchSongs, alt: "Watch songs list", delay: 0.2 },
              { src: screenshotWatchPlayback, alt: "Watch song playback", delay: 0.1 },
              { src: screenshotWatchMain, alt: "Watch recording", delay: 0.3 },
            ].map((screen, i) => (
              <motion.div
                key={screen.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: screen.delay }}
              >
                <div
                  className={`rounded-[2rem] border-[5px] border-muted overflow-hidden shadow-2xl ${
                    i === 1 ? "w-[130px] md:w-[160px]" : "w-[110px] md:w-[140px]"
                  }`}
                >
                  <img src={screen.src} alt={screen.alt} className="w-full" loading="lazy" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-lg"
          >
            <span className="inline-block text-xs font-display font-semibold tracking-widest uppercase text-primary mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
              New
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
              On your{" "}
              <span className="text-gradient">wrist</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Browse your songs, control playback, and record lessons — all from your Apple Watch. Plus, home screen widgets keep your next setlist one glance away.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Watch, text: "Full Apple Watch companion app — browse songs, see BPM and key, control playback" },
                { icon: Mic, text: "Start lesson recordings directly from your wrist with one tap" },
                { icon: Music, text: "Home screen widgets show your upcoming setlist and recent songs at a glance" },
              ].map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <b.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{b.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
