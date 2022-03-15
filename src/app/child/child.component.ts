import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  ajithData!: FormGroup;  
  @Output()
  valuepassparent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  TransferData(value:any){
    this.valuepassparent.emit(value);
  }
  }