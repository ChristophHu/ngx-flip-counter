import { Component } from '@angular/core';
import { NgxFlipCounterComponent } from '../../../ngx-flip-counter/src/public-api';
import { FlipPaneComponent } from './flip-pane/flip-pane.component';

@Component({
  selector: 'app-root',
  imports: [
    FlipPaneComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
}
