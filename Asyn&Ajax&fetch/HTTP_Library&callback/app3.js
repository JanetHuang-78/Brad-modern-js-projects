const http = new HTTP;
//GET
http.get('https://jsonplaceholder.typicode.com/posts')
.then(data=> console.log(data))
.catch(error => console.log(error))



const input = {
    name: "Emily Borren", 
    username: "Eborren", 
    email: "Eb@business.biz"
}

//POST
http.post('https://jsonplaceholder.typicode.com/posts', input)
.then(data=> console.log(data))
.catch(error => console.log(error))



//PUT
http.put('https://jsonplaceholder.typicode.com/posts/1', input)
.then(data=> console.log(data))
.catch(error => console.log(error))


//DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/2')
.then(data=> console.log(data))
.catch(error => console.log(error))