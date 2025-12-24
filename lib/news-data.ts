export interface NewsItem {
  date: string;
  title: string;
  description: string;
  image: string;
  youtubeUrl?: string;
  fullDescription?: string;
  slug: string;
  location?: { lat: number; lng: number };
  locationName?: string;
  mapsUrl?: string;
}

export const newsData: NewsItem[] = [
  {
    date: "24 Desember 2025",
    title: "Klethik Klethik Ibu Suyatmi",
    description:
      "UMKM lokal yang mengembangkan aneka snack tradisional berbasis jagung dan singkong seperti keripik pisang, marning, dan manggleng.",
    fullDescription:
      "UMKM ini dirintis sejak tahun 1992 dengan modal awal sebesar Rp50.000 dan terus berkembang hingga saat ini.\n\nJenis usaha yang dijalankan meliputi produksi aneka snack tradisional antara lain keripik pisang gurih, keripik pisang manis, marning jagung gurih, marning pedas manis, serta manggleng gurih dan manggleng manis. Selain itu, UMKM ini juga memproduksi lemper, risol, sarang burung (tahu isi telur puyuh), nogosari, apem jagung, tiwul instan, dan tepung jagung alami tanpa bahan pengawet.\n\nPemasaran dilakukan dengan sistem penjualan langsung ke wilayah Yogyakarta, Bandung, dan pasar tradisional. Pembayaran masih dilakukan secara tunai, sementara pada kegiatan pameran telah digunakan barcode sebagai media informasi produk.\n\nSelain usaha olahan pangan, UMKM ini juga mengelola peternakan kambing putih sebanyak 32 ekor dan ayam sebagai usaha pendukung. Dengan pengalaman lebih dari tiga dekade, UMKM ini berkomitmen melestarikan pangan tradisional serta meningkatkan nilai tambah hasil pertanian lokal.",  
    image: "/klethik-klethik.jpeg",
    youtubeUrl: "https://www.youtube.com/embed/example1",
    slug: "program-pemberdayaan-petani-dimulai",
    location: { lat: -7.8413425, lng: 110.709826 },
    locationName: "Klethik Klethik Ibu Suyatmi",
    mapsUrl:
      "https://maps.google.com/?q=Klethik+Klethik+IBU+SUYATMI/@-7.8413425,110.709826,17z",
  },
];
