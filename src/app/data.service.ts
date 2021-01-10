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
    { code: 'White', name: '白色', order: 0 },
    { code: 'Black', name: '黑色', order: 0 },
    { code: 'Orange', name: '橘色', order: 0 },
    { code: 'Green', name: '綠色', order: 0 },
    { code: 'Yellow', name: '黃色', order: 0 },
    { code: 'Red', name: '紅色', order: 0 },
  ];
  // 題型
  quationItems: Array<QuationItem> = [
    { title: '請說出文字的顏色！', type: 0, answerColor: null },
    { title: '請說出背景的顏色！', type: 1, answerColor: null },
    { title: '請說出文字是什麼？', type: 2, answerColor: null },
  ];

  getQuation(): Quation {
    const choiceItems: Array<Color> = [];
    const excludeColorIndex = new Set<number>();
    // 建立題庫(題型、選項、答案)
    // 目前題型數量等於選項數量
    for (let index = 0; index < this.quationItems.length; index++) {
      // 抽顏色
      const c = this.getColor(excludeColorIndex);
      this.quationItems[index].answerColor = c;

      // 選項給予隨機編號
      c.order = Math.floor(Math.random() * this.colors.length);
      choiceItems.push(c);
    }
    console.log(choiceItems);
    // 依隨機編號排序選項
    choiceItems.sort((a, b) => a.order - b.order);

    // 隨機從題型中抽一題
    const qNumber = Math.floor(Math.random() * this.quationItems.length);
    return {
      quations: this.quationItems,
      choiceItems,
      useIndex: qNumber,
    };
  }

  getColor(usedColors: Set<number>): Color {
    while (true) {
      const index = Math.floor(Math.random() * this.colors.length);
      if (usedColors.has(index)) {
        continue;
      }
      usedColors.add(index);
      return this.colors[index];
    }
  }
}
