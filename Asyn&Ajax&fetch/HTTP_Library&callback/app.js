const http = new HTTP()

// http.get('https://jsonplaceholder.typicode.com/posts',function(error, response){
//     if (error){
//         console.log('error:'+ error)
//     }else{
//         console.log(response) 
//     }
// });

// const data = {
//     title:'custome Post',
//     body:'This is a Post'
// }

//POST data
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, response){
//     if (error){
//         console.log( error)
//     }else{
//         console.log(response) 
//     }
// });


// const data = {
//     title:'custome Put Post',
//     body:'This is a Put Post'
// }

// //update data to PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, response){
//     if (error){
//         console.log(error)
//     }else{
//         console.log(response) 
//     }
// });


//Delete data
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(error, response){
    if (error){
        console.log('error:'+ error)
    }else{
        console.log(response) 
    }
});