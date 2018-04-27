export class Task{
    id: number;
    title: string;
    completed: boolean;
    constructor(title, completed = false){

        this.title = title;
        this.completed = completed;
    } 

 
}