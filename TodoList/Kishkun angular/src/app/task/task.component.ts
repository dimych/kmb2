import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/taskModel';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  @Input() item: Task;
  @Output() deleteTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {
  }

  onDelete() {
    this.deleteTaskEmitter.emit(this.item);
  }

  onCheck() {
    this.item.completed = !this.item.completed;
  }

  ngOnInit() {
  }

  }
