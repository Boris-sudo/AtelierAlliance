import { Component } from '@angular/core';
import {ContactBtnComponent} from "../../elements/contact-btn.component";
import {TitleComponent} from "../../elements/title.component";
import {AdvantageCardComponent} from "../../elements/advantage-card.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ContactBtnComponent,
    TitleComponent,
    AdvantageCardComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
