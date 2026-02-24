export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-kopi-ink/95 py-8">
      <div className="section-max-width flex flex-col gap-6 text-xs text-kopi-cream/60 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p>© {new Date().getFullYear()} Kopi Paras.</p>
          <p>Designed and roasted between Jakarta, Bandung, and the night shift internet.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-kopi-gold transition-colors">
            Brew Guide
          </a>
          <a href="#" className="hover:text-kopi-gold transition-colors">
            Wholesale
          </a>
          <a href="#" className="hover:text-kopi-gold transition-colors">
            Press Kit
          </a>
          <a href="#" className="hover:text-kopi-gold transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

