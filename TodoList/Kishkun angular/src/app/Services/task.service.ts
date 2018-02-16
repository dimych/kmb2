import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/taskModel';


@Injectable()
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  public getTasks(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public creatTasks(url: string, name: string): Observable<any> {
    return this.httpClient.post(url, {
      title: name
    } );
  }

  public delete(url: string): Observable<any> {
    return this.httpClient.delete(url);
  }
}