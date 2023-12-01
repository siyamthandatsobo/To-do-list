/*const myarray = [10,20,30];
console.log(myarray)
myarray[0]=99;
console.log(myarray)
console.log(typeof([1,2]));
console.log(Array.isArray([1,2]));
console.log(myarray.length)
myarray.push(100);//adds at end
console.log(myarray);
myarray.splice(0,2)//takes 2 param
console.log(myarray)*/























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
renderTodolist();
function renderTodolist(){

    let todoListHTML='';

    for(let i =  0;i < todoList.length; i++){
        const todo = todoList[i];
        let html = `<br><div><input type ='checkbox' class="strike"></input> <span>${todo}<button>Delete</button></span></div><br>`;
        
        todoListHTML +=html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

    
}*/
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name =inputElement.value;
    todoList.push(name);//adds it to the array
    console.log(todoList);//displays in console
    inputElement.value='';
    renderTodolist()
}