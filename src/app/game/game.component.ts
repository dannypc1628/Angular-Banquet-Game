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
  maxContinueCount = 0;
  continueCount = 0;
  count = 0;
  time = 30;
  timer: any;
  stoped = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.maxContinueCount = 0;
    this.continueCount = 0;
    this.count = 0;
    this.time = 30;
    this.stoped = false;
    this.next();

    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        this.clearTimer();
        this.stoped = true;
      }
    }, 1000);
  }

  clearTimer(): void {
    clearInterval(this.timer);
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
      this.count++;
      this.continueCount++;
      if (this.continueCount > this.maxContinueCount) {
        this.maxContinueCount = this.continueCount;
      }
    }
    if ('no' === yesNo.toLocaleLowerCase()) {
      console.log('no');
      this.continueCount = 0;
    }
    this.next();
  }
}
