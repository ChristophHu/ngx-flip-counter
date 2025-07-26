import { CommonModule } from '@angular/common'
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'flip-pane',
  imports: [
    CommonModule
  ],
  templateUrl: './flip-pane.component.html',
  styleUrl: './flip-pane.component.sass'
})
export class FlipPaneComponent implements OnInit, OnDestroy {
  @ViewChild('name') flipListRef!: ElementRef
  @Input() textSize: string = '150px'
  @Input() lineHeight: string = '164px'

  
}
