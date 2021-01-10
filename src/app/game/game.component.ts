import { Color } from './../type/color';
import { Quation } from './../type/quation';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuationItem } from '../type/quationItem';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  quations: Array<QuationItem>;
  choiceItems: Array<Color>;
  useIndex: number;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.next();
  }

  next(): void {
    const quation = this.dataService.getQuation();
    this.quations = quation.quations;
    this.choiceItems = quation.choiceItems;
    this.useIndex = quation.useIndex;
  }

  checkAnswer(answer: string): void {
    if (answer === this.quations[this.useIndex].answerColor.name) {
      this.showAnswer('yes');
    } else {
      this.showAnswer('no');
    }
  }
  showAnswer(yesNo: string): void {
    if ('yes' === yesNo.toLocaleLowerCase()) {
      console.log('yes');
    }
    if ('no' === yesNo.toLocaleLowerCase()) {
      console.log('no');
    }
    this.next();
  }
}
