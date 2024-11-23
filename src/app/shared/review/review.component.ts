import { SwiperOptions } from './../../../../node_modules/swiper/types/swiper-options.d';
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
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };
  @Input() aboutPerson?: Users[];
}
