const http = new HTTP()

//get
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data =>console.log(data))

//Post
const data = {
    name: "Emily Borren", 
    username: "Eborren", 
    email: "Eb@business.biz"
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//  .then(data =>console.log(data))
//  .catch(err=> console.log(err))


//PUT
//  http.put('https://jsonplaceholder.typicode.com/users/2', data)
//  .then(data =>console.log(data))
//  .catch(err=> console.log(err))

 http.delete('https://jsonplaceholder.typicode.com/users/2')
 .then(data =>console.log(data)) 
 .catch(err=> console.log(err))