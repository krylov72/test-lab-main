import { Component } from '@angular/core';
import { CustomCheckboxComponent } from '../../shared/custom-checkbox/custom-checkbox.component';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { CustomInputComponent } from '../../shared/custom-input/custom-input.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [
    CustomCheckboxComponent,
    CustomButtonComponent,
    CustomInputComponent,
    FormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      console.log('Отправленные данные:', formData);
      this.mockSubmit(formData);
    }
  }

  mockSubmit(data: any) {
    setTimeout(() => {
      alert('Данные успешно отправлены');
    }, 500);
  }
}
