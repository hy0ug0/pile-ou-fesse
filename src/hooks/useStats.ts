import type { GameStats } from '../types'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'pile-ou-fesse-stats'

function loadStats(): GameStats {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored !== null) {
      return JSON.parse(stored) as GameStats
    }
  }
  catch (error) {
    console.error('Error loading stats:', error)
  }

  return {
    pileCount: 0,
    fesseCount: 0,
  }
}

function saveStats(stats: GameStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
  }
  catch (error) {
    console.error('Error saving stats:', error)
  }
}

export function useStats() {
  const [stats, setStats] = useState<GameStats>(loadStats)

  useEffect(() => {
    saveStats(stats)
  }, [stats])

  const incrementPile = () => {
    setStats(prev => ({ ...prev, pileCount: prev.pileCount + 1 }))
  }

  const incrementFesse = () => {
    setStats(prev => ({ ...prev, fesseCount: prev.fesseCount + 1 }))
  }

  const total = stats.pileCount + stats.fesseCount

  return { stats, incrementPile, incrementFesse, total }
}
