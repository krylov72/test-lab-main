import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ThirdBlockComponent } from './third-block/third-block.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { MatIconModule } from '@angular/material/icon';
import { InfoPageComponent } from './info-page/info-page.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    HowItWorksComponent,
    ThirdBlockComponent,
    ReviewsPageComponent,
    FaqPageComponent,
    MatIconModule,
    InfoPageComponent,
    FormComponent,
    FooterComponent,
    LoadingComponentComponent,
    CommonModule,
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
