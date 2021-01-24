const form = document.querySelector('#task-form')
const input = document.querySelector('input#task')
const addBtn = document.querySelector('.btn')
const cleanrBtn = document.querySelector('.black-btn')
const ul = document.querySelector('ul') 

form.addEventListener('submit', addItems)

function addItems(e){
    if (input.value ===''){
        alert('Please enter task');
    }else{
        //create li & Textnode
        let newLi = document.createElement('li');
        let textNode = document.createTextNode(input.value);
        newLi.className = 'collection-item'
        newLi.appendChild(textNode);
        
        //link & icon
        let link = document.createElement('a');
        link.innerHTML = '<i class="fas fa-times"></i>'
        newLi.appendChild(link)
        ul.appendChild(newLi)
        console.log(newLi)
        input.value = ''
    }
    
    e.preventDefault();
}