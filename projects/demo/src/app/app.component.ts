import { Component, ElementRef, ViewChild } from '@angular/core';
import { FlipPaneComponent } from './flip-pane/flip-pane.component';
import { FlipService } from './flip.service';

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
export class AppComponent {
    @ViewChild('name') flipRef!: ElementRef
}
