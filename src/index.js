import './style.css';
import { Todo, TodoList } from './classes'; // BUscara el index por defecto
import { crearTodoHtml } from './js/componentes';

// import { saludar } from './js/componentes.js';
// import { Todo } from './classes/tod.class.js';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

// Cuando el elemento es el mismo que sera usado en nuestra función pues no hace falta especificarlos en los argumentos
todoList.todos.forEach(crearTodoHtml);
// todoList.todos.forEach(todo => crearTodoHtml(todo)); // Esto seria lo mimso que lo de arriba

console.log(todoList.todos);

// const tarea = new Todo('Aprender JS');
// todoList.nuevoTodo(tarea);
// tarea.completado = true;
// console.log(todoList);
// crearTodoHtml(tarea);

// TRABAJAR CON EL LOCALSTORAGE Y SESSTIONSTORAGE

// No permite ejecutar una acción depsues del timepo que le pongamos
// localStorage.setItem('mi-key', 'BRYAN');
// setTimeout(() => { // 
//     localStorage.removeItem('todo');
// }, 1500);






