import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.css'],
  animations: [
    trigger('cardState', [
      state('visible', style({ width: '*' })),
      state('hidden', style({ width: '0' })),
      transition('visible => hidden', animate('0.5s')),
      transition('hidden => visible', animate('0.5s')),
    ]),
    trigger('cardStateSlow', [
      state('visible', style({ marginLeft: '0', opacity: '1' })),
      state('hidden', style({ marginLeft: '-50%', opacity: '0' })),
      transition('hidden => visible', animate('2s ease-in-out')),
    ]),
  ],
})

export class MatCardComponent {
  showMatCardOne: boolean = true;
  showMatCardTwo: boolean = false;
  selectedOption: string = '';
  item1Checked: boolean = false;
  item2Checked: boolean = false;
  item3Checked: boolean = false;

  saveData() {
    this.showMatCardOne = !this.showMatCardOne;
    this.showMatCardTwo = !this.showMatCardTwo;
  }

  }

