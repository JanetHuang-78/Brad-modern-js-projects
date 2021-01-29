const title = document.querySelector('#title')
const author = document.querySelector('#author')
const isbn = document.querySelector('#isbn')
const form = document.querySelector('form')
const btn = document.querySelector('.btn')

btn.addEventListener('click', addBooks)

function addBooks(e){
    let td1= document.createElement('td')
    td1.textContent = title.value
    let td2= document.createElement('td')
    td2.textContent = author.value
    let td3= document.createElement('td')
    td3.textContent = isbn.value
    let tr = document.createElement('tr')
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    let table = document.querySelector('table')
    table.appendChild(tr)
    
    e.preventDefault()
}