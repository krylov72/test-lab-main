import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Users {
  fullname: string;
  info: string;
  review: string;
  photo: string;
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent {
  @Input() aboutPerson?: Users[];
}
