import { Todo } from "./tod.class";

export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStorade();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guargarLocalStorage();
        console.log(this.todos);
        console.log(todo.imprimirTodo());
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guargarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guargarLocalStorage();
                break; // Para slairme del ciclo
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => todo.completado != true);
        this.guargarLocalStorage();
        // for (let dato of borrado){
        //     this.eliminarTodo(dato.id);
        // }   
    }

    guargarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorade() {
        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];
        this.todos = this.todos.map(Todo.fromJson);
    }

    countPendientes(){
        let count = 0;
        for(const todo of this.todos){
            if(todo.completado != true){
                count++;
            }
        }
        return count;
    }
}
