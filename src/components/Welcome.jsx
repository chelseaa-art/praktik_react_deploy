export default function Welcome({ total, onReset }) {
  return (
    <div className="welcome" role="dialog" aria-modal="true" aria-label="Siap berangkat">
      <div className="big" aria-hidden="true">🤩</div>
      <h2>Ready! Let's go to campus 🎒🏫</h2>
      <p>Semua {total} barang sudah ada di tas.</p>
      <button type="button" autoFocus onClick={onReset}>Ulangi besok pagi</button>
    </div>
  )
}
