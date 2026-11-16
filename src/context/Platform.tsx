import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

export type Platform = "ios" | "android";

export const APP_STORE_URL = "https://apple.co/3NNYhjl";
export const ANDROID_TESTERS_URL = "https://groups.google.com/g/voxmark-testers";
export const ANDROID_OPTIN_URL = "https://play.google.com/apps/testing/com.federicozivolo.voxmark";

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
  const [params, setParams] = useSearchParams();
  const fromUrl = params.get("platform");
  const platform: Platform = fromUrl === "ios" || fromUrl === "android" ? fromUrl : detect();

  const setPlatform = (p: Platform) => {
    try {
      localStorage.setItem(KEY, p);
    } catch {}
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("platform", p);
        return next;
      },
      { replace: true },
    );
  };

  useEffect(() => {
    document.documentElement.dataset.platform = platform;
  }, [platform]);

  return <PlatformContext.Provider value={{ platform, setPlatform }}>{children}</PlatformContext.Provider>;
};

export const usePlatform = () => useContext(PlatformContext);
