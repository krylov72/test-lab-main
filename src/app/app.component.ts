import { Component } from '@angular/core';
import { LoadingComponentComponent } from './shared/loading-component/loading-component.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HowItWorksComponent } from './features/how-it-works/how-it-works.component';
import { ThirdBlockComponent } from './features/third-block/third-block.component';
import { ReviewComponent } from './shared/review/review.component';
import { ReviewsPageComponent } from './features/reviews-page/reviews-page.component';
import { FaqPageComponent } from './features/faq-page/faq-page.component';
import { InfoPageComponent } from './features/info-page/info-page.component';
import { FormComponent } from './features/form/form.component';
import { FooterComponent } from "./features/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    LoadingComponentComponent,
    CommonModule,
    RouterModule,
    HomeComponent,
    HowItWorksComponent,
    ThirdBlockComponent,
    ReviewsPageComponent,
    FaqPageComponent,
    InfoPageComponent,
    FormComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testLabMain';

  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
