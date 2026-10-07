import { useEffect, useState } from 'react'
import { ITEMS, moodFace, moodText, skyTop, skyBottom } from './data'
import Checklist from './components/Checklist'
import Scene from './components/Scene'
import Welcome from './components/Welcome'

const KEY = 'ready-to-campus:checked'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

export default function App() {
  const [checked, setChecked] = useState(load)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(checked))
    } catch {
      /* penyimpanan tidak tersedia, abaikan */
    }
  }, [checked])

  const packed = ITEMS.filter((i) => checked[i.id])
  const total = ITEMS.length
  const n = packed.length
  const p = n / total
  const done = n === total
  const { face, label } = moodFace(p, done)

  const toggle = (id) => setChecked((c) => ({ ...c, [id]: !c[id] }))
  const reset = () => {
    setChecked({})
    setGone(false)
  }

  return (
    <div className="room" style={{ background: `linear-gradient(${skyTop(p)},${skyBottom(p)})` }}>
      <div className="wrap">
        <section className="panel">
          <div className="head">
            <span key={face} className="face" role="img" aria-label={label}>{face}</span>
            <h1>Ready to Campus</h1>
          </div>
          <p className="mood">{moodText(p, done, total - n)}</p>
          <div
            className="bar"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={n}
            aria-label="Barang di dalam tas"
          >
            <div className={'fill' + (done ? ' done' : '')} style={{ width: p * 100 + '%' }} />
          </div>
          <div className="count">
            <span>{n} dari {total} barang di tas</span>
            <span>{Math.round(p * 100)}%</span>
          </div>
          <Checklist checked={checked} onToggle={toggle} disabled={gone} />
        </section>
        <Scene packed={packed} p={p} done={done} gone={gone} onGo={() => setGone(true)} onReset={reset} />
      </div>
      {gone && <Welcome total={total} onReset={reset} />}
    </div>
  )
}
