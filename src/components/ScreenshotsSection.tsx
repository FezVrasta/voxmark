import { motion } from "framer-motion";
import screenshotSongs from "@/assets/screenshot-songs.png";
import screenshotLesson from "@/assets/screenshot-lesson.png";
import screenshotNewSong from "@/assets/screenshot-newsong.png";

const screens = [
  { src: screenshotSongs, alt: "Song library with album art and lyrics preview", label: "Song Library" },
  { src: screenshotLesson, alt: "Lesson recording with timestamped markers", label: "Lesson Recorder" },
  { src: screenshotNewSong, alt: "Add new song with lyrics import", label: "Quick Add" },
];

const ScreenshotsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-hero overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            See it in action
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From organizing your setlist to recording lessons — everything in one place.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="w-[220px] md:w-[250px] phone-mockup mb-4">
                <img src={screen.src} alt={screen.alt} className="w-full" />
              </div>
              <span className="text-sm font-display font-medium text-muted-foreground">{screen.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
