'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence
} from 'framer-motion';

const FRAME_COUNT = 111; // adjust to match your sequence length

const getFrameFileName = (index: number) =>
  `/sequence/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvas: HTMLCanvasElement
) {
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;

  const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
  const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(
    '--bg-kopi'
  );
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
}

export function SequenceScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Ensure the title block is fully visible at initial load (scroll = 0),
  // then gracefully fades out as the user scrolls into the sequence.
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [1, 1, 1, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.22, 0.32, 0.42, 0.5], [0, 1, 1, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.48, 0.58, 0.68, 0.76], [0, 0.9, 0.9, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.72, 0.82, 0.96, 1], [0, 1, 1, 0.4]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const ratio = window.devicePixelRatio || 1;

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const images: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    imagesRef.current = images;

    let loaded = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameFileName(i);
      img.onload = () => {
        if (!isMounted) return;
        images[i - 1] = img;
        loaded += 1;
        setLoadedCount(loaded);

        if (loaded === 1) {
          // Draw first frame as soon as it is ready
          const canvas = canvasRef.current;
          const ctx = canvas?.getContext('2d');
          if (canvas && ctx) {
            drawImageCover(ctx, img, canvas);
          }
        }

        if (loaded >= Math.min(FRAME_COUNT, 24)) {
          // Once enough frames are ready, we can consider the hero ready
          setReady(true);
        }
      };
      img.onerror = () => {
        loaded += 1;
        setLoadedCount(loaded);
      };
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      const canvas = canvasRef.current;
      const images = imagesRef.current;
      if (!canvas || !images.length) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const frameIndex =
        Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(value * (FRAME_COUNT - 1))));
      const currentImage = images[frameIndex];

      if (currentImage) {
        drawImageCover(ctx, currentImage, canvas);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  const progress = loadedCount / FRAME_COUNT;

  // Safety: if all frames have been attempted (even if some 404),
  // force-hide the preloader so the experience never gets stuck.
  useEffect(() => {
    if (loadedCount >= FRAME_COUNT && !ready) {
      setReady(true);
    }
  }, [loadedCount, ready]);

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-kopi-ink"
      aria-label="Kopi Paras hero scrollytelling"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />

        {/* Text overlays */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {/* Pure flex centering so the hero copy sits exactly in the middle of the viewport */}
          <div className="section-max-width">
            <motion.div
              style={{ opacity: titleOpacity }}
              className="text-center space-y-6 md:translate-y-24 lg:translate-y-72"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
                Kopi Paras · Scrollytelling Roast
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-kopi-cream">
              Di mana setiap tuangan
                <span className="block text-kopi-gold">membawa sebuah cerita.</span>
              </h1>
              <p className="mx-auto max-w-xl text-sm md:text-base text-kopi-cream/75">
              Sebuah perjalanan sinematik dari biji kopi hingga secangkir kopi—gulir ke bawah untuk menyelami ritual,tekstur, dan atmosfer di balik Kopi Paras.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: leftOpacity }}
              className="mt-8 md:mt-16 max-w-md text-left"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
                30% Scroll
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                Dibuat perlahan, disajikan seketika.
              </h2>
              <p className="mt-3 text-sm md:text-base text-kopi-cream/75">
              Biji kopi pilihan, pemanggangan presisi, dan profil air yang disesuaikan untuk iklim tropis.
              Setiap detail dirancang untuk tegukan pertama yang tak terlupakan.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: rightOpacity }}
              className="mt-8 md:mt-20 md:ml-auto max-w-md text-right"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
                60% Scroll
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              Moments, suspended dalam crema.
              </h2>
              <p className="mt-3 text-sm md:text-base text-kopi-cream/75">
              Dari ritual pagi hingga pengeditan tengah malam, Kopi Paras adalah arsitektur tenang di balik jam-jam paling fokus Anda.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: ctaOpacity }}
              className="mt-10 flex flex-col items-center justify-center text-center gap-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
                90% Scroll
              </p>
              <h2 className="max-w-xl text-2xl md:text-4xl font-semibold tracking-tight">
              Siap untuk merasakan cerita?
              </h2>
              <div className="flex flex-col items-center gap-3">
                <MagneticButton />
                <p className="max-w-xs text-[13px] text-kopi-cream/70">
                Rilis micro-roast bulanan. Bergabunglah dengan daftar tunggu dan jadilah orang pertama untuk menyimak bab berikutnya.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Preloader */}
        <AnimatePresence>
          {!ready && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0 z-20 flex items-center justify-center bg-kopi-ink"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-kopi-gold to-kopi-cream flex items-center justify-center text-xs font-semibold tracking-[0.2em] text-kopi-ink">
                  KP
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-kopi-cream/60">
                    Preheating the ritual
                  </p>
                  <div className="h-1 w-40 overflow-hidden rounded-full bg-kopi-deep">
                    <motion.div
                      className="h-full w-full bg-gradient-to-r from-kopi-gold via-kopi-cream to-kopi-gold"
                      initial={{ x: '-100%' }}
                      animate={{ x: 0 }}
                      transition={{
                        ease: 'easeInOut',
                        duration: 1.4,
                        repeat: Infinity
                      }}
                      style={{ scaleX: progress || 0.2, originX: 0 }}
                    />
                  </div>
                  <p className="text-xs text-kopi-cream/60">
                    Loading frames {Math.min(loadedCount, FRAME_COUNT)} / {FRAME_COUNT}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function MagneticButton() {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    const handleMove = (event: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      setPos({ x, y });
    };

    const handleLeave = () => {
      setPos({ x: 0, y: 0 });
    };

    button.addEventListener('mousemove', handleMove);
    button.addEventListener('mouseleave', handleLeave);
    return () => {
      button.removeEventListener('mousemove', handleMove);
      button.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <motion.button
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.96 }}
      className="relative magnetic-area inline-flex items-center gap-3 rounded-full bg-kopi-cream text-kopi-ink px-7 py-3 text-sm font-medium tracking-[0.2em] uppercase overflow-hidden shadow-soft-ambient"
      style={{
        transform: `translate3d(${pos.x * 0.15}px, ${pos.y * 0.15}px, 0)`
      }}
    >
      <span className="relative z-10">Join the roastlist</span>
      <motion.span
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="relative z-10 h-6 w-6 rounded-full border border-kopi-ink/30 flex items-center justify-center"
      >
        <span className="h-2 w-2 rounded-full bg-kopi-ink" />
      </motion.span>
      <span className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-kopi-gold/0 via-kopi-gold/40 to-kopi-gold/0 opacity-0 transition-opacity duration-500 hover:opacity-100" />
    </motion.button>
  );
}

