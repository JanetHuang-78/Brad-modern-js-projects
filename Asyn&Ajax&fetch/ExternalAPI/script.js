const input = document.getElementById('joke')
const form = document.querySelector('body form')
const btn = document.querySelector('input.btn')

btn.addEventListener('click',loadJokes)

function loadJokes(e){
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${input}`,true);
    xhr.send();

    xhr.onload= function(){
        if(this.status = 200){

            let response = JSON.parse(this.response);
            console.log(response)
            console.log(response.value)
            console.log(response.value.joke)

            let output = response.value.joke;
            // response.value.joke.forEach(item =>{
                
            //     output += `
            //     <ul>
            //         <ul>${item}<ul>
            //     </ul>
            //     `
            // })

            document.querySelector('p.output').innerHTML = output;
        }
    }


    e.preventDefault()
}

