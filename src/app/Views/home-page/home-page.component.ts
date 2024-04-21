import { Component } from '@angular/core';
import { CarouselComponent } from '../../Components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { CarouselHeroComponent } from '../../Components/carousel-hero/carousel-hero.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CarouselComponent,
    CommonModule,
    CarouselHeroComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
