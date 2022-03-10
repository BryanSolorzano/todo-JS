import { Todo } from '../classes'
import { todoList } from '../index'

// Referencias en el html 
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnEliminar = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
const count = document.querySelector('#count');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild); // De esta forma evitamos que se agregue también el div

    return div.firstElementChild;
};

txtInput.addEventListener('keyup', (event) => {
    // console.log(event.currentTarget);

    // Veamos si la tecla enter ha sido clickeada para porceder con la captura del valor del input
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);

        txtInput.value = '';

        count.textContent = todoList.countPendientes();    }

});

divTodoList.addEventListener('click', (event) => {
    // console.log(event.target.localName);
    const nombreElemento = event.target.localName; // input label button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) { // click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
        count.textContent = todoList.countPendientes();
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
        count.textContent = todoList.countPendientes();
    }

    console.log(todoElemento);
    // console.log(todoId);
    // console.log(todoList);

});

btnEliminar.addEventListener('click', (e) => {
    todoList.eliminarCompletados();
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }
    console.log(todoList);
    count.textContent = todoList.countPendientes();
});

ulFilters, addEventListener('click', (event) => {
    // console.log(event.target.text);
    const filtro = event.target.text;
    if (!filtro) { return; };

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected')

    for (const element of divTodoList.children) {
        // console.log(element);
        element.classList.remove('hidden');
        const completado = element.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    element.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    element.classList.add('hidden')
                }
                break;
        }
    }
});