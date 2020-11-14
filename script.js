
document.getElementById('btn').addEventListener('click', addNewItem);

//Add event listener to all todo item
let todos = document.querySelector('.todos');

//handling saved data from storage
todos.innerHTML = localStorage.getItem('todoList');


todos.addEventListener('click', (event) => {
    //  console.log(event.target);
    // console.log(event.target.parentElement);
    let buttonFunction = event.target.innerHTML;

    if (buttonFunction === 'Delete')
        confirm("Are you sure?") ? todos.removeChild(event.target.parentElement) : null;

    else if (buttonFunction === 'Done') {

        event.target.parentElement.style.textDecoration = 'line-through';
        //event.target.style.setProperty('display', 'none');
        event.target.innerHTML = 'Undo';
    }

    else if (buttonFunction === 'Undo') {
        event.target.parentElement.style.textDecoration = 'none';
        event.target.innerHTML = 'Done';
    }
   //Update local storage
    localStorage.setItem('todoList', todos.innerHTML);
    
});


function addNewItem() {
    let newTodo = document.getElementById('new-item').value;
    //console.log(`New todo ${newTodo}`);

    if (newTodo !== '') {
        //create new element
        let element = document.createElement("li");
        let elementNode = document.createTextNode(newTodo);
        element.appendChild(elementNode);

        //Update list
        let newItem = document.getElementById('todos');
        newItem.appendChild(element);

        //create delete and done button
        let del = document.createElement('button');
        let done = document.createElement('button');
        done.className = 'done-btn';
        del.className = 'dlt-btn';
        del.appendChild(document.createTextNode('Delete'));
        done.appendChild(document.createTextNode('Done'));
        element.appendChild(done);
        newItem.appendChild(element);

        element.appendChild(del);
        newItem.appendChild(element);

        //clear input text area
        let reset = document.getElementById('new-item').value = '';

        //Update storage
        localStorage.setItem('todoList', todos.innerHTML);
    }

}

