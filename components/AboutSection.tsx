import { TextReveal } from '@/components/TextReveal';

export function AboutSection() {
  return (
    <section
      id="story"
      className="section-max-width py-24 md:py-32"
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-start">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-kopi-cream/60">
            About Kopi Paras
          </p>
          <TextReveal
            text="Kopi Paras adalah merek kopi untuk orang-orang yang memperlakukan alur kerja mereka seperti sebuah film: babak pertama dimulai dengan tuangan pertama."
            className="text-2xl md:text-3xl leading-tight tracking-tight text-kopi-cream"
          />
          <TextReveal
            text="Kami bekerja sama dengan petani kecil dan memikirkan kurva ekstraksi sehingga setiap cangkir terasa seperti sebuah adegan yang ingin Anda tinggal di dalamnya sebentar lebih lama."
            className="text-sm md:text-base text-kopi-cream/75 max-w-xl"
          />
        </div>
        <div className="space-y-4 text-sm text-kopi-cream/70">
          <p>
            Setiap rilis Kopi Paras dianggap seperti sebuah tetes: sebuah profil pemanggangan edisi terbatas, 
            desain kemasan, dan sebuah cerita kecil yang berkembang di dalam kotak, kartu, dan web.
          </p>
          <p>
            Pengalaman scrollytelling yang baru saja Anda lewati lebih dari sekedar animasi hero—
            itu adalah log pemanggangan kami, diterjemahkan secara sensoris ke dalam cahaya, gerakan, dan tekstur.
          </p>
          <p>
            Tuangkan seperti Anda akan memecahkan bug: perlahan, dengan penasaran, dan dengan perhatian pada setiap baris.
          </p>
        </div>
      </div>
    </section>
  );
}

