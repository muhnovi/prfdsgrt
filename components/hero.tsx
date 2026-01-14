export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background pt-32 pb-20 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-primary/20 to-accent/30 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Dukuh Garotan</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Selamat Datang
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Dukuh Garotan adalah dukuh yang indah dengan keindahan alam dan kekayaan budaya lokal yang masih dijaga
                hingga saat ini.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://penduduk.garotanmanunggal.web.id"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Data Penduduk
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://sejarah.garotanmanunggal.web.id"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Sejarah Garotan
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/icon.png"
                alt="Desa Bendung"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-border rounded-3xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
