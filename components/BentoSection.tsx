'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Slow-roasted ritual',
    description:
      'Setiap batch dipanggang dalam jumlah sangat kecil, memberikan setiap biji kopi ruang untuk berkembang tanpa mengurangi kualitasnya.',
    accent: 'Jendela istirahat 12 jam',
    span: 'md:col-span-2',
    imageHint: 'Uap mengepul di atas kopi seduh manual, pencahayaan bernuansa noir yang gelap.'
  },
  {
    title: 'Asal-usul di dataran tinggi Indonesia',
    description:
      'Bersumber dari tanah vulkanik di Jawa Barat dan Sumatra, dikalibrasi untuk menghasilkan rasa manis seperti sirup.',
    accent: 'Direct-trade partners',
    span: '',
    imageHint: 'Garis topografi dan label asal.'
  },
  {
    title: 'Dirancang untuk pekerjaan yang membutuhkan konsentrasi tinggi.',
    description:
      'Profil rasa yang tetap terasa tetapi tidak pernah berlebihan—sempurna untuk sesi yang membutuhkan konsentrasi tinggi.',
    accent: 'Aroma kakao, cengkeh, dan gula aren.',
    span: '',
    imageHint: 'Meja dengan cahaya laptop dan lingkaran cahaya cangkir.'
  },
  {
    title: 'Untuk para pekerja kreatif shift malam',
    description:
      'Lebih sedikit benturan, lebih banyak luncuran. Kopi Paras disetel untuk menjaga busur Anda tetap stabil dari jam 10 malam hingga 2 pagi.',
    accent: 'Direkomendasikan untuk ritual malam hari',
    span: 'md:col-span-2',
    imageHint: 'Bokeh lampu kota dengan satu cangkir yang fokus.'
  }
];

export function BentoSection() {
  return (
    <section
      id="craft"
      className="section-max-width py-24 md:py-32"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-end">
        <div className="space-y-4 md:flex-1">
          <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
            Sistem Kopi Paras Setiap batch diroast dalam jumlah kecil, memberikan setiap biji ruang untuk berkembang tanpa mengurangi kualitasnya.
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Dibuat seperti sebuah sistem desain,
            <span className="block text-kopi-gold">terasa seperti sebuah surat cinta.
            </span>
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base text-kopi-cream/75 md:flex-1">
          Kopi Paras dibangun untuk desainer, pengembang, dan pembuat di malam hari. Setiap sentuhan—dari kemasan hingga ekstraksi—telah dirancang seperti antarmuka: sengaja, minimal,
          dan diam-diam obsesif.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: index * 0.06, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/3 via-white/1 to-transparent p-5 md:p-6 backdrop-blur-sm ${card.span}`}
          >
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-kopi-cream/70">
                  Kopi · Paras
                </span>
              </div>
              <p className="text-sm text-kopi-cream/75">{card.description}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-kopi-gold">
                {card.accent}
              </p>
            </div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
              initial={{ scale: 1.05, opacity: 0.4 }}
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="absolute -inset-10 bg-[radial-gradient(circle_at_0_0,#c79a5a33,transparent_55%),radial-gradient(circle_at_100%_100%,#f6ede322,transparent_55%)]" />
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

