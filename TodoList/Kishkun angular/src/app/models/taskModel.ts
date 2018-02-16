export class Task {
    id: number;
    name: String;
    completed: boolean;
    
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        this.completed = false;
    }
}
