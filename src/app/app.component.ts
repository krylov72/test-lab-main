import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomCheckboxComponent } from "./components/UI/custom-checkbox/custom-checkbox.component";
import { CustomButtonComponent } from "./components/UI/custom-button/custom-button.component";
import { CustomInputComponent } from "./components/UI/custom-input/custom-input.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomCheckboxComponent, CustomButtonComponent, CustomInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testLabMain';

  
}
