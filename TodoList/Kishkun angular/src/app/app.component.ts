import { Component } from '@angular/core';
import { Task } from './models/taskModel';
import { TaskService } from './services/task.service';

// const tasks = [
//   {
//     id: 0,
//     name: 'Learn HTML',
//     completed: false
//   },
//   {
//     id: 1,
//     name: 'Learn CSS',
//     completed: false
//   },
//   {
//     id: 2,
//     name: 'Learn JavaScript',
//     completed: false
//   }
// ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  tasks: Task[] = [
    new Task(0, 'Learn HTML'),
    new Task(1, 'learn CSS'),
    new Task(2, 'Learn JavaScript'),
  ];

  onDeleteTask(task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
      }
    }
  }

  onAddTask(newTask) {
    this.tasks.push(newTask);
    console.log(this.tasks);
  }

}
