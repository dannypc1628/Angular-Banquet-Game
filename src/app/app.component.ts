import { Component, OnInit } from '@angular/core';
import { Ad } from './type/ad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  state = 0;
  timer: any;
  count = 0;
  maxCount: string;
  maxContinueCount: string;
  ad: Ad;
  ads: Array<Ad> = [
    {
      type: '廣告',
      title: '長庚的公主連結日記',
      link: 'https://www.facebook.com/princess.connect.dannyliu.me',
      color: 'rgb(219, 112, 147)',
    },
    {
      type: '廣告',
      title: '  長庚的作業簿',
      link: 'https://www.facebook.com/dannyliu.me',
      color: 'rgb(30, 144, 255)',
    },
  ];

  ngOnInit(): void {
    this.maxContinueCount = localStorage.getItem('maxContinueCount');
    this.maxCount = localStorage.getItem('maxCount');

    this.adPlay();
  }

  go(): void {
    this.state = 1;
  }

  adPlay(): void {
    this.ad = this.ads[this.count % this.ads.length];

    this.timer = setInterval(() => {
      this.count++;
      this.ad = this.ads[this.count % this.ads.length];
    }, 7000);
  }
}
