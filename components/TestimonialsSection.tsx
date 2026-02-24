'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  {
    quote:
      'Kopi Paras terasa seperti adegan pembuka yang tak bisa dilewati. Ia dengan tenang mengatur suasana untuk semua yang saya rancang setelahnya.',
    name: 'Alya Pratama',
    role: 'Brand Designer, Studio Muda',
    context: 'Night-shift identity sprints · 11:47 PM'
  },
  {
    quote:
      'Ini memiliki kejernihan yang menenangkan—seperti mode gelap untuk otak Anda. Tim saya benar-benar mengganti nama presentasi stand-up kami menjadi "Paras sync."',
    name: 'Rafi Ghani',
    role: 'Lead Product Engineer, Loomlane',
    context: 'Refactor sessions · 9:13 AM'
  },
  {
    quote:
      'Aku berhenti memikirkan tentang "minum kopi" dan mulai berpikir dalam konteks adegan.Kopi Paras adalah Adegan Satu.',
    name: 'Marta De Souza',
    role: 'Creative Director, Fieldwave',
    context: 'Pitch decks & storyboards · 3:02 PM'
  }
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const active = slides[index];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-kopi-deep via-kopi-ink to-kopi-ink" />

      <div className="section-max-width">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
              Field notes
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Kopi Paras in the wild.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-kopi-cream/60">
            <span>Autoplay</span>
            <span className="relative inline-flex h-1 w-10 overflow-hidden rounded-full bg-kopi-deep">
              <span className="absolute inset-y-0 left-0 w-1/2 bg-kopi-gold/70 animate-[gradient-flow_6s_ease-in-out_infinite]" />
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center overflow-hidden rounded-[2.25rem] border border-white/12 bg-[radial-gradient(circle_at_0_0,#f6ede311,transparent_55%),radial-gradient(circle_at_100%_100%,#c79a5a22,transparent_55%)] px-6 py-10 md:px-16 md:py-16 shadow-soft-ambient">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
              Testimonial · {index + 1}/{slides.length}
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-kopi-cream">
              “{active.quote}”
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-kopi-cream">
                  {active.name}
                </p>
                <p className="text-xs text-kopi-cream/60">{active.role}</p>
              </div>
              <p className="text-xs text-kopi-cream/50">{active.context}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 -z-10 mix-blend-overlay opacity-60">
          <div className="animate-blob absolute -left-32 top-10 h-40 w-40 rounded-full bg-kopi-gold/25 blur-3xl" />
          <div className="animate-blob absolute -right-32 bottom-10 h-52 w-52 rounded-full bg-kopi-cream/10 blur-3xl" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-kopi-ink/80 to-transparent" />

        <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-4 text-xs text-kopi-cream/60">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group"
              >
                <span
                  className={`block h-1 w-8 rounded-full bg-kopi-deep transition-colors ${
                    i === index ? 'bg-kopi-gold' : 'group-hover:bg-kopi-cream/40'
                  }`}
                />
              </button>
            ))}
          </div>
          <span>Swipe to move · Auto-advancing</span>
        </div>
      </div>
    </section>
  );
}

