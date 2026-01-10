"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    // Tutup mobile menu ketika route berubah
    setIsOpen(false)
  }, [pathname])

  const allNavItems = [
    { label: "Beranda", href: "#home", isLink: false },
    { label: "Umkm", href: "#news", isLink: false },
    { label: "Maps Wisata", href: "#wisata", isLink: false },
    {
      label: "Sejarah Garotan",
      href: "https://sejarah.garotanmanunggal.web.id",
      isLink: true,
    },
    {
      label: "Data Penduduk",
      href: "https://penduduk.garotanmanunggal.web.id",
      isLink: true,
    },
    { label: "Kontak", href: "#contact", isLink: false },
  ]

  // Tampilkan hanya Beranda dan Pengaduan di halaman /pengaduan
  const navItems =
    pathname === "/pengaduan"
      ? [allNavItems[0], allNavItems[3]] // Beranda dan Pengaduan di halaman /pengaduan
      : allNavItems // Semua menu di halaman lain

  const handleNavClick = (href: string) => {
    setActiveSection(href)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSectionClick = (sectionHref: string, label: string) => {
    if (pathname === "/") {
      handleNavClick(sectionHref)
    } else {
      // Jika itu menu Beranda, pergi ke "/" tanpa hash
      if (label === "Beranda") {
        window.location.href = "/"
      } else {
        // Pergi ke halaman utama dan scroll ke section
        window.location.href = `/${sectionHref}`
      }
    }
    setIsOpen(false)
  }

  const isHomePage = pathname === "/"

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <span className="text-2xl">🏘️</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground tracking-tight">Dukuh Garotan</h1>
              <p className="text-xs text-muted-foreground">Kalurahan Bendung, Kapanewon Semin</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.isLink ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-xl transition-all duration-300"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleSectionClick(item.href, item.label)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.href && isHomePage
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </button>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-secondary/80 transition-all duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300 backdrop-blur-xl">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) =>
                item.isLink ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary/80 hover:text-primary transition-all duration-300"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleSectionClick(item.href, item.label)}
                    className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.href && isHomePage
                        ? "bg-secondary text-primary font-medium"
                        : "text-foreground hover:bg-secondary/80 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
