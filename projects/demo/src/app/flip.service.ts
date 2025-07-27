import { Injectable, OnDestroy, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlipService implements OnDestroy {
  curr = 0
  counter = 10
  timerId: any

  isRunning = true
  isCountdown = true

  // Reference to the flip component
  flipRef!: ElementRef

  ngOnDestroy(): void {
    clearInterval(this.timerId)
  }

  // Set component reference
  setFlipReference(elementRef: ElementRef): void {
    this.flipRef = elementRef
  }

  // timer controls
  startTimer(): void {
    this.isRunning = true
    this.timerId = setInterval(() => {
      this.isCountdown ? this.counter-- : this.counter++
      if (this.counter == 0) {
        this.counter = 0
        this.isRunning = false
        clearInterval(this.timerId)
      }
      this.process(this.counter)
    }, 1000)
  }
  pauseTimer(): void {
    if (!this.isRunning) return

    clearInterval(this.timerId)
    this.timerId = null
    this.isRunning = false
  }
  stopTimer(): void {
    this.pauseTimer()
    this.counter = 0
    this.process(this.counter)
  }

  // counter controls
  addOne(): void {
    this.counter++
    this.process(this.counter)
  }
  subOne(): void {
    this.counter--
    this.process(this.counter)
  }
  resetCounter(): void {
    this.counter = 0
    this.process(this.counter)
  }

  process(value: number): void {   
    // Check if flipRef is set
    if (!this.flipRef) {
      return
    }
    
    const ul = this.flipRef.nativeElement as HTMLElement
    const lis = ul.querySelectorAll('li')

    if (lis.length !== 2) return

    lis.forEach(li => li.classList.remove('before', 'active'))

    const curli = lis[this.curr]
    curli.classList.add('before')

    this.curr = this.curr === 0 ? 1 : 0

    const nextli = lis[this.curr]
    nextli.classList.add('active')

    const texts = nextli.querySelectorAll('.flip-text')
    const formatted = this.addZeros(value % 60, 2)

    texts.forEach(el => {
      (el as HTMLElement).innerText = formatted
    })
  }

  addZeros(val: number, length: number): string {
    return val.toString().padStart(length, '0')
  }
}
