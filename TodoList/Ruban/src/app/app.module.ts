import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponentComponent } from './add-task-component/add-task-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoService } from './task/service/toDoService';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
