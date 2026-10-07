import { ITEMS } from '../data'

export default function Checklist({ checked, onToggle, disabled }) {
  return (
    <ul>
      {ITEMS.map((it) => (
        <li key={it.id}>
          <label className={'item' + (checked[it.id] ? ' on' : '')}>
            <input
              type="checkbox"
              checked={!!checked[it.id]}
              disabled={disabled}
              onChange={() => onToggle(it.id)}
            />
            <span className="box" aria-hidden="true">✓</span>
            <span className="emo" aria-hidden="true">{it.emoji}</span>
            <span className="name">{it.name}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}
