let posts = [
    {name:'one', post:'This is post one'},
    {name:'two', post:'This is post two'},
    {name:'three', post:'This is post three'}]


function createPost(data){
setTimeout(function(){posts.push(data)}, 2000);

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

createPost({name:'four', post:'This is post four'});
getPost();