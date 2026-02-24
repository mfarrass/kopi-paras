'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Craft', href: '#craft' },
  { label: 'Origins', href: '#origins' },
  { label: 'Testimonials', href: '#testimonials' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex justify-center pointer-events-none">
        <div className="mt-5 w-full max-w-6xl px-6 md:px-8">
          <div className="pointer-events-auto flex items-center justify-between rounded-full border border-white/10 bg-kopi-deep/60 nav-blur px-4 py-2.5 shadow-soft-ambient">
            <button
              className="inline-flex items-center gap-2 group"
              onClick={() => setOpen(false)}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-kopi-gold to-kopi-cream flex items-center justify-center text-xs font-semibold tracking-[0.2em] text-kopi-ink">
                KP
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] uppercase tracking-[0.3em] text-kopi-cream/60">
                  Kopi Paras
                </span>
                <span className="text-sm font-medium text-kopi-cream">
                  Rituals in Every Pour
                </span>
              </div>
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-kopi-cream overflow-hidden group"
            >
              <motion.span
                initial={false}
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="relative block h-3 w-3"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-kopi-cream" />
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-kopi-cream" />
              </motion.span>
              <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-kopi-gold/0 via-kopi-gold/30 to-kopi-cream/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-kopi-ink/95 nav-blur"
          >
            <div className="flex h-full flex-col justify-between section-max-width py-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-kopi-gold to-kopi-cream flex items-center justify-center text-[10px] font-semibold tracking-[0.2em] text-kopi-ink">
                    KP
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
                      Kopi Paras
                    </span>
                    <span className="text-sm text-kopi-cream/80">
                      Jakarta — Since 2026
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-kopi-cream"
                >
                  <motion.span
                    initial={{ rotate: 45 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 45 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="relative block h-4 w-4"
                  >
                    <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-kopi-cream" />
                    <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rounded-full bg-kopi-cream" />
                  </motion.span>
                </button>
              </div>

              <nav className="space-y-8 md:space-y-10">
                <div className="space-y-4 md:space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 40, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.08,
                        ease: [0.19, 1, 0.22, 1]
                      }}
                      className="block text-4xl md:text-6xl font-medium tracking-tight text-kopi-cream leading-none group"
                    >
                      <span className="relative inline-block">
                        <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          {link.label}
                        </span>
                        <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-kopi-gold to-kopi-cream group-hover:scale-x-100 transition-transform duration-500" />
                      </span>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                  className="grid gap-6 text-sm text-kopi-cream/80 md:grid-cols-[1.4fr,1fr]"
                >
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/50">
                      Contact
                    </p>
                    <div className="space-y-1.5">
                      <a
                        href="mailto:hello@kopiparas.studio"
                        className="block hover:text-kopi-gold transition-colors"
                      >
                        hello@kopiparas.studio
                      </a>
                      <p className="text-kopi-cream/60">
                        Untuk kolaborasi, penjualan grosir, dan pengalaman merek.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/50">
                      Social
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {['Instagram', 'Behance', 'Dribbble', 'TikTok'].map(
                        (platform) => (
                          <a
                            key={platform}
                            href="#"
                            className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-kopi-cream/70 hover:border-kopi-gold hover:text-kopi-gold transition-colors"
                          >
                            {platform}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </nav>

              <div className="flex items-center justify-between text-xs text-kopi-cream/50">
                <span>© {new Date().getFullYear()} Kopi Paras. All rights reserved.</span>
                <span>Roasted in Jakarta · Crafted for the world.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

