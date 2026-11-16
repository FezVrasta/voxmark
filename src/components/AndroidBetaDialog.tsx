import type { ReactNode } from "react";
import { ANDROID_TESTERS_URL, ANDROID_OPTIN_URL } from "@/context/Platform";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const link = "font-semibold text-foreground underline underline-offset-4 hover:opacity-80";

const AndroidBetaDialog = ({ children }: { children: ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle className="font-display">Join the Android beta</DialogTitle>
        <DialogDescription>Two steps, with the Google account you use on your phone.</DialogDescription>
      </DialogHeader>
      <ol className="list-decimal space-y-3 pl-5 text-sm text-muted-foreground">
        <li>
          Join the{" "}
          <a href={ANDROID_TESTERS_URL} target="_blank" rel="noopener noreferrer" className={link}>
            VoxMark testers group
          </a>
          .
        </li>
        <li>
          Opt in to the test on{" "}
          <a href={ANDROID_OPTIN_URL} target="_blank" rel="noopener noreferrer" className={link}>
            Google Play
          </a>
          , then install VoxMark from the Play Store.
        </li>
      </ol>
    </DialogContent>
  </Dialog>
);

export default AndroidBetaDialog;
