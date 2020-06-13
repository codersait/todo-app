const searchForm = document.querySelector('.search');
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += html;
};

// search todos
const filterTodos = searchTerm => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.remove('filtered'));
};

searchForm.addEventListener('keyup', e => {
  const searchTerm = searchForm.search.value.trim().toLowerCase();
  filterTodos(searchTerm);
});

// delete todos
list.addEventListener('click', e => {
  /* if (e.target.tagName === 'I') {
     e.target.parentElement.remove();
  }*/
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// add todos
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});
