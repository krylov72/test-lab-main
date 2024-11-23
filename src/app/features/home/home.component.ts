import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CustomButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
