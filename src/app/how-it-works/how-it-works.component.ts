import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Cards {
  image: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-how-it-works',
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {
  cards: Cards[] = [
    {
      image: 'assets/images/truck.png',
      title: 'Прочитай задание внимательно',
      text: 'Думаю у тебя не займет это больше двух-трех минут',
    },
    {
      image: '/assets/images/truck.png',
      title: 'Изучи весь макет заранее',
      text: 'Подумай как это будет работать на разных разрешениях и при скролле',
    },
    {
      image: '/assets/images/secure.png',
      title: 'Сделай хорошо',
      text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
    },
    {
      image: '/assets/images/money.png',
      title: 'Получи предложение',
      text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
    },
  ];
}
