import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent {
  showPlaceholder = false;
  onFocus() {
    this.showPlaceholder = true;
  }

  onBlur() {
    this.showPlaceholder = false;
  }
}
