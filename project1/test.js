const form = document.querySelector('form')
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const text = document.querySelector('p.text')
const input = document.querySelector('#input')
const output = document.querySelector('#output')
const select = document.querySelector('#select')
const ul = document.querySelector('ul')
const li = document.querySelector('li:first-child')


//Event Bubling
li.addEventListener('click',liClick)

function liClick(e){
    console.log('presss li')

    e.preventDefault()
}
ul.addEventListener('click',ulClick)

function ulClick(e){
    console.log('presss ul')

    e.preventDefault()
}
container.addEventListener('click',containerClick)

function containerClick(e){
    if(e.target.parentElement.classList.contains('collection-item')){
        console.log('delete')
    }
    
    e.preventDefault()
}
form.addEventListener('click',formClick)

function formClick(e){
    console.log('presss form')
    
    e.preventDefault()
}

// ul.addEventListener('click', btnClick)
// function btnClick(e){

//     if (ul.children)

//     e.preventDefault()
// }

btn.addEventListener('click',button)

function button(e){
    // console.log(e.target)
    // console.log(e)
    // console.log(e.offsetX)
    // text.textContent = `MouseX:${e.offsetX}, MouseY:${e.offsetY}`
    // btn.classList.toggle('change')
    // output.value = input.value
}

input.addEventListener('input',copy)

function copy(e){
    // console.log(e.target.value)
    // output.value = e.target.value
}

select.addEventListener('change',change)

function change(e){
    // console.log(e.target)
}



//LocalStorage

//const form = document.querySelector('form')

form.addEventListener('submit',action)

function action(e){
//   task = document.querySelector('#input')
//   console.log(task.value)
  e.preventDefault()

    let files = [];
    let tasks = document.querySelector('#input')

    if (localStorage.getItem('task') === null){
        files = []
    }else{
        files =JSON.parse(localStorage.getItem('task'))
    }

    files.push(tasks.value)
    localStorage.setItem('task',JSON.stringify(files))
    console.log(files)
}



// localStorage.setItem('task','one')
// localStorage.setItem('task','two')
let x = localStorage.getItem('task')
// console.log(typeof(x))


