import './style.css'
import { GameStats, loadStats, saveStats } from './stats'

interface GameResult {
  type: 'pile' | 'fesse'
  emoji: string
  text: string
  color: string
}

class PileOuFesseGame {
  private stats: GameStats
  private isFlipping: boolean = false
  
  private resultDiv: HTMLDivElement
  private resultText: HTMLDivElement
  private flipButton: HTMLButtonElement
  private pileCountSpan: HTMLSpanElement
  private fesseCountSpan: HTMLSpanElement
  private totalCountSpan: HTMLSpanElement

  constructor() {
    this.stats = loadStats()
    this.render()
    
    // Get DOM elements
    this.resultDiv = document.getElementById('result') as HTMLDivElement
    this.resultText = document.getElementById('result-text') as HTMLDivElement
    this.flipButton = document.getElementById('flipButton') as HTMLButtonElement
    this.pileCountSpan = document.getElementById('pileCount') as HTMLSpanElement
    this.fesseCountSpan = document.getElementById('fesseCount') as HTMLSpanElement
    this.totalCountSpan = document.getElementById('totalCount') as HTMLSpanElement
    
    // Bind events
    this.flipButton.addEventListener('click', () => this.flip())
    document.addEventListener('keydown', (e) => this.handleKeyPress(e))
    
    // Update initial display
    this.updateStats()
  }

  private render(): void {
    const app = document.getElementById('app')
    if (!app) return

    app.innerHTML = `
      <div class="container">
        <h1>Pile ou Fesse</h1>
        <p class="subtitle">Tente ta chance ! 🎲</p>

        <div class="card">
          <div class="result-container">
            <div id="result" class="placeholder">🤔</div>
            <div id="result-text" class="result-text"></div>
          </div>
        </div>

        <button id="flipButton">Tirer !</button>

        <div class="stats">
          <div class="stat-item">
            <span class="stat-value" id="pileCount">0</span>
            <span class="stat-label">🔋 Pile</span>
          </div>
          <div class="stat-item">
            <span class="stat-value" id="fesseCount">0</span>
            <span class="stat-label">🍑 Fesse</span>
          </div>
          <div class="stat-item">
            <span class="stat-value" id="totalCount">0</span>
            <span class="stat-label">🎯 Total</span>
          </div>
        </div>

        <footer>
          Made with 💜 | Pile ou Fesse &copy; 2025
        </footer>
      </div>
    `
  }

  private async flip(): Promise<void> {
    if (this.isFlipping) return

    this.isFlipping = true
    this.flipButton.disabled = true
    this.resultDiv.classList.add('flipping')

    // Show random emoji during flip
    await this.animateFlip()

    // Get result
    const result = this.getRandomResult()

    // Update result
    this.resultDiv.textContent = result.emoji
    this.resultDiv.className = `result ${result.type}`
    this.resultText.textContent = result.text
    this.resultText.style.color = result.color

    // Update stats
    if (result.type === 'pile') {
      this.stats.pileCount++
    } else {
      this.stats.fesseCount++
    }

    saveStats(this.stats)
    this.updateStats()

    this.flipButton.disabled = false
    this.isFlipping = false
  }

  private animateFlip(): Promise<void> {
    return new Promise((resolve) => {
      const flipEmojis = ['🎲', '✨', '🎰', '💫']
      let currentIndex = 0
      
      const interval = setInterval(() => {
        this.resultDiv.textContent = flipEmojis[currentIndex % flipEmojis.length]
        currentIndex++
      }, 100)

      setTimeout(() => {
        clearInterval(interval)
        resolve()
      }, 600)
    })
  }

  private getRandomResult(): GameResult {
    const isPile = Math.random() < 0.5
    
    if (isPile) {
      return {
        type: 'pile',
        emoji: '🔋',
        text: 'PILE !',
        color: '#667eea'
      }
    } else {
      return {
        type: 'fesse',
        emoji: '🍑',
        text: 'FESSE !',
        color: '#f093fb'
      }
    }
  }

  private updateStats(): void {
    this.pileCountSpan.textContent = this.stats.pileCount.toString()
    this.fesseCountSpan.textContent = this.stats.fesseCount.toString()
    this.totalCountSpan.textContent = (this.stats.pileCount + this.stats.fesseCount).toString()
  }

  private handleKeyPress(e: KeyboardEvent): void {
    if (e.code === 'Space' && !this.isFlipping) {
      e.preventDefault()
      this.flip()
    }
  }
}

// Initialize the game
new PileOuFesseGame()
