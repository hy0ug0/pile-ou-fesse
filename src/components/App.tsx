import { useEffect, useCallback } from 'react'
import { useStats } from '../hooks/useStats'
import { useGameFlip } from '../hooks/useGameFlip'
import { GameCard } from './GameCard'
import { Stats } from './Stats'
import { GameResult } from '../types'

export const App = () => {
  const { stats, incrementPile, incrementFesse, total } = useStats()

  const handleResult = useCallback((result: GameResult) => {
    if (result.type === 'pile') {
      incrementPile()
    } else {
      incrementFesse()
    }
  }, [incrementPile, incrementFesse])

  const { flip, isFlipping, result, flipEmoji } = useGameFlip(handleResult)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isFlipping) {
        e.preventDefault()
        flip()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [flip, isFlipping])

  return (
    <div className="container">
      <h1>Pile ou Fesse</h1>
      <p className="subtitle">Tente ta chance ! 🎲</p>

      <GameCard result={result} isFlipping={isFlipping} flipEmoji={flipEmoji} />

      <button onClick={flip} disabled={isFlipping}>
        Tirer !
      </button>

      <Stats pileCount={stats.pileCount} fesseCount={stats.fesseCount} total={total} />

      <footer>
        Made with 💜 | Pile ou Fesse &copy; 2025
      </footer>
    </div>
  )
}


