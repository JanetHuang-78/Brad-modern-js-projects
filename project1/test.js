const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const text = document.querySelector('p.text')
const input = document.querySelector('#input')
const output = document.querySelector('#output')
const select = document.querySelector('#select')
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

const form = document.querySelector('form')

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


