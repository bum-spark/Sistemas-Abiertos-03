import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'home-page',
  imports: [Footer, RouterLink],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

}
