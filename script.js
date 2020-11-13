
document.getElementById('btn').addEventListener('click', addNewItem);

let todos = document.querySelectorAll('li');

//console.log (todos);
addListener();

function addListener() {
//Add event listener to each button; del and done
    todos.forEach(todo => {
       // console.log(todo.children);
    
        for(let child of todo.children) 
            child.addEventListener('click', function(event) {
                  console.log(event.target);
            })
    
    });
}



function addNewItem () {
    let newTodo = document.getElementById('new-item').value;
    //console.log(`New todo ${newTodo}`);
    
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
    //console.log(`New Item: ${newTodo}`);

    //clear input text area
    let reset = document.getElementById('new-item').value = '';
    addListener();
}
