# Ready to Campus

Checklist persiapan kuliah berbasis React + Vite. Centang barang, barang masuk ke tas,
progres naik, suasana kamar menjadi cerah, dan tombol "Berangkat Kuliah" aktif setelah semua lengkap.

## Menjalankan

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev       # buka alamat yang tampil, biasanya http://localhost:5173
npm run build     # hasil produksi ada di folder dist/
npm run preview   # coba hasil build secara lokal
```

## Struktur

```
src/
  main.jsx            titik masuk
  App.jsx             state utama (centangan tersimpan di localStorage)
  data.js             daftar barang, warna langit, teks dan emoji mood
  styles.css          seluruh gaya
  components/
    Checklist.jsx     daftar barang
    Scene.jsx         jendela, matahari, tas, tombol berangkat
    Bag.jsx           ilustrasi tas
    Welcome.jsx       layar "Ready! Let's go to campus"
```

Untuk mengganti isi daftar, edit `ITEMS` di `src/data.js`.

## Deploy

Folder `dist/` setelah `npm run build` bisa diunggah ke Netlify, Vercel, atau GitHub Pages.
