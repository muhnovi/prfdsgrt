"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    { label: "Penduduk", value: "497", icon: "👥" },
    { label: "Luas Dukuh", value: "12.5 km²", icon: "📍" },
    { label: "Berdiri Sejak", value: "1850", icon: "📅" },
    { label: "Kepala Dukuh", value: "Bpk. Warsito", icon: "👔" },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 sm:py-32 bg-background transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-4">
            <span className="text-sm font-medium text-primary">Tentang Kami</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Tentang Dukuh Garotan
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mengenal lebih dekat sejarah, budaya, dan kehidupan masyarakat desa kami di Gunung Kidul
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="relative group">
            <img
              src="/traditional-indonesian-village-in-yogyakarta-mount.jpg"
              alt="Budaya Desa"
              className="w-full rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -inset-4 border-2 border-border rounded-3xl -z-10 opacity-50"></div>
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dukuh Garotan berlokasi di Kalurahan Bendung, Kapanewon Semin, Gunung Kidul, Yogyakarta, dengan kekayaan
              budaya dan tradisi lokal yang masih dijaga hingga saat ini. Masyarakat kami berkomitmen untuk melestarikan
              warisan budaya Indonesia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dukuh Garotan terkenal dengan pertanian, peternakan, dan kehangatan gotong royong antar sesama warga
              masyarakat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {["Pertanian", "Peternakan", "Gotong Royong"].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-secondary border border-border"
                >
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group overflow-hidden bg-gradient-to-br from-secondary to-background border border-border rounded-3xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl sm:text-5xl mb-4">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
