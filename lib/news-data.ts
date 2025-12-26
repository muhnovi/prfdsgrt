export interface NewsItem {
  date: string
  title: string
  description: string
  image: string
  youtubeUrl?: string
  fullDescription?: string
  slug: string
  location?: { lat: number; lng: number }
  locationName?: string
  mapsUrl?: string
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
    slug: "klethik-klethik-ibu-suyatmi",
    location: { lat: -7.8414561, lng: 110.712003 },
    locationName: "Klethik Klethik Ibu Suyatmi",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Klethik+Klethik+IBU+SUYATMI",
  },
    {
    date: "25 Desember 2025",
    title: "Terampil Mbah Mardi",
    description:
    "Perajin dan pelaku seni wayang yang merintis pembuatan wayang dari bahan sederhana sejak usia sekolah dasar.",
    fullDescription:
    "Pelaku usaha dan seni ini memiliki latar belakang pendidikan sebagai guru agama serta menguasai hampir semua bidang studi kecuali matematika. Pengalaman merantau hingga Jakarta dan tampil bermain seni hingga larut malam menjadi bagian dari perjalanan hidupnya.\n\nKetertarikan pada dunia wayang dimulai sejak kelas 6 SD, tepat pada 1 Muharam, setelah menonton pertunjukan wayang. Dalam waktu satu bulan, ia mulai membuat wayang sendiri dari bahan kardus bekas yang digunting, dicat menggunakan bahan alami seperti daun jati untuk warna merah, daun koro untuk warna biru, dan arang untuk warna hitam. Dalam satu malam mampu membuat hingga 20 wayang, dengan gagang dari sodo. Dari hasil tersebut, ia pernah memperoleh penghasilan hingga Rp500.000, yang kemudian digunakan untuk membeli tatah wayang.\n\nProses pembuatan wayang sempat bereksperimen menggunakan berbagai bahan seperti kardus rangkap, triplek, seng, plastik, hingga kulit. Namun karena faktor keamanan, kesulitan produksi, dan daya tahan bahan, akhirnya kembali menggunakan kardus yang digunakan selama bertahun-tahun. Usaha ini sempat berhenti karena bahan mudah rusak terkena air dan plastik dinilai terlalu tipis.\n\nHarga wayang kecil berkisar sekitar Rp5.000 dengan biaya produksi sekitar Rp25.000–Rp30.000 per paket bahan, dan dijual kembali hingga Rp60.000. Penjualan dilakukan di seluruh wilayah Gunungkidul dan DIY, baik secara langsung dari rumah, melalui telepon, media online, maupun melalui Galeri Lumbung Mataram. Pada masa awal pementasan wayang, penghasilan dalam satu hari satu malam pertunjukan dapat mencapai Rp2.000.000 hingga Rp4.000.000.\n\nProduk wayang yang dihasilkan sangat beragam, meliputi tokoh-tokoh pewayangan seperti Srikandi, Ongko Wijoyo, Kresno, Anoman, Arjuno, Semar, Petruk, Punokawan satu set (isi 4), hingga wayang hewan seperti harimau dan lainnya. Ukuran wayang bervariasi dari kecil hingga besar dengan harga berkisar antara Rp30.000 sampai Rp300.000 per buah, dan sekitar Rp150.000 untuk satu set.\n\nSelain produksi, pelaku juga aktif mengikuti pameran dengan biaya partisipasi sekitar Rp500.000–Rp600.000 dan memberikan honor kepada pihak pembuat pameran. Hingga kini, usaha dan karya seni wayang ini menjadi bagian dari pelestarian budaya tradisional sekaligus sumber penghidupan yang bernilai ekonomi dan edukatif.",
    image: "/pengrajin-wayang-mbah-mardi.PNG",
    youtubeUrl: "https://www.youtube.com/embed/example1",
    slug: "terampil-mbah-mardi",
    location: { lat: -7.840692, lng: 110.7094281 },
    locationName: "pengrajin wayang mbah Mardi",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pengrajin+wayang+mbah+mardi",
  },
]
