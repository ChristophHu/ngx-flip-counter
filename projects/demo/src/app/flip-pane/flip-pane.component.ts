import { CommonModule } from '@angular/common'
import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { FlipService } from '../flip.service'

interface FlipTextElements {
  before: NodeListOf<HTMLElement>
  active: NodeListOf<HTMLElement>
}

@Component({
  selector: 'flip-pane',
  imports: [
    CommonModule
  ],
  templateUrl: './flip-pane.component.html',
  styleUrl: './flip-pane.component.sass'
})
export class FlipPaneComponent implements AfterViewInit {
  @Input() textSize: string = '150px'
  @Input() lineHeight: string = '164px'
  @Input() text_filler_before: string = '00'
  @Input() text_filler_active: string = '01'
  
  @ViewChild('flipElement', { static: false }) flipElement!: ElementRef

  constructor(private flipService: FlipService) { }

  ngAfterViewInit(): void {
    this.flipService.setFlipReference(this.flipElement)
    this.setAllFlipTextContent(this.text_filler_before, this.text_filler_active)
  }

  getAllFlipTextElements(): FlipTextElements {
    return {
      before: this.flipElement.nativeElement.querySelectorAll('.before .flip-text'),
      active: this.flipElement.nativeElement.querySelectorAll('.active .flip-text')
    }
  }

  setAllFlipTextContent(before_content: string, active_content: string): void {
    const elements = this.getAllFlipTextElements()
    elements.before.forEach(element => {
      element.innerHTML = before_content
    })
    elements.active.forEach(element => {
      element.innerHTML = active_content
    })
  }


}
