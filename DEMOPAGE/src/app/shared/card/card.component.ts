import { Component, Input } from '@angular/core';

export type CardStatus = 'passed' | 'running' | 'failed' |'warning';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  /** Heading shown at the top of the card. */
  @Input() title = '';

  /** Body text under the title. */
  @Input() content = '';

  /** Optional status badge. `null` hides the badge entirely. */
  @Input() status: CardStatus | null = null;
}