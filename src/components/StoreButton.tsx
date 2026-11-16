import { usePlatform, APP_STORE_URL, ANDROID_TESTERS_URL } from "@/context/Platform";

const cls =
  "inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 font-display font-semibold text-base hover:opacity-90 transition-opacity";

const StoreButton = ({ short = false }: { short?: boolean }) => {
  const { platform } = usePlatform();

  if (platform === "android") {
    return (
      <a href={ANDROID_TESTERS_URL} target="_blank" rel="noopener noreferrer" className={cls}>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l.1.1 9.9-9.9v-.2L3.7 2.2l-.1.1zM17 15.3l-3.3-3.3v-.2L17 8.5l.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2h-.1zM17.1 15.2 13.7 11.9 3.6 22c.4.4 1 .4 1.7.1l11.8-6.9M17.1 8.6 5.3 1.8C4.6 1.4 4 1.5 3.6 1.9l10.1 10.1 3.4-3.4z" />
        </svg>
        {short ? "Join the Android beta" : "Join the Android beta on Google Play"}
      </a>
    );
  }

  return (
    <a href={APP_STORE_URL} className={cls}>
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
      </svg>
      {short ? "Get it on the App Store" : "Download Free on App Store"}
    </a>
  );
};

export default StoreButton;
