function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    
}

function UI(data){   
}

UI.prototype.showMsg = function(msg, color){
    let div = document.createElement('div');
    div.className = 'error';
    div.style.backgroundColor = color;
    let showMessage = document.createTextNode(msg);
    let container = document.querySelector('.container');
    let h1 = document.querySelector('h1');

    div.appendChild(showMessage)
    container.insertBefore(div, h1)
    setTimeout(()=>{div.remove()},2000)
    
    // console.log(div)
}

UI.prototype.addBookToList = function(book){
    
    const tr = document.createElement('tr');
    tr.className = 'data'
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#'><i class="far fa-times-circle"></i></a></td>
    `
    document.querySelector('table').appendChild(tr)
    // console.log(tr)
}

UI.prototype.deleteBook = function(target){
    if (target.classList.contains('far')){
        target.parentElement.parentElement.parentElement.remove();
    }
}


UI.prototype.clearFields = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';

}

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const isbn = document.querySelector('#isbn')
const form = document.querySelector('form')
const btn = document.querySelector('.btn')
const table = document.querySelector('table')


form.addEventListener('submit', function(e){
    
    //get values    
    const book = new Book(title.value, author.value, isbn.value);
    
    // Add items to List
    const ui = new UI();
    if (book.title ==='' || book.author ==='' || book.isbn ===''){
        ui.showMsg('Please fill in the columns','red')
    }else{
        ui.addBookToList(book);
        ui.showMsg('Successful!','lightgreen')
    }

    //Clear fields
    ui.clearFields();
    
    
    e.preventDefault();
    })

    table.addEventListener('click', function(e){
        
        const ui = new UI();
        ui.deleteBook(e.target)
        ui.showMsg('Successful delete data', 'lightpink')
        

        e.preventDefault
    })



