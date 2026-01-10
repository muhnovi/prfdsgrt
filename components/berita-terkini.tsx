"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type BeritaItem, beritaData } from "@/lib/berita-terkini-data"

export default function BeritaTerkini() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedBerita, setSelectedBerita] = useState<BeritaItem | null>(null)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const berita = beritaData

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === berita.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, berita.length])

  const handlePrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? berita.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prevIndex) => (prevIndex === berita.length - 1 ? 0 : prevIndex + 1))
  }

  const openDetail = (item: BeritaItem) => {
    setSelectedBerita(item)
  }

  const closeDetail = () => {
    setSelectedBerita(null)
  }

  return (
    <>
      <section id="berita" className="py-24 sm:py-32 bg-gradient-to-b from-secondary/20 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Informasi Terbaru</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Berita Terkini Dukuh Garotan
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Update terbaru seputar kegiatan dan perkembangan di Dukuh Garotan
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {berita.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <article className="bg-card rounded-3xl overflow-hidden border border-border shadow-2xl">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image */}
                        <div className="aspect-video overflow-hidden bg-muted relative">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {item.date}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 sm:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                            {item.description}
                          </p>
                          <button
                            onClick={() => openDetail(item)}
                            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg group"
                          >
                            Baca Selengkapnya
                            <svg
                              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm text-foreground rounded-full p-4 hover:bg-background hover:scale-110 transition-all shadow-2xl z-10 border border-border"
              aria-label="Berita sebelumnya"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm text-foreground rounded-full p-4 hover:bg-background hover:scale-110 transition-all shadow-2xl z-10 border border-border"
              aria-label="Berita selanjutnya"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {berita.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlay(false)
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-12"
                      : "bg-muted-foreground/40 w-2.5 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Lihat berita ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedBerita && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeDetail}
        >
          <div
            className="bg-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedBerita.image || "/placeholder.svg"}
                alt={selectedBerita.title}
                className="w-full h-64 sm:h-96 object-cover rounded-t-3xl"
              />
              <button
                onClick={closeDetail}
                className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-3 hover:bg-background hover:scale-110 transition-all shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8 sm:p-12">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {selectedBerita.date}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{selectedBerita.title}</h3>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                {selectedBerita.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
