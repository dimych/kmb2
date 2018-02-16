
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
    public createTask(url: string, name: string): Observable<any> {

        return this.httpClient.post(url, {
            title: name
        } );

    }
    public delete(url: string): Observable<any> {

        return this.httpClient.delete(url);

    }
    public changeTask(url: string, name): Observable<any> {

        return this.httpClient.put(url, {
            title: name
        } );

    }
}

