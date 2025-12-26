"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

interface TourismSpot {
  id: number
  name: string
  description: string
  lat: number
  lng: number
  category: string
  image?: string
}

const tourismSpots: TourismSpot[] = [
  {
    id: 1,
    name: "Umbul Pok Munggur",
    description: "Sumber air alami yang menyegarkan dengan pemandangan hijau di sekitarnya.",
    lat: -7.8413036,
    lng: 110.7084905,
    category: "Wisata",
    image: "/umbul-pok-munggur.jpg",
  },
]

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const markers = useRef<any[]>([])
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null)
  const listContainer = useRef<HTMLDivElement>(null)
  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)
  const wisataSection = useRef<HTMLElement>(null)
  const mapSection = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
    script.async = true
    script.onload = initMap
    document.body.appendChild(script)

    const checkScroll = () => {
      if (listContainer.current) {
        const { scrollTop, scrollHeight, clientHeight } = listContainer.current
        setCanScrollUp(scrollTop > 0)
        setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10)
      }
    }

    checkScroll()
    const timer = setTimeout(checkScroll, 100)

    return () => {
      if (map.current) {
        map.current.remove()
      }
      clearTimeout(timer)
    }
  }, [])

  const initMap = () => {
    const L = (window as any).L
    if (!L || !mapContainer.current) return

    const centerLat = -7.858661511592048
    const centerLng = 110.72306997857926

    map.current = L.map(mapContainer.current).setView([centerLat, centerLng], 13)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map.current)

    tourismSpots.forEach((spot) => {
      const isMobile = window.innerWidth < 768
      const imageHeight = isMobile ? "120px" : "180px"
      const popupWidth = isMobile ? "240px" : "300px"

      const popupContent = `
        <div style="width: ${popupWidth}; font-family: system-ui, -apple-system, sans-serif;">
          <div style="margin-bottom: 8px;">
            <h3 style="margin: 0 0 2px 0; font-weight: bold; font-size: 14px; color: #1a1a1a;">${spot.name}</h3>
            <p style="margin: 0; font-size: 11px; color: #666;">${spot.category}</p>
          </div>
          <img src="${spot.image}" alt="${spot.name}" style="width: 100%; height: ${imageHeight}; object-fit: cover; border-radius: 6px; margin-bottom: 8px;">
          <p style="margin: 0 0 10px 0; font-size: 12px; color: #444; line-height: 1.4;">${spot.description}</p>
          <button onclick="window.open('https://www.google.com/maps/search/${encodeURIComponent(spot.name)}/@${spot.lat},${spot.lng},15z', '_blank')" style="display: inline-block; background-color: #0066cc; color: white; padding: 6px 10px; border-radius: 4px; text-decoration: none; font-size: 11px; font-weight: 600; border: none; cursor: pointer;">
            📍 Buka di Google Maps
          </button>
        </div>
      `

      const marker = L.marker([spot.lat, spot.lng], {
        icon: L.icon({
          iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        }),
      })
        .addTo(map.current)
        .bindPopup(popupContent, { maxWidth: isMobile ? 250 : 320, className: "leaflet-popup-custom" })

      marker.on("click", () => {
        setSelectedSpot(spot.id)
      })

      marker.spotId = spot.id
      markers.current.push(marker)
    })
  }

  const handleSpotClick = (spot: TourismSpot) => {
    setSelectedSpot(spot.id)
    if (map.current) {
      const marker = markers.current.find((m) => m.spotId === spot.id)
      if (marker) {
        map.current.setView([spot.lat, spot.lng], 15)
        marker.openPopup()
      }
    }
    if (mapSection.current) {
      setTimeout(() => {
        mapSection.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }

  const handleOpenMapsModal = (spot: TourismSpot) => {
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(spot.name)}/@${spot.lat},${spot.lng},15z`
    window.open(mapsUrl, "_blank")
  }

  const scroll = (direction: "up" | "down") => {
    if (listContainer.current) {
      const scrollAmount = 100
      if (direction === "up") {
        listContainer.current.scrollBy({ top: -scrollAmount, behavior: "smooth" })
      } else {
        listContainer.current.scrollBy({ top: scrollAmount, behavior: "smooth" })
      }
      setTimeout(() => {
        if (listContainer.current) {
          const { scrollTop, scrollHeight, clientHeight } = listContainer.current
          setCanScrollUp(scrollTop > 0)
          setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10)
        }
      }, 300)
    }
  }

  return (
    <section id="wisata" ref={wisataSection} className="py-8 sm:py-12 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">Wisata Dukuh Garotan</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Klik marker atau pilih dari daftar untuk melihat detail wisata
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Sidebar with Tourism List - Compact on mobile */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-card border border-border rounded-xl shadow-md overflow-hidden h-fit lg:sticky lg:top-4">
              <div className="bg-primary text-primary-foreground p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg">Daftar Wisata</h3>
              </div>
              {tourismSpots.length >= 3 && (
                <div className="flex items-center justify-between px-2 py-1 bg-muted border-b border-border">
                  <button
                    onClick={() => scroll("up")}
                    disabled={!canScrollUp}
                    className="p-1 rounded hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Scroll up"
                  >
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  </button>
                  <span className="text-xs text-muted-foreground">{tourismSpots.length} wisata</span>
                  <button
                    onClick={() => scroll("down")}
                    disabled={!canScrollDown}
                    className="p-1 rounded hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Scroll down"
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  </button>
                </div>
              )}
              <div
                ref={listContainer}
                className="divide-y divide-border max-h-48 sm:max-h-72 lg:max-h-96 overflow-y-auto"
              >
                {tourismSpots.map((spot) => (
                  <div key={spot.id}>
                    <button
                      onClick={() => handleSpotClick(spot)}
                      className={`w-full text-left p-2 sm:p-3 transition-all duration-300 ease-in-out hover:bg-green-100 ${
                        selectedSpot === spot.id ? "bg-green-200" : "bg-card"
                      }`}
                    >
                      <h4 className="font-semibold text-foreground text-xs sm:text-sm line-clamp-1">{spot.name}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">{spot.category}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-2">
                        {spot.description}
                      </p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Container - More compact on mobile */}
          <div ref={mapSection} className="w-full flex-1 min-h-72 sm:min-h-96 lg:min-h-[600px]">
            <div
              ref={mapContainer}
              className="w-full h-full rounded-xl shadow-lg border border-border"
              style={{ minHeight: "300px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
