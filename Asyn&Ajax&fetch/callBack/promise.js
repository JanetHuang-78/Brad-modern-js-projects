let posts = [
    {name:'one', post:'This is post one'},
    {name:'two', post:'This is post two'},
    {name:'three', post:'This is post three'}]


function createPost(data){
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            posts.push(data);
            const err = true;
            if(err){
                reject('something went wrong')
            }else{
                resolve();
            }
            
            }, 2000);
        
    })
}    

function getPost(){
setTimeout(function(){
    let output = '';
    posts.forEach((data)=>{
        output += `
        <li>${data.post}</li>
        `
        document.querySelector('.output').innerHTML = output;
    })
}, 1000)

}

createPost({name:'four', post:'This is post four'})
.then(getPost)
.catch(function(err){
    console.log(err)
})
