import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'task',                    
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() item;
  @Output() changeEmitter = new EventEmitter<any>();
  @Output() deleteEmitter = new EventEmitter<boolean>();
  // @Output() checkBoxEmitter = new EventEmitter<boolean>();
  deleted = false;
  isEditMode = false;
  onDelete(){
    this.deleteEmitter.emit(this.item);
  }
  saveTask(){
    this.changeEmitter.emit(this.item);
  }
  toggleEditMode(){
    this.isEditMode = !this.isEditMode;
  }
  onCheckBox(){
    // this.checkBoxEmitter.emit(this.item);
    this.item.completed = !this.item.completed;
    console.log(this.item);

  }

  constructor() { }

  ngOnInit() {
  }

}

