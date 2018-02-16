import { Component } from '@angular/core';
import {Task} from './../models/task';
import { debug } from 'util';
import { ToDoService } from './task/service/toDoService';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


//import { Event } from '_debugger';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.toDoService.getTask()
    .subscribe((data)=> {
 
      this.tasks = data;
      
    });
 
  }
  createTask(taskName){

    return this.toDoService.createTask('http://repetitora.net/api/JS/Tasks?widgetId=1223', taskName.title)
    .subscribe(()=>console.log('success create'));
    
  }
  deleteTask(taskName){
    return this.toDoService.delete('http://repetitora.net/api/JS/Tasks?widgetId=1223&taskId='+taskName.id)
    .subscribe(()=>{
      console.log('success del')
      for(let i = 0; i<this.tasks.length; i++){
        if(taskName.id == this.tasks[i].id){
          this.tasks.splice(i,  1);
          break;
        }
      }
    });
  }
  changeTaskName(taskName){
    taskName.value
    return this.toDoService.createTask('http://repetitora.net/api/JS/Tasks?widgetId=1223&taskId='+taskName.id, taskName.title)
    .subscribe(()=>console.log('success change'));
  }

 // title = 'app';
 constructor(private toDoService: ToDoService) {
   
     
    }

// let data={
//   title: 'lalal'
// }
//      toDoService.post(data, 'http://repetitora.net/api/JS/Tasks?widgetId=1223')
//   }



  tasks: Task[] = [
    new Task('buy bread', false),
    new Task('buy milk', false),
    new Task('buy people', false)
  ];
  newToDoTitle: string = '';
  AddTask(task){
    this.createTask(task);
    this.tasks.push(task);
    
  }
  // onCheckTask(task){
  //   debugger;
  //   for(let i = 0; i<this.tasks.length; i++){
  //     if(task.id == this.tasks[i].id){
  //       task.completed = !task.completed;
  //       console.log(task.completed);
  //       break;
  //     }
  //   }
 
  // }
 

  // create = function(){
  //   let task: Task = new Task (this.newToDoTitle);
  //   this.tasks.push(task);
  //   this.newToDoTitle = '';
  // }
  // onDeleteTask = function(task){

  // for(let i = 0; i<this.tasks.length; i++){
  //   if(task.id == this.tasks[i].id){
  //     this.tasks.splice(i,  1);
  //     break;
  //   }
  // }

  // }
}



