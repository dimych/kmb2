import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './../../models/task';
import {AppComponent} from './../app.component';


@Component({
  selector: 'add-task',
  templateUrl: './add-task-component.component.html',
  styleUrls: ['./add-task-component.component.css']
})
export class AddTaskComponentComponent implements OnInit {
  @Output() addEmitter = new EventEmitter<Task>();
  newToDoTitle = '';
  
  create(){

    let task = new Task (this.newToDoTitle);
    
    this.addEmitter.emit(task);
    this.newToDoTitle = '';

  }

  constructor() { }

  ngOnInit() {
  }

}
