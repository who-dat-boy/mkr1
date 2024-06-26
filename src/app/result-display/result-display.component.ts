import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.scss']
})
export class ResultDisplayComponent {
  @Input() calculationResults?: any[];

  constructor() { 
    console.log(this.calculationResults); // Вивести масив результатів у консоль
  }
}