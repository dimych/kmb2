import { Injectable } from '@angular/core';
import { Task } from '../models/taskModel';


@Injectable()
export class TaskService {

  private tasks: Task[];

  getTasks(): Task[] {
    return this.tasks;
  }

  onAddTask(title: string) {

  }
  // private nextId: number;

  // constructor() {
  //   this.tasks = [
  //     new Task(0, 'Learn HTML'),
  //     new Task(1, 'learn CSS'), 
  //     new Task(2, 'Learn JavaScript'),
  //   ];

  //   this.nextId = 3;
  //  }

  //  private onAddTask(name: string): void {
  //   console.log(this.tasks);
  //  }

}
