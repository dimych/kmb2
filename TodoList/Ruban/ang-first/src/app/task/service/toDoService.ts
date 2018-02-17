
import { Task } from './../../../models/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ToDoService {

    constructor(private httpClient: HttpClient) { }

    public getTask(): Observable<any> {
        return this.httpClient.get('http://repetitora.net/api/JS/Tasks?widgetId=1223&count=100');
    }
    public createTask(name: string): Observable<any> {

        return this.httpClient.post('http://repetitora.net/api/JS/Tasks?widgetId=1223', {
            title: name
        } );

    }
    public delete(id): Observable<any> {

        return this.httpClient.delete('http://repetitora.net/api/JS/Tasks?widgetId=1223&taskId='+id);

    }
    public changeTask(id, name): Observable<any> {

        return this.httpClient.put('http://repetitora.net/api/JS/Tasks?widgetId=1223&taskId='+id, {
            title: name
        } );

    }
}

