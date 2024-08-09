import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <div [style.align-items]="align? 'flex-start' : 'center'" class="title">
      <p>{{ text }}</p>
      <h1 [innerHTML]="title" [style.text-align]="align? 'flex-start' : 'center'"></h1>
    </div>
  `,
  styles: `
    .title {
      display:         flex;
      flex-direction:  column;
      justify-content: center;
      gap:             10px;

      p {
        width:          fit-content;
        color:          var(--button-color);
        font-size:      16px;
        font-weight:    400;
        text-transform: uppercase;
      }

      h1 {
        font-family: var(--ff-bitter), sans-serif;
        font-size:   var(--fs-h1);
        font-weight: 600;
        line-height: 100%;
      }

      @media screen and (max-width: 700px) {
        gap: 5px;
        p {
          font-size: 13px;
        }
        h1 {
          font-size: clamp(25px, 6vw, 45px);
        }
      }
    }
  `
})
export class TitleComponent {
  @Input() align?: boolean = false;
  @Input() title!: string;
  @Input() text!: string;
}
