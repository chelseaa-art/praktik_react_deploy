import Bag from './Bag'
import { lerp, skyTop, skyBottom } from '../data'

export default function Scene({ packed, p, done, gone, onGo, onReset }) {
  const sky = `linear-gradient(${skyTop(p)},${skyBottom(p)})`
  return (
    <section className="panel scene">
      <div className="window" style={{ background: sky }}>
        <div
          className="sun"
          style={{
            transform: `translateY(${lerp(70, -50, p)}px)`,
            boxShadow: `0 0 ${p * 70}px ${p * 24}px rgba(255,200,80,${0.15 + p * 0.5})`,
          }}
        />
        <div className="cross" />
      </div>
      <div className="floor">
        <div className="beam" style={{ opacity: p }} />
      </div>
      <Bag packed={packed} />
      <button className="go" type="button" disabled={!done || gone} onClick={onGo}>
        {gone ? 'Sudah berangkat' : 'Berangkat Kuliah'}
      </button>
      {packed.length > 0 && (
        <button className="reset" type="button" onClick={onReset}>
          Kosongkan tas dan ulangi
        </button>
      )}
    </section>
  )
}
