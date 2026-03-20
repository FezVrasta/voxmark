import { motion } from "framer-motion";
import screenshotSong from "@/assets/screenshot-song.png";
import screenshotAnnotations from "@/assets/screenshot-annotations.png";
import screenshotLessons from "@/assets/screenshot-lessons.png";

const screens = [
  { src: screenshotSong, alt: "Song lyrics with colored background", label: "Lyrics View" },
  { src: screenshotAnnotations, alt: "Lyrics with vocal annotations and technique cues", label: "Annotations" },
  { src: screenshotLessons, alt: "Lesson recordings list with durations and markers", label: "Lessons" },
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
