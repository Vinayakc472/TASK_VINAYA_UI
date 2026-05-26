import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { CardComponent, CardStatus } from '../shared/card/card.component';

interface DashboardCard {
  id: string;
  title: string;
  description: string;
  status: CardStatus;
  details: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cards: DashboardCard[] = [
   {
  id: 'a',
  title: 'Grid Compatibility-FRT Validation',
  description:
    'Voltage dip simulation and grid recovery validation using the HiL-GridCoP emulator.',
  status: 'running',
  details:
    'Hardware-in-the-loop campaign on the 44 MVA HiL-GridCoP platform. ' +
    'Currently validating fault ride-through behaviour under asymmetric voltage events. ETA ~ 40 min.',
},
   {
  id: 'b',
  title: 'Rotor Blade Fatigue Test',
  description:
    'Edgewise fatigue loading and strain monitoring for offshore rotor blades.',
  status: 'warning',
  details:
    'Blade Hall fatigue campaign running with fibre-optic strain instrumentation. ' +
    'Anomalous vibration peaks detected during cycle group 14. Engineering review required.',
},
{
  id: 'c',
  title: 'Main Bearing Endurance - LBL',
  description:
    'Lubrication stability and oil-debris analysis under dynamic offshore load profiles.',
  status: 'passed',
  details:
    'Large Bearing Laboratory endurance sequence completed successfully. ' +
    'Oil particle count and thermal expansion remained within IEC tolerance limits.',
},
  ];

  expandedId: string | null = null;

  onCardClicked(card: DashboardCard): void {
    this.expandedId = this.expandedId === card.id ? null : card.id;
  }
}