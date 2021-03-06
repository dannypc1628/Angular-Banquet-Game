import { Component, Input, OnInit } from '@angular/core';
import { Ad } from '../type/ad';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {
  @Input() ad: Ad;

  constructor() {}

  ngOnInit(): void {}

  goTo(): void {
    window.open(this.ad.link, '_blank');
  }
}
