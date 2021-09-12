
var form = document.querySelector('form');
var todoList = document.getElementById('list');
var button = document.querySelector('button');
var input = document.querySelector('#todoInput');
var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

localStorage.setItem('todos', JSON.stringify(todosArray));

var storage = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', function(e){
    e.preventDefault();
    todosArray.push(input.value);
    localStorage.setItem('todos', JSON.stringify(todosArray));
    todoMaker(input.value);
    input.value = '';
});

function todoMaker(text){
    var todo = document.createElement('li');
    todo.textContent = text;
    todoList.appendChild(todo);    
}

for(var i = 0; i < storage.length; i++){
    todoMaker(storage[i]);
}

button.addEventListener('click', function(){
    localStorage.clear();
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
    }
});
