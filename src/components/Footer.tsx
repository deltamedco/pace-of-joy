const Footer = () => (
  <footer className="py-8 bg-background border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-lg font-bold text-primary tracking-wider">ARYN.</p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} ARYN Coaching. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
