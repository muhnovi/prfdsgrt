export interface NewsItem {
  date: string
  title: string
  description: string
  image: string
  youtubeUrl?: string
  fullDescription?: string
  slug: string
  location?: {
    lat: number
    lng: number
  }
}

export const newsData: NewsItem[] = [
  // {
  //   date: "24 Desember 2025",
  //   title: "Klethik Klethik Ibu Suyatmi",
  //   description:
  //     "Klethik Klethik adalah usaha yang berbahan utama jagung",
  //   fullDescription:
  //     "Klethik Klethik adalah usaha yang berbahan utama jagung. Usaha ini didirikan oleh Ibu Suyatmi pada tahun 2010. Produk utama dari usaha ini adalah klethik klethik, yaitu camilan tradisional yang terbuat dari jagung yang diolah dengan cara khusus untuk menghasilkan rasa yang gurih dan renyah. Usaha ini telah berkembang pesat dan kini menjadi salah satu usaha kecil menengah yang terkenal di Dukuh Garotan.",
  //   image: "/farmer-training-program-indonesia.jpg",
  //   youtubeUrl: "https://www.youtube.com/watch?v=example1",
  //   slug: "program-pemberdayaan-petani-dimulai",
  //   location: { lat: -7.858661511592048, lng: 110.72306997857926 },
  // },
]
