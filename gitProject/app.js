const user = document.querySelector('.searchUser')
const git = new GitHub;

user.addEventListener('mouseup', getData)


function getData(e){
    const userText = e.target.value;
    if (userText !==''){

        git.getProfile(user.value)
        .then(data=>{ 
            let output = `
            <ul class="files">
                <li><img src='${data.Data.avatar_url}'></li>  
                <li><a href='${data.Data.html_url}'>View Profile</li> 
                <li>Public Repo: ${data.Data.public_repos}</li>  
                <li>Public Repo: ${data.Data.public_gists}</li> 
                <li>Name: ${data.Data.name}</li>
                <li>Company: ${data.Data.company}</li>
                <li>Location: ${data.Data.location}</li>
                
            </ul>`
            if(data.Data.message !==''){
                document.querySelector('.profile').innerHTML = output;
            }else{

            };
            console.log(output)
            
        }
        )
    }
 
 

    e.preventDefault()
    
}