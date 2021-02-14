const data = [
    {name:'John', age:33},
    {name:'Mary', age:43},
    {name:'Steve', age:45}
]

function createData(obj){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            data.push(obj);

            let error = false;
            
            if (error){
                reject('Error')
            }else{
                resolve();
            }
        }, 2000)
        
    })
    
}

function getData(){
    return new Promise((resolve, reject)=>{
        let output = '';
        data.forEach(item=>{
            output += `
            <li>${item.name} ${item.age}</li>
        `})
        resolve(output)
    })
   
}

function showData(output){
    document.body.innerHTML = output;
}

createData({name:'Tim', age:28})
.then(getData)
.then(showData)
// .catch(function(error){
//     console.log(error)
// })