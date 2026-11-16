import { Link } from "react-router-dom";
import AndroidBetaDialog from "@/components/AndroidBetaDialog";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display font-semibold text-foreground">VoxMark</span>
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} VoxMark. Free, no ads.</span>
          <AndroidBetaDialog>
            <button type="button" className="hover:text-foreground transition-colors">Android beta</button>
          </AndroidBetaDialog>
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
