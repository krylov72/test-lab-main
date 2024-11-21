import {Component, Input} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-custom-input',
  imports: [FormsModule,MatFormFieldModule,MatInputModule,CommonModule,MatIconModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent {

   inputFocused = false;

  onFocus() {
    this.inputFocused = true;
  }

  onBlur() {
    this.inputFocused = false;
  }
  @Input() label: string = ''
  @Input() type: 'text' | 'tel' = 'text'
  @Input() text: string = ''
  @Input() placeholder: string = ''
  @Input() helperText?: string = 'helperText'
  @Input() helperColor: 'red' | 'green' = 'green'
}
