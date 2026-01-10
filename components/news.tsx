"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import NewsDetailModal from "../components/news-detail-model"
import { type NewsItem, newsData } from "@/lib/umkm-data"

interface NewsProps {
  initialNewsSlug?: string | null
}

export default function News({ initialNewsSlug }: NewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const news = newsData

  useEffect(() => {
    if (initialNewsSlug) {
      const foundNews = news.find((item) => item.slug === initialNewsSlug)
      if (foundNews) {
        setSelectedNews(foundNews)
        setIsDetailOpen(true)
      }
    }
  }, [initialNewsSlug, news])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? news.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === news.length - 1 ? 0 : prevIndex + 1))
  }

  const openDetail = (item: NewsItem) => {
    setSelectedNews(item)
    setIsDetailOpen(true)
  }

  return (
    <>
      <section id="news" className="py-24 sm:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-4">
              <span className="text-sm font-medium text-primary">UMKM Lokal</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              UMKM Dukuh Garotan
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Informasi terbaru seputar kegiatan UMKM di Dukuh Garotan serta lokasi usaha mereka
            </p>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article
                key={index}
                className="group bg-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border hover:scale-[1.02]"
              >
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <img
                    src={item.image || "/placeholder.svg?height=300&width=500&query=umkm desa"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-sm text-primary font-semibold mb-3">{item.date}</p>
                  <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base line-clamp-3 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => openDetail(item)}
                      className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all cursor-pointer group/btn"
                    >
                      Baca Selengkapnya
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                    {item.location && (
                      <button
                        onClick={() => window.open(item.mapsUrl, "_blank")}
                        className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all cursor-pointer group/btn"
                      >
                        <MapPin className="w-4 h-4" />
                        Lihat Lokasi
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {news.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <article className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg">
                        <div className="aspect-video overflow-hidden bg-muted">
                          <img
                            src={item.image || "/placeholder.svg?height=300&width=500&query=umkm desa"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <p className="text-sm text-primary font-semibold mb-3">{item.date}</p>
                          <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{item.description}</p>
                          <div className="flex flex-col gap-3">
                            <button
                              onClick={() => openDetail(item)}
                              className="inline-flex items-center text-primary font-semibold gap-2 cursor-pointer"
                            >
                              Baca Selengkapnya
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </button>
                            {item.location && (
                              <button
                                onClick={() => window.open(item.mapsUrl, "_blank")}
                                className="inline-flex items-center text-accent font-semibold gap-2 cursor-pointer"
                              >
                                <MapPin className="w-4 h-4" />
                                Lihat Lokasi
                              </button>
                            )}
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-primary-foreground rounded-full p-3 hover:bg-primary/90 hover:scale-110 transition-all shadow-xl z-10"
                aria-label="Berita sebelumnya"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-primary-foreground rounded-full p-3 hover:bg-primary/90 hover:scale-110 transition-all shadow-xl z-10"
                aria-label="Berita selanjutnya"
              >
                <ChevronRight size={24} />
              </button>

              <div className="flex justify-center gap-2 mt-8">
                {news.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/40 w-2 hover:bg-muted-foreground"
                    }`}
                    aria-label={`Lihat berita ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsDetailModal news={selectedNews} isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)} />
    </>
  )
}
