const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchbox = document.querySelector('.search input');
const generateTemplate = todo =>{
    const html = 
    `
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `

    list.innerHTML += html;
}

addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length > 3){
        generateTemplate(todo);
    }
    addForm.reset();
});

list.addEventListener('click',(event)=>{
   if(event.target.classList.contains('delete')){
       event.target.parentElement.remove();
   }
});

searchbox.addEventListener('keyup',()=>{
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(searchbox.value.trim().toLowerCase())).
    forEach((todo)=> todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(searchbox.value.trim().toLowerCase())).
    forEach((todo)=> todo.classList.remove('filtered'));
});