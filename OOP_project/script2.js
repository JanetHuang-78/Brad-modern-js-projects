function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    
}

function UI(data){   
}

UI.prototype.addBookToList = function(book){
    if (book.title ==='' || book.author ==='' || book.isbn ===''){
        alert('Please check your data')
    }else{
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#'><i class="far fa-times-circle"></i></a></td>
    `
    document.querySelector('table').appendChild(tr)
    // console.log(tr)
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


form.addEventListener('submit', function(e){
    
    //get values    
    const book = new Book(title.value, author.value, isbn.value);
    
    // Add items to List
    const ui = new UI();
    ui.addBookToList(book);

    //Clear fields
    ui.clearFields();
    
    
    e.preventDefault();
    })



