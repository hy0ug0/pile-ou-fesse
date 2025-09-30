export interface GameStats {
  pileCount: number
  fesseCount: number
}

const STORAGE_KEY = 'pile-ou-fesse-stats'

export function loadStats(): GameStats {
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

export function saveStats(stats: GameStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
  } catch (error) {
    console.error('Error saving stats:', error)
  }
}

export function resetStats(): GameStats {
  const stats: GameStats = {
    pileCount: 0,
    fesseCount: 0
  }
  saveStats(stats)
  return stats
}
