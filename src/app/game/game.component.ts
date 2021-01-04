import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  quation: string;
  answer: string;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  next(): void {}

  checkAnswer(answer: string): void {
    if (answer === this.answer) {
      this.showAnswer('yes');
    } else {
      this.showAnswer('no');
    }
  }
  showAnswer(yesNo: string): void {
    if ('yes' === yesNo.toLocaleLowerCase()) {
    }
    if ('no' === yesNo.toLocaleUpperCase()) {
    }
  }
}
