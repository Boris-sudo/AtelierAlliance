import { Component } from '@angular/core';

@Component({
  selector: 'ContactButton',
  standalone: true,
  imports: [],
  template: `
    <button class="btn">
      Связаться со специалистом
    </button>
  `,
  styles: `
    .btn {
      background:          var(--button-color);
      color:               var(--primary-color);
      display:             flex;
      flex-direction:      row;
      align-items:         center;
      align-content:       center;
      justify-content:     center;
      padding:             24px 36px;
      text-transform:      uppercase;
      transition-duration: var(--fast-transition-time);
      outline:             none;
      outline-offset:      0;
      border:              none;
      white-space:         nowrap;

      &:hover {
        background: var(--accent-color);
      }
    }
  `
})
export class ContactBtnComponent {

}
