import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-custom-checkbox',
  imports: [MatCheckboxModule],
  standalone: true,
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
})
export class CustomCheckboxComponent {
  @Input() text?:string

}