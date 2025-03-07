import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexDivsComponent } from "./flex-divs/flex-divs.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlexDivsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flex_tester';
}
