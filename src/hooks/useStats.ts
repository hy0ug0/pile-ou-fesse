import { useState, useEffect } from 'react'
import { GameStats } from '../types'

const STORAGE_KEY = 'pile-ou-fesse-stats'

const loadStats = (): GameStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Error loading stats:', error)
  }
  
  return {
    pileCount: 0,
    fesseCount: 0
  }
}

const saveStats = (stats: GameStats): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
  } catch (error) {
    console.error('Error saving stats:', error)
  }
}

export const useStats = () => {
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


