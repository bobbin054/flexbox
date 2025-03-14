import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexDivsComponent } from "./components/flex-divs/flex-divs.component";
import { FlexInputsComponent } from "./components/flex-inputs/flex-inputs.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlexDivsComponent, FlexInputsComponent, CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flex_tester';
}
