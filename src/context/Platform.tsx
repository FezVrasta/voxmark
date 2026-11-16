import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Platform = "ios" | "android";

export const APP_STORE_URL = "https://apple.co/3NNYhjl";
export const ANDROID_TESTERS_URL = "https://play.google.com/apps/internaltest/4701440086323063382";

const KEY = "voxmark-platform";

const detect = (): Platform => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "ios" || saved === "android") return saved;
  } catch {}
  return /android/i.test(navigator.userAgent) ? "android" : "ios";
};

const PlatformContext = createContext<{ platform: Platform; setPlatform: (p: Platform) => void }>({
  platform: "ios",
  setPlatform: () => {},
});

export const PlatformProvider = ({ children }: { children: ReactNode }) => {
  const [platform, setPlatformState] = useState<Platform>(detect);

  const setPlatform = (p: Platform) => {
    setPlatformState(p);
    try {
      localStorage.setItem(KEY, p);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.dataset.platform = platform;
  }, [platform]);

  return <PlatformContext.Provider value={{ platform, setPlatform }}>{children}</PlatformContext.Provider>;
};

export const usePlatform = () => useContext(PlatformContext);
