import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'flip-pane',
  imports: [
    CommonModule
  ],
  templateUrl: './flip-pane.component.html',
  styleUrl: './flip-pane.component.sass'
})
export class FlipPaneComponent {
  @Input() textSize: string = '150px'
  @Input() lineHeight: string = '164px'
}
