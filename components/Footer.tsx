export function Footer() {
  return (
    <footer className="border-t border-border bg-ink-2 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-accent text-ink font-display font-semibold">
              F
            </span>
            <span className="font-display text-xl">furnuovo</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted leading-relaxed">
            İç mimari uygulamaları ve fuar standı tasarımında konsept'ten
            teslimata uçtan uca üretim atölyesi. Her proje, ilk eskizden son
            vidaya kadar aynı ekiple yürütülür.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted">
            İletişim
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:info@furnuovo.com" className="hover:text-accent">
                info@furnuovo.com
              </a>
            </li>
            <li>
              <a href="tel:+905392920144" className="hover:text-accent">
                +90 539 292 01 44
              </a>
            </li>
            <li className="text-muted">İstanbul, Türkiye</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted">
            Sosyal
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-accent">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Behance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-muted">
          <span>© {new Date().getFullYear()} Furnuovo. Tüm hakları saklıdır.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Yeni proje görüşmelerine açığız
          </span>
        </div>
      </div>
    </footer>
  );
}
