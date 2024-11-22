import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollToElement(elementId: string, duration = 500): void {
    const element = document.getElementById(elementId);
    if (element) {
      const targetPosition = element.offsetTop;
      let startPosition = window.pageYOffset;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeInOutQuad = (t: any) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const newPosition =
          startPosition +
          (targetPosition - startPosition) * easeInOutQuad(progress);

        window.scrollTo(0, newPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    } else {
      console.error(`Элемент с ID "${elementId}" не найден.`);
    }
  }
}
