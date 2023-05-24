const list = document.querySelector('.todo-list');
const input = document.querySelector('.todo-input');
const form = document.querySelector('.todo-form');
const priority = document.querySelector('.todo-priority');

priority.addEventListener('click', togglePriority);

form.addEventListener('submit', addTodoItem);

function togglePriority() {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
}

function addTodoItem(evt) {
  evt.preventDefault();

  const newToDoItem = createTodoItemElement(input.value);
  if (priority.classList.contains('is-important')) {
    newToDoItem.classList.add('is-important');
  }

  list.appendChild(newToDoItem);
  input.value = '';
}

function createTodoItemElement(text) {
  const newToDoItem = document.createElement('li');
  newToDoItem.textContent = text;
  return newToDoItem;
}

// let list = document.querySelector('.todo-list');
// let input = document.querySelector('.todo-input');
// let form = document.querySelector('.todo-form');
// let priority = document.querySelector('.todo-priority');

// priority.onclick = function () {
//     priority.classList.toggle('is-important');
//     if (priority.classList.contains('is-important')) {
//         priority.textContent = 'Важная задача';
//     } else {
//         priority.textContent = 'Обычная задача';
//     }
// };

// form.onsubmit = function (evt) {
//     evt.preventDefault();

//     let newToDoItem = document.createElement('li');
//     if (priority.classList.contains('is-important')) {
//         newToDoItem.classList.add('is-important');
//     };

//     newToDoItem.textContent = input.value;
//     input.value = '';
//     list.append(newToDoItem);
// };

/*
1. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
2. Текст задачи берётся из поля ввода (переменная input).
3. Если у переключателя приоритета (переменная priority) есть класс is-important, то новой задаче также добавляется класс is-important.
4. Бонус: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Подходят оба варианта.
*/

