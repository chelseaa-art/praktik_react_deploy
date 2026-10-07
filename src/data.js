export const ITEMS = [
  { id: 'laptop', name: 'Laptop', emoji: '💻' },
  { id: 'charger', name: 'Charger', emoji: '🔌' },
  { id: 'buku', name: 'Buku Catatan', emoji: '📓' },
  { id: 'pena', name: 'Alat Tulis', emoji: '✏️' },
  { id: 'ktm', name: 'Kartu Mahasiswa (KTM)', emoji: '🪪' },
  { id: 'dompet', name: 'Dompet', emoji: '👛' },
  { id: 'botol', name: 'Botol Minum', emoji: '🥤' },
  { id: 'kunci', name: 'Kunci Rumah', emoji: '🔑' },
]

export const lerp = (a, b, t) => a + (b - a) * t
export const hsl = (c1, c2, t) =>
  `hsl(${lerp(c1[0], c2[0], t)},${lerp(c1[1], c2[1], t)}%,${lerp(c1[2], c2[2], t)}%)`

export const skyTop = (p) => hsl([228, 38, 18], [203, 85, 70], p)
export const skyBottom = (p) => hsl([262, 30, 30], [38, 95, 82], p)

export function moodFace(p, done) {
  if (done) return { face: '🤩', label: 'Semangat penuh' }
  if (p < 0.34) return { face: '😴', label: 'Masih mengantuk' }
  return { face: '🙂', label: 'Mulai segar' }
}

export function moodText(p, done, left) {
  if (done) return 'Semua beres dan kamar sudah cerah. Saatnya berangkat.'
  if (p === 0) return 'Kamar masih remang. Mulai masukkan barang ke tas.'
  if (p < 0.5) return `Matahari mulai naik. Masih ada ${left} barang lagi.`
  return `Kamar makin terang. Tinggal ${left} barang.`
}
