/*const todoList=[{
    name:'make dinner',
    Datecreated:Date() 
   },{name: 'owam',
Datecreated:Date()}];
renderTodolist();
function renderTodolist(){

    let todoListHTML='';

    for(let i =  0;i < todoList.length; i++){
        const todoObject = todoList[i];
        //const name=todoObject.name;
        const{name,Datecreated}=todoObject
        
        let html = `<input type="checkbox">
        <div>${name}</div>
        <div>${Datecreated}</div>
    <button onclick="
    todoList.splice(${i},1);
    renderTodolist();
    "class="delete-todo-button">Delete</button>
    `;
        todoListHTML +=html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}

document.getElementById("addlist").addEventListener("click", addTodo);


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name =inputElement.value;
    todoList.push({name});//adds it to the array
    console.log(todoList);//displays in console
    inputElement.value='';
    renderTodolist()
}*/
// Retrieve todoList from localStorage if it exists, otherwise, use an empty array
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    renderTodoList();

    function renderTodoList() {
        let todoListHTML = '';

        for (let i = 0; i < todoList.length; i++) {
            const todoObject = todoList[i];
            const { name, Datecreated } = todoObject;

            let html = `
            <li class="todo-item">

                <input type="checkbox" id="checkbox${i}" onchange="toggleStrikeThrough(${i})">
                <label for="checkbox${i}">${name}</label>
                <div>${Datecreated}</div>
                <button onclick="deleteTodo(${i})" class="delete-todo-button">Delete</button>
            </li>`;
            todoListHTML += html;
        }
        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    }

    function deleteTodo(index) {
        todoList.splice(index, 1);
        saveTodoList();
        renderTodoList();
    }

    function toggleStrikeThrough(index) {
        const labelElement = document.querySelector(`label[for="checkbox${index}"]`);
        labelElement.classList.toggle('strikethrough');
    }

    function addTodo() {
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;
        const Datecreated = new Date().toLocaleString();

        if (name.trim() !== '') {
            todoList.push({ name, Datecreated });
            saveTodoList();
            inputElement.value = '';
            renderTodoList();
        } else {
            alert('Please enter a task!');
        }
    }

    function saveTodoList() {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    document.getElementById("addlist").addEventListener("click", addTodo);
    document.getElementById("sortlist").addEventListener("click", sortList);

    function sortList() {
        todoList.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        saveTodoList();
        renderTodoList();
    }
