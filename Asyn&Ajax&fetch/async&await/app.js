
// async function myFunc2(){
    
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(function(){},2000)}) 

//     let error = false

//     if (!error){
//          Promise.resolve('Hi')

//     } else{
//         await Promise.reject('error')
//     }
    
   
// }

// myFunc2()
// .then(data=> console.log(data))
// .catch(err=>console.log(err))


async function getData(){

    const data = await fetch('https://jsonplaceholder.typicode.com/users')

    const x = await data.json()

    return x;
}

getData()
.then(data => console.log(data))