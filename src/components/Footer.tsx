const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display font-semibold text-foreground">VoxMark</span>
        <span>© {new Date().getFullYear()} VoxMark. Free forever, no ads.</span>
      </div>
    </footer>
  );
};

export default Footer;
