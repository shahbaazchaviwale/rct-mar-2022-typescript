class Todo {
    id: string;
    text: string;
    completed: boolean;

    constructor(todoText: string, complete: boolean){
        this.text = todoText;
        this.completed = complete;
        this.id = Math.random().toFixed(2)
    }
}


export default Todo;