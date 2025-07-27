import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { FlipPaneComponent } from './flip-pane/flip-pane.component'
import { FlipService } from './flip.service'

@Component({
  selector: 'app-root',
  imports: [
    FlipPaneComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  providers: [
    FlipService
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('name') flipRef!: ElementRef

  constructor(private flipService: FlipService) {
      // Set the component reference in the service
      this.flipService.setFlipReference(this.flipRef)
  }

  ngAfterViewInit(): void {
    this.flipService.startTimer()
  }
}
