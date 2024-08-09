import {Component, Input} from '@angular/core';

@Component({
  selector: 'LearnMoreButton',
  standalone: true,
  imports: [],
  template: `
    <button class="btn">
      {{ text }}
    </button>
  `,
  styles: `
    .btn {
      background:          transparent;
      color:               var(--secondary-color);
      display:             flex;
      flex-direction:      row;
      align-items:         center;
      align-content:       center;
      justify-content:     center;
      padding:             10px 40px;
      font-size: 13px;
      line-height: 125%;
      letter-spacing: 1px;
      font-weight: 700;
      text-transform:      uppercase;
      transition-duration: var(--fast-transition-time);
      outline:             none;
      outline-offset:      0;
      border: 1px solid var(--accent-color);
      white-space:         nowrap;

      &:hover {
        color: var(--button-color);
        border-color: var(--button-color);
      }
    }
  `
})
export class LearnMoreBtnComponent {
  @Input() text!: string;
  @Input() bg!: boolean;
}
