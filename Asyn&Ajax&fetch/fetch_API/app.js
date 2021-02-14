btn1 = document.querySelector('.btn1')
btn2 = document.querySelector('.btn2')
btn3 = document.querySelector('.btn3')


btn1.addEventListener('click', getText)
btn2.addEventListener('click', getJSON)
btn3.addEventListener('click', getAPI)

function getText(){
    fetch("Text.txt") //fetch will return promises
    .then(function(response){
         return response.text()})
    .then(function(data){
        document.body.querySelector('.output').innerHTML = data})
}

function getJSON(){
    fetch("data.json") //fetch will return promises
    .then(function(response){
         return response.json()})
    .then(function(data){
        let output = '';
        data.forEach(function(item){
            output+= `
            <li>${item.name}  ${item.age}  ${item.location}</li>
            `
        })
        
        document.body.querySelector('.output').innerHTML = output})
}

function getAPI(){
    fetch("https://jsonplaceholder.typicode.com/posts") //fetch will return promises
    .then(function(response){
         return response.json()})
    .then(function(data){
        let output = '';
        data.forEach(function(item) {
            output +=`
            <li>${item.id} ${item.title}</li>
            `    
        });
        document.body.querySelector('.output').innerHTML = output
          
    })};
