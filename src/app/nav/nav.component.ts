import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() approute = new EventEmitter<any>();
  @Output() mainroute: any;

  constructor() { }
  getapproute(approute : string){
    this.approute.emit(approute)
  }

  ngOnInit(){
  }

}
