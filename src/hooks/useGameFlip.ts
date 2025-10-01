import type { GameResult } from '../types'
import { useCallback, useState } from 'react'

function getRandomResult(): GameResult {
  const isPile = Math.random() < 0.5

  if (isPile) {
    return {
      type: 'pile',
      emoji: '🔋',
      text: 'PILE !',
      color: '#667eea',
    }
  }
  else {
    return {
      type: 'fesse',
      emoji: '🍑',
      text: 'FESSE !',
      color: '#f093fb',
    }
  }
}

async function animateFlip(setFlipEmoji: (emoji: string) => void): Promise<void> {
  const flipEmojis = ['🎲', '✨', '🎰', '💫']
  let currentIndex = 0

  return new Promise((resolve) => {
    const interval = setInterval(() => {
      setFlipEmoji(flipEmojis[currentIndex % flipEmojis.length])
      currentIndex++
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
      resolve()
    }, 600)
  })
}

export function useGameFlip(onResult: (result: GameResult) => void) {
  const [isFlipping, setIsFlipping] = useState(false)
  const [result, setResult] = useState<GameResult | null>(null)
  const [flipEmoji, setFlipEmoji] = useState<string>('')

  const flip = useCallback(async () => {
    if (isFlipping)
      return

    setIsFlipping(true)
    setFlipEmoji('🎲')

    await animateFlip(setFlipEmoji)

    const newResult = getRandomResult()
    setResult(newResult)
    onResult(newResult)

    setIsFlipping(false)
  }, [isFlipping, onResult])

  return { flip, isFlipping, result, flipEmoji }
}
