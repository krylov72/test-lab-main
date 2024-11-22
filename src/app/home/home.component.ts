import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CustomButtonComponent } from '../components/UI-kit/custom-button/custom-button.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CustomButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
