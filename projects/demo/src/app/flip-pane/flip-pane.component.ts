import { CommonModule } from '@angular/common'
import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { FlipService } from '../flip.service'

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
  
  @ViewChild('flipElement', { static: false }) flipElement!: ElementRef

  constructor(private flipService: FlipService) {}

  ngAfterViewInit(): void {
    this.flipService.setFlipReference(this.flipElement)
  }
}
