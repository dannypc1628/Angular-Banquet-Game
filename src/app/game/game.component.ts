import { Color } from './../type/color';
import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { QuestionItem } from '../type/questionItem';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  questions: Array<QuestionItem>;
  choiceItems: Array<Color>;
  useIndex: number;
  maxContinueCount = 0;
  continueCount = 0;
  newMaxContinue = false;
  newMaxCount = false;
  count = 0;
  time = 0;
  timer: any;
  stopped = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.maxContinueCount = 0;
    this.continueCount = 0;
    this.count = 0;
    this.time = 60;
    this.stopped = false;
    this.next();

    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        this.clearTimer();
        this.stopped = true;
        const maxContinue = localStorage.getItem('maxContinueCount');
        if (
          maxContinue == null ||
          this.maxContinueCount > parseInt(maxContinue, 10)
        ) {
          this.newMaxContinue = true;
          localStorage.setItem(
            'maxContinueCount',
            this.maxContinueCount.toString()
          );
        }

        const maxCount = localStorage.getItem('maxCount');
        if (
          maxCount == null ||
          this.count > parseInt(maxContinue, 10)
        ) {
          this.newMaxCount = true;
          localStorage.setItem(
            'maxCount',
            this.count.toString()
          );
        }

      }
    }, 1000);
  }

  @HostListener('window:keydown', ['$event.key'])
  input(key: number): void {
    this.checkAnswer(this.choiceItems[key - 1].name);
  }

  clearTimer(): void {
    clearInterval(this.timer);
  }

  next(): void {
    const question = this.dataService.getQuestion();
    this.questions = question.questions;
    this.choiceItems = question.choiceItems;
    this.useIndex = question.useIndex;
  }

  checkAnswer(answer: string): void {
    if (answer === this.questions[this.useIndex].answerColor.name) {
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
