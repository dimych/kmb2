import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/taskModel';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() item: Task;
  @Output() creatTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();

  private idCounter: number;
  constructor() {
    this.idCounter = 3;
   }

  ngOnInit() {
  }


  private onAddTask(title): void {
    console.log('Task: ', title);
    let newTask = new Task(this.idCounter, title);
    this.creatTaskEmitter.emit(newTask);
    this.idCounter++;
  }

}
