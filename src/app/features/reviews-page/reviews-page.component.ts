import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ReviewComponent, Users } from '../../shared/review/review.component';

@Component({
  selector: 'app-reviews-page',
  imports: [ReviewComponent, CommonModule],
  templateUrl: './reviews-page.component.html',
  styleUrl: './reviews-page.component.scss',
})
export class ReviewsPageComponent {
  users: Users[] = [
    {
      fullname: 'Константинов Михаил Павлович',
      info: 'Санкт-Петербург',
      photo: '/photos/anonym.png',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
    },
    {
      fullname: 'Иван Иванов',
      info: 'Санкт-Петербург, ИП Иванов',
      photo: '/photos/1.png',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      fullname: 'Иван Иванов',
      info: 'Санкт-Петербург',
      photo: '/photos/3.png',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      fullname: 'Артем Корнилов',
      info: 'Самара',
      photo: '/photos/2.png',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    },
  ];

  currentIndex = 0;
  reviewsPerPage = 3;
  totalPages = 0;

  constructor() {
    this.updateReviewsPerPage(window.innerWidth);
    this.reviewsPerPage;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateReviewsPerPage(event.target.innerWidth);
  }

  updateReviewsPerPage(width: number) {
    if (width <= 768 && width >= 500) {
      this.reviewsPerPage = 2;
    } else if (width <= 500) {
      this.reviewsPerPage = 1;
    } else {
      this.reviewsPerPage = 3;
    }
    this.totalPages = Math.ceil(this.users.length / this.reviewsPerPage);
  }

  get currentReviews() {
    return this.users.slice(
      this.currentIndex,
      this.currentIndex + this.reviewsPerPage
    );
  }

  nextReview() {
    if (this.currentIndex + this.reviewsPerPage < this.users.length) {
      this.currentIndex += this.reviewsPerPage;
    }
  }

  prevReview() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.reviewsPerPage;
    }
  }
}
