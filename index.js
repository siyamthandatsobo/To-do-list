
//Loops to display on the document 
/*let i = 1;
while(i<=5){
    console.log(i);
    i=i+1
} 
for(let i=1;i <=5;i++){
    console.log(i)
}
let randomnumber=0;
while(randomnumber<0.5){
    randomnumber =Math.random();
    
}
console.log(randomnumber)
//Looping through an array*/
/*const todolist =[
    'make dinner',
    'wash dishes',
    'watch youtube'
]
for(let index=0;index <= todolist.length -1;index++){
    const value=todolist[index];
    console.log(value);
    
}*/
/*const nums =[1,1,3];
let total=0;
for(let i =0;i<nums.length;i++){
    const num=nums[i];
    total=total+num;
}
console.log(total)

const numsdoubled=[];
for(let i =0;i<nums.length;i++){
    const num =nums[i];
    numsdoubled.push(num *2);
}
console.log(numsdoubled)*/

const todoList=['siya', 'owam'];

/*const todoList=['siya', 'owam'];

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

        const todo = todoList[i];
        let html = `<br><div><input type ='checkbox' class="strike"></input> <span>${todo}<button>Delete</button></span></div><br>`;
        
        todoListHTML +=html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

    
}*/
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;*/

    
//}
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name =inputElement.value;
    todoList.push(name);//adds it to the array
    console.log(todoList);//displays in console
    inputElement.value='';
    renderTodolist()
}
