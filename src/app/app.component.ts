import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multi-app';
  mainroute = true
  constructor() {
  }

  emitroute : string = '';
  switchapp(valueEmitted : any) {
    this.emitroute = valueEmitted;
  }

  ngOnInit() {
  }
}
