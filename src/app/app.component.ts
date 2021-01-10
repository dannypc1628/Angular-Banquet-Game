import { state } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-banquet-game';
  adTypeName = '廣告';
  adContent = '長庚的公主連結日記';
  adLink = 'https://www.facebook.com/princess.connect.dannyliu.me';

  state = 0;

  go():void{
    this.state = 1;
  }
}
