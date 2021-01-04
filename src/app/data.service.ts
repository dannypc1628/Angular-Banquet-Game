import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  //選項數量
  answerCount = 3;

  //會出現的顏色
  colors = [
    { code: '#000', name: '白色' },
    { code: '#FFF', name: '黑色' },
  ];

  //題型
  quations = [
    { quation: '請說出文字的顏色！', type: 1 },
    { quation: '請說出背景的顏色！', type: 2 },
    { quation: '請說出文字是什麼？', type: 3 },
  ];

  getReadomQuation() {
    let qNumber = Math.floor(Math.random() * this.quations.length);
    let colors = this.getColor();
    let item = {
      q: this.quations[qNumber],
      a: colors,
    };
  }
  getColor() {
    const set = new Set();
    let answerColors = [];
    while (set.size < this.answerCount) {
      const number = Math.floor(Math.random() * this.colors.length);
      if (set.has(number)) {
        continue;
      }
      set.add(number);
      answerColors.push(this.colors[number]);
    }
    return answerColors;
  }
}
