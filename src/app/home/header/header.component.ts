import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const body = document.body;

    if (this.isMenuOpen) {
      body.classList.add('menu-open');
    } else {
      body.classList.remove('menu-open');
    }
  }

  scrollTo(elementId: string) {
    this.scrollService.scrollToElement(elementId);
  }
}
