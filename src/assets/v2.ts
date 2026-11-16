import type { Platform } from "@/context/Platform";

const files = import.meta.glob("./v2/*.png", { eager: true, import: "default" }) as Record<string, string>;

const names = {
  "song-pitch": "01-song-pitch",
  mixer: "02-mixer",
  "voice-fit": "03-voice-fit",
  studio: "04-studio-sessions",
  "new-song": "05-new-song",
  setlists: "06-setlists",
} as const;

export type Shot = keyof typeof names;

export const shot = (platform: Platform, name: Shot) => files[`./v2/${platform}-${names[name]}.png`];
