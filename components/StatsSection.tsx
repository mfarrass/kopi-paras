'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: 'Biji kopi dicelupkan untuk menentukan profil Paras.', value: 432 },
  { label: 'Jendela ekstraksi rata-rata detik yang kami sesuaikan', value: 29 },
  { label: 'Studio desain & perusahaan pengembang sudah mulai menyiapkan Kopi Paras.', value: 37, suffix: '+' }
];

function useCountUp(target: number, inView: boolean, duration = 1.4) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();

    const loop = (time: number) => {
      const progress = Math.min((time - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(loop);
      }
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, inView, duration]);

  return value;
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.4, once: false });

  return (
    <section
      id="origins"
      className="section-max-width py-20 md:py-24"
    >
      <div className="rounded-3xl border border-white/10 bg-kopi-deep/70 px-6 py-8 md:px-10 md:py-12 shadow-soft-ambient">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 md:max-w-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
              Angka-angka di balik ritual tersebut
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Data, disesuaikan dengan rasa.
            </h2>
            <p className="text-sm md:text-base text-kopi-cream/70">
              Kopi Paras disempurnakan dengan catatan pencicipan dari barista, pengembang, dan desainer produk.

              Kami menyempurnakan profil di mana kejernihan, kemanisan, dan fokus beririsan.
            </p>
          </div>

          <div
            ref={ref}
            className="grid w-full gap-6 md:max-w-xl md:grid-cols-3"
          >
            {stats.map((stat, index) => {
              const value = useCountUp(stat.value, isInView);
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="space-y-2"
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight text-kopi-cream">
                    {value}
                    {stat.suffix}
                  </div>
                  <p className="text-xs text-kopi-cream/60">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

