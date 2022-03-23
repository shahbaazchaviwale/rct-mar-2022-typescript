class Todo {
    id: string;
    text: string;
    completed: boolean;

    constructor(todoText: string, complete: boolean){
        this.text = todoText;
        this.completed = complete;
        this.id = new Date().toISOString();
    }
}


export default Todo;