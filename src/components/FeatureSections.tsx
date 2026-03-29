import { Music, Palette, Type, Clock, Mic, Bookmark, ListMusic, Timer, Volume2, Watch } from "lucide-react";
import FeatureShowcase from "./FeatureShowcase";
import WatchSection from "./WatchSection";

import screenshotSongsNew from "@/assets/screenshot-songs-new.png";
import screenshotSongPlain from "@/assets/screenshot-song-plain.png";
import screenshotAnnotatedSong from "@/assets/screenshot-annotated-song.png";
import screenshotAnnotateSheet from "@/assets/screenshot-annotate-sheet.png";
import screenshotLyricsPlayback from "@/assets/screenshot-lyrics-playback.png";
import screenshotSetlist from "@/assets/screenshot-setlist.png";
import screenshotSetlistCue from "@/assets/screenshot-setlist-cue.png";
import screenshotLessonRec from "@/assets/screenshot-lesson-rec.png";
import screenshotLessonDetail from "@/assets/screenshot-lesson-detail.png";
import stagePhoto from "@/assets/stage-photo.png";

const FeatureSections = () => {
  return (
    <>
      {/* Songs & Lyrics */}
      <FeatureShowcase
        title="Your entire songbook,"
        highlight="organized"
        description="Import or type your lyrics, add song details like BPM, key, and time signature — then browse everything in a clean, visual library."
        bullets={[
          { icon: Music, text: "Full song library with album art, BPM, key, and time signature metadata" },
          { icon: Type, text: "Large, readable lyrics designed for stage and practice — swipe between pages effortlessly" },
          { icon: Palette, text: "Pulls album art from Apple Music and lyrics from Genius — just search and import" },
          { icon: Music, text: "Share songs with bandmates or students so everyone stays on the same page" },
        ]}
        screenshots={[
          { src: screenshotSongsNew, alt: "Songs library with metadata" },
          { src: screenshotSongPlain, alt: "Clean lyrics view" },
        ]}
      />

      {/* Annotations */}
      <FeatureShowcase
        title="Mark every"
        highlight="nuance"
        description="Select any word or phrase and tag it with color-coded annotations for breathing, technique, dynamics, and emotion. Add voice notes for extra context."
        bullets={[
          { icon: Palette, text: "Color-coded tags: Breath, Technique, Dynamics, Emotion — each instantly recognizable" },
          { icon: Volume2, text: "Record voice notes on any annotation to capture coaching feedback" },
          { icon: Clock, text: "Tap-to-time sync lets lyrics auto-scroll at your own pace during playback" },
        ]}
        screenshots={[
          { src: screenshotAnnotatedSong, alt: "Song with colored annotations" },
          { src: screenshotAnnotateSheet, alt: "Annotation sheet with tag options" },
        ]}
        reverse
      />

      {/* Lessons */}
      <FeatureShowcase
        title="Record every"
        highlight="lesson"
        description="Capture vocal lessons with one tap. Add timestamped markers for warm-ups, exercises, songs, and key moments so you can jump right back to what matters."
        bullets={[
          { icon: Mic, text: "One-tap lesson recording with category markers: warm-up, exercise, song, explanation, break" },
          { icon: Bookmark, text: "Timestamped markers let you jump to any section of a past lesson instantly" },
          { icon: Clock, text: "Full waveform playback with 15-second skip and all your markers listed below" },
          { icon: Mic, text: "Share lesson recordings with your teacher or students for review anytime" },
        ]}
        screenshots={[
          { src: screenshotLessonRec, alt: "Lesson recording with markers" },
          { src: screenshotLessonDetail, alt: "Lesson playback with waveform" },
        ]}
      />

      {/* Setlists — last */}
      <FeatureShowcase
        title="Plan your"
        highlight="show"
        description="Build setlists with songs and stage cues, see estimated duration, tempo ranges, and keys at a glance. Then perform with a guided cue-by-cue playback."
        bullets={[
          { icon: ListMusic, text: "Combine songs and stage cues (walk on stage, introduce band) into a single flow" },
          { icon: Timer, text: "Estimated total duration, tempo range, and key overview per setlist" },
          { icon: Mic, text: "Cue-by-cue playback mode guides you through the entire show" },
          { icon: Palette, text: "Full dark-mode support keeps your screen glare-free on stage" },
        ]}
        screenshots={[
          { src: screenshotSetlist, alt: "Setlist overview with stats" },
          { src: screenshotSetlistCue, alt: "Stage cue during playback" },
        ]}
        reverse
        badge="New"
        backgroundImage={stagePhoto}
      />
    </>
  );
};

export default FeatureSections;
