import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  colors = [
    {code:'#000',name:'white'},
    {code:'#FFF',name:'black'},

  ];

  getColor(){
    return this.colors;
  }
}
