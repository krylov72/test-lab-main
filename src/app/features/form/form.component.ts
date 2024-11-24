import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { CustomFormComponent } from '../../shared/custom-form/custom-form.component';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CustomFormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {}
