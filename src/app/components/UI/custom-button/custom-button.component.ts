import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-custom-button',
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  

  @Input() clickHandler: (() => void) | undefined;
  @Input() title: string = ''
   @Input() variant: 'primary' | 'gray'  = 'primary';
}
