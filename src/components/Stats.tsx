interface StatsProps {
  pileCount: number
  fesseCount: number
  total: number
}

export const Stats = ({ pileCount, fesseCount, total }: StatsProps) => {
  return (
    <div className="stats">
      <div className="stat-item">
        <span className="stat-value">{pileCount}</span>
        <span className="stat-label">🔋 Pile</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{fesseCount}</span>
        <span className="stat-label">🍑 Fesse</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{total}</span>
        <span className="stat-label">🎯 Total</span>
      </div>
    </div>
  )
}


