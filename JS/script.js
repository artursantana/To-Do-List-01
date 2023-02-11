

//SELECT ELEMENTS
const mainForm = document.querySelector('#main-form')
const controlInput = document.querySelector('#control-input')
const todoList = document.querySelector('#todolist')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancel = document.querySelector('#cancel-btn')
const tollBar = document.querySelector('#tollBar')
const divSearch = document.querySelector('#search')
const divFilter = document.querySelector('#filter')
const editFormBtn = document.querySelector('#edit-form-btn')

let oldInputValue;

//FUNCTION
const saveTodo = (text) => {

    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML = '<i class="fa-solid fa-check finish-todo"></i>'
    todo.appendChild(doneBtn)
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = '<i class="fa-solid fa-pen edit-todo"></i>'
    todo.appendChild(editBtn)
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('remove-todo')
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark remove-todo"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)
    controlInput.value = ''
    controlInput.focus()

}



const toggleForm = () => {
    mainForm.classList.toggle('hide')
    tollBar.classList.toggle('hide')
    divSearch.classList.toggle('hide')
    divFilter.classList.toggle('hide')
}


const updateTodo = (text) => {
    const todos = document.querySelectorAll('.todo')

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3')
        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text
        }
    })
}



//EVENTS
mainForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = controlInput.value
    if(inputValue){
        saveTodo(inputValue)
        
    }

})

document.addEventListener('click', (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest('div')
    let todoTitle;

    if(parentEl && parentEl.querySelector('h3')){
         todoTitle = parentEl.querySelector('h3').innerText
    }

  if(targetEl.classList.contains('finish-todo')){
    parentEl.classList.toggle('done')
  }
  if(targetEl.classList.contains('remove-todo')){
    parentEl.remove()
  }
  if(targetEl.classList.contains('edit-todo')){
    editForm.classList.toggle('hide')
    toggleForm()
    editInput.value = todoTitle
  oldInputValue = todoTitle

  }
  
  
})


editFormBtn.addEventListener('click', (e) => {
    e.preventDefault()

    editForm.classList.toggle('hide')

    const editInputvalue = editInput.value

    if(editInputvalue){

        updateTodo(editInputvalue)

    }
    toggleForm()
})