'use client';

import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-full gradient-cta-bg animate-gradient-flow opacity-80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-kopi-ink via-transparent to-kopi-ink/95" />

      <div className="section-max-width">
        <div className="overflow-hidden rounded-[2.25rem] border border-white/15 bg-kopi-ink/60 px-6 py-12 md:px-14 md:py-16 shadow-soft-ambient">
          <div className="grid gap-10 md:grid-cols-[1.6fr,1fr] md:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/70">
                Tetesan pemanggangan mikro terbatas
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Join the{' '}
                <span className="bg-gradient-to-r from-kopi-gold to-kopi-cream bg-clip-text text-transparent">
                  Paras waitlist
                </span>{' '}
                and taste Scene One.
              </h2>
              <p className="max-w-xl text-sm md:text-base text-kopi-cream/75">
                Kami memanggang dalam jumlah kecil sekali sebulan, lalu mengirimkannya ke seluruh dunia dari Jakarta.
                Add your email and we&apos;ll ping you before the next chapter drops.
              </p>
            </div>

            <div className="space-y-4">
              <motion.form
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="relative flex flex-col gap-3 rounded-2xl border border-white/12 bg-kopi-deep/70 p-4 md:p-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="text-xs uppercase tracking-[0.24em] text-kopi-cream/60">
                  Email for roast alerts
                </label>
                <div className="flex flex-col gap-3 md:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="you@nightshift.studio"
                    className="flex-1 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-kopi-cream placeholder:text-kopi-cream/40 focus:border-kopi-gold focus:outline-none"
                  />
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center justify-center rounded-full bg-kopi-cream px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-kopi-ink"
                  >
                    Notify me
                  </motion.button>
                </div>
                <p className="text-[11px] text-kopi-cream/60">
                  Tidak ada spam, tidak ada kampanye beruntun—hanya satu email beruntun yang ditulis dengan indah.
                  kapan pun Paras siap.
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

