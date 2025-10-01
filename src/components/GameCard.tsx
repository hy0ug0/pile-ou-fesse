import type { GameResult } from '../types'

interface GameCardProps {
  result: GameResult | null
  isFlipping: boolean
  flipEmoji: string
}

export function GameCard({ result, isFlipping, flipEmoji }: GameCardProps) {
  return (
    <div className="card">
      <div className="result-container">
        {!result && !isFlipping && (
          <div className="placeholder">🤔</div>
        )}
        {isFlipping && (
          <div className="result flipping">{flipEmoji}</div>
        )}
        {result && !isFlipping && (
          <>
            <div className={`result ${result.type}`}>{result.emoji}</div>
            <div className="result-text" style={{ color: result.color }}>
              {result.text}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
