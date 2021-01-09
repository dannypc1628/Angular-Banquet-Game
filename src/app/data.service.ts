import { Injectable } from '@angular/core';
import { Color } from './type/color';
import { Quation } from './type/quation';
import { QuationItem } from './type/quationItem';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // 會出現的顏色
  colors: Array<Color> = [
    { code: '#000', name: '白色', no: 1 },
    { code: '#FFF', name: '黑色', no: 2 },
    { code: '#FFF', name: '橘色', no: 3 },
    { code: '#FFF', name: '綠色', no: 4 },
    { code: '#FFF', name: '黃色', no: 5 },
    { code: '#FFF', name: '紅色', no: 6 },
  ];

  // 題型
  quationItems: Array<QuationItem> = [
    { title: '請說出文字的顏色！', type: 1, answerColor: null },
    { title: '請說出背景的顏色！', type: 2, answerColor: null },
    { title: '請說出文字是什麼？', type: 3, answerColor: null },
  ];

  getQuation(): Quation {
    const choiceItems: Array<Color> = [];

    // 建立題庫(題型、選項、答案)
    // 目前題型數量等於選項數量
    for (let index = 0; index < this.quationItems.length; index++) {

      // 抽顏色
      const number = Math.floor(Math.random() * this.colors.length);
      const c = this.colors[number];
      this.quationItems[index].answerColor = c;

      // 選項給予隨機編號
      c.no = Math.floor(Math.random() * this.colors.length);
      choiceItems.push(c);
    }
    console.log(choiceItems);
    // 依隨機編號排序選項
    choiceItems.sort((a, b) => a.no - b.no);

    // 隨機從題型中抽一題
    const qNumber = Math.floor(Math.random() * this.quationItems.length);
    return {
      Quation: this.quationItems[qNumber],
      ChoiceItems: choiceItems,
    };
  }
}
