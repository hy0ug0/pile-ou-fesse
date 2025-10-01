export interface GameStats {
  pileCount: number
  fesseCount: number
}

export interface GameResult {
  type: 'pile' | 'fesse'
  emoji: string
  text: string
  color: string
}


