import { Layers, SlidersHorizontal, Disc3, Activity, Target, Car, Music, Palette, Type, Clock, Mic, Bookmark, ListMusic, Timer, Volume2, Watch } from "lucide-react";
import FeatureShowcase from "./FeatureShowcase";
import WatchSection from "./WatchSection";
import ExportSection from "./ExportSection";
import IpadSection from "./IpadSection";

import screenshotSongsNew from "@/assets/screenshot-songs-new.png";
import screenshotSongPlain from "@/assets/screenshot-song-plain.png";
import screenshotAnnotatedSong from "@/assets/screenshot-annotated-song.png";
import screenshotAnnotateSheet from "@/assets/screenshot-annotate-sheet.png";
import screenshotLyricsPlayback from "@/assets/screenshot-lyrics-playback.png";
import screenshotSetlist from "@/assets/screenshot-setlist.png";
import screenshotSetlistCue from "@/assets/screenshot-setlist-cue.png";
import screenshotLessonRec from "@/assets/screenshot-lesson-rec.png";
import screenshotLessonDetail from "@/assets/screenshot-lesson-detail.png";
import { usePlatform } from "@/context/Platform";
import { shot } from "@/assets/v2";
import stagePhoto from "@/assets/stage-photo.png";

const FeatureSections = () => {
  const { platform } = usePlatform();
  const ios = platform === "ios";
  const s = (name: Parameters<typeof shot>[1]) => shot(platform, name);
  const car = ios ? "CarPlay" : "Android Auto";

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
          { src: ios ? screenshotSongsNew : s("new-song"), alt: "Songs library with metadata" },
          { src: ios ? screenshotSongPlain : s("song-pitch"), alt: "Clean lyrics view" },
        ]}
      />

      <FeatureShowcase
        title="Take any song"
        highlight="apart"
        description="Pick an audio file and VoxMark separates the vocals, drums, bass and the rest on your device. Then practice against a mixer with a fader for every part."
        bullets={[
          { icon: Layers, text: "Separate vocals and instruments in one pass, no upload needed" },
          { icon: SlidersHorizontal, text: "Mute, solo and balance each part, and shift the key in semitones to fit your voice" },
          { icon: Disc3, text: "Recognizes the track and fills in title, artist, cover, key and tempo" },
        ]}
        screenshots={[
          { src: s("mixer"), alt: "Mixer with a fader per part" },
          { src: s("new-song"), alt: "New song with cover and details" },
        ]}
        reverse
        badge="New in 2.x"
      />

      <FeatureShowcase
        title="See where your voice"
        highlight="sits"
        description="Sing along and watch your pitch against every line of the lyrics. Voice Fit compares your range to the song and tells you which key makes it comfortable."
        bullets={[
          { icon: Activity, text: "Live pitch on the lyrics, in cents from the target note" },
          { icon: Target, text: "Voice Fit shows your core range, the song's tessitura and the key change that suits you" },
          { icon: Music, text: "Detected key and tempo for any song you import" },
        ]}
        screenshots={[
          { src: s("song-pitch"), alt: "Lyrics with live pitch" },
          { src: s("voice-fit"), alt: "Voice Fit range and tessitura" },
        ]}
        badge="New in 2.x"
      />

      {/* Annotations */}
      <FeatureShowcase
        title="Annotate, rehearse."
        highlight="Repeat"
        description="Select any word or phrase and tag it with color-coded annotations for breathing, technique, dynamics, and emotion. Add voice notes for extra context."
        bullets={[
          { icon: Palette, text: "Color-coded tags: Breath, Technique, Dynamics, Emotion — each instantly recognizable" },
          { icon: Volume2, text: "Record voice notes on any annotation to capture coaching feedback" },
          { icon: Clock, text: "Tap-to-time sync lets lyrics auto-scroll at your own pace during playback" },
        ]}
        screenshots={[
          ...(ios
            ? [
                { src: screenshotAnnotatedSong, alt: "Song with colored annotations" },
                { src: screenshotAnnotateSheet, alt: "Annotation sheet with tag options" },
              ]
            : [{ src: s("song-pitch"), alt: "Song with colored annotations" }]),
        ]}
        reverse
        darkBg
      />

      {/* Studio */}
      <FeatureShowcase
        title="Your personal"
        highlight="studio"
        description="Record lessons, practice sessions, or gigs with one tap. Add timestamped markers so you can jump back to any moment instantly."
        bullets={[
          { icon: Mic, text: "One-tap recording with category markers — warm-up, exercise, song, note, and more" },
          { icon: Clock, text: "Interactive waveform playback with long-press zoom, precision scrubbing, and 15-second skip" },
          { icon: Bookmark, text: "Share recordings with your teacher or students for review anytime" },
        ]}
        screenshots={[
          ...(ios
            ? [
                { src: screenshotLessonRec, alt: "Lesson recording with markers" },
                { src: screenshotLessonDetail, alt: "Lesson playback with waveform" },
              ]
            : [{ src: s("studio"), alt: "Studio sessions" }]),
        ]}
      />

      {/* Export — card grid layout for visual break */}
      <ExportSection />

      {/* Apple Watch & Widgets */}
      {ios && <WatchSection />}

      {/* iPad */}
      {ios && <IpadSection />}

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
          { icon: Car, text: `Hear then sing from ${car}: the next line plays, then it's your turn` },
        ]}
        screenshots={[
          ...(ios
            ? [
                { src: screenshotSetlist, alt: "Setlist overview with stats" },
                { src: screenshotSetlistCue, alt: "Stage cue during playback" },
              ]
            : [{ src: s("setlists"), alt: "Setlists" }]),
        ]}
        badge="New"
        backgroundImage={stagePhoto}
      />
    </>
  );
};

export default FeatureSections;
