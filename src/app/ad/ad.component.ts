import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {
  @Input() typeName: string;

  @Input() content: string;

  @Input() link: string;

  constructor() {}

  ngOnInit(): void {}

  goTo(){
    window.open(this.link, '_blank');
  }
}
