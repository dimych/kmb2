import { Component, OnInit } from '@angular/core';
import { Task } from './models/taskModel';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.taskService.getTasks('http://repetitora.net/api/JS/Tasks?widgetId=1333').subscribe((data) => {

      this.tasks = data;

    });

  }
  creatTask(taskName) {
   return this.taskService.creatTasks('http://repetitora.net/api/JS/Tasks?widgetId=1333', taskName.name).subscribe((data) => console.log('success'));
  }

  deleteTask(id) {
    return this.taskService.delete('http://repetitora.net/api/JS/Tasks?widgetId=1223&taskId= ' + id);
  }

  title = 'ToDoList';
  tasks: Task[] = [
    new Task(0, 'Learn HTML'),
    new Task(1, 'learn CSS'),
    new Task(2, 'Learn JavaScript'),
  ];

  constructor(private taskService: TaskService) {}

  onDeleteTask(task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  onAddTask(newTask) {
    this.creatTask(newTask);
    this.tasks.push(newTask);
    // console.log(this.tasks);
  }

}
