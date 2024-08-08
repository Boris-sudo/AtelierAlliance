import {Component, Input} from '@angular/core';
import {LearnMoreBtnComponent} from "./learn-more-btn.component";

@Component({
  selector: 'AdvantageCard',
  standalone: true,
  imports: [
    LearnMoreBtnComponent
  ],
  template: `
    <div class="card">
      <img [src]="src">

      <p class="title">{{ title }}</p>
      <p class="text">{{ text }}</p>

      <LearnMoreButton [text]="'Узнать ещё'"/>
    </div>
  `,
  styles: `
    .card {
      width: 250px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      img {
        width: 100%;
        height: 160px;
        object-fit: cover;
      }

      .title {
        font-family: var(--ff-bitter), sans-serif;
        font-size: 16px;
        font-weight: 600;
      }

      .text {
        font-size: 14px;
        letter-spacing: .5px;
        line-height: 165%;
        font-weight: 300;
        color: var(--text-secondary-color);
      }

      @media screen and (max-width: 950px) {
        width: 160px;

        img {
          width: 100%;
          height: 102px;
        }

        .text {
          font-size: 10px;
        }
      }

      @media screen and (max-width: 700px) {
        flex-direction: column;
        width: 80vw;

        img {
          width: 100%;
          height: calc(100vw * 160 / 250);
        }

        .title {
          font-size: clamp(16px, 4vw, 20px);
        }

        .text {
          font-size: 14px;
          line-height: 110%;
        }
      }
    }
  `
})
export class AdvantageCardComponent {
  @Input() src!: string;
  @Input() title!: string;
  @Input() text!: string;
}
