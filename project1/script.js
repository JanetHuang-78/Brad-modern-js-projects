const form = document.querySelector('#task-form')
const input = document.querySelector('input#task')
const addBtn = document.querySelector('.btn')
const cleanBtn = document.querySelector('.black-btn')
const ul = document.querySelector('ul') 
const filter = document.querySelector('#filter')

//LocalStorage so far not use
// AddLocalStorage()

//Add Items
form.addEventListener('submit', addItems)
//Remoce items from icon
ul.addEventListener('click', removeLi)
//Removes items from clean button
cleanBtn.addEventListener('click',cleanItems)
//Filter data
filter.addEventListener('keyup', filterText)

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
        // console.log(newLi)    

        //empty the input
        input.value = ''

    }
    e.preventDefault();
    
}

function AddLocalStorage(){
    let files;
    if (localStorage.getItem('task')===null){
        files = [];
        console.log('nothing')
    }else{
        // files = localStorage.getItem('task')
        files = JSON.parse(localStorage.getItem('task'))
        console.log(files, typeof(files))
    
        //create li & Textnode
        let newLi = document.createElement('li');
        let textNode = document.createTextNode(files);
        newLi.className = 'collection-item'
        newLi.appendChild(textNode);
        
        //link & icon
        let link = document.createElement('a');
        link.innerHTML = '<i class="fas fa-times"></i>'
        newLi.appendChild(link)
        ul.appendChild(newLi)
    
    }
    // e.preventDefault();
}



function removeLi(e){
    // console.log(e.target.parentElement.parentElement.classList)
    if (e.target.parentElement.parentElement.classList.contains('collection-item')){
        // console.log(e.target,e.target.parentElement.parentElement)
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}


function cleanItems(e){
    if (confirm("Are you sure?")){
        let liList = document.querySelectorAll('li')
        liList.forEach((lis)=>{lis.remove()})
    }
    e.preventDefault();
}


function filterText(e){
    let Text = e.target.value.toLowerCase();
    liList = document.querySelectorAll('li')
    liList.forEach((lis)=>{
        let liText = lis.innerText.toLowerCase();
        if (liText.includes(Text)){
            lis.style.display = 'block'
        }
        else{
            lis.style.display = 'none'
        }
    })

    e.preventDefault()
}