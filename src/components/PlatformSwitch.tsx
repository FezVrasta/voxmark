import { usePlatform, type Platform } from "@/context/Platform";

const options: { value: Platform; label: string }[] = [
  { value: "ios", label: "iPhone" },
  { value: "android", label: "Android" },
];

const PlatformSwitch = () => {
  const { platform, setPlatform } = usePlatform();
  return (
    <div className="fixed top-4 right-4 z-50 flex rounded-full border border-border bg-background/80 backdrop-blur p-1" role="group" aria-label="Platform">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setPlatform(o.value)}
          aria-pressed={platform === o.value}
          className={`px-4 py-1.5 rounded-full text-sm font-display font-semibold transition-colors ${
            platform === o.value ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};

export default PlatformSwitch;
