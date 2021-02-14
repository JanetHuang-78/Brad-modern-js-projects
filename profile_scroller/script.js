const data =[
{
name:'William Smith',
age:33,
gender:'male',
location:'CA',
lookingfor:'female',
image: 'https://randomuser.me/portraits/men/81.jpg'},
{
name:'John Doe',
age:38,
gender:'male',
location:'CA',
lookingfor:'female',
image: 'https://randomuser.me/portraits/men/83.jpg'},
{
name:'Amy Wu',
age:23,
gender:'female',
location:'CA',
lookingfor:'male',
image: 'https://randomuser.me/portraits/women/82.jpg'},
{
    name:'Emilly Lenthen',
    age:33,
    gender:'female',
    location:'NY',
    lookingfor:'male',
    image: 'https://randomuser.me/portraits/women/79.jpg'}
]

//Iterate the data
const profile = IterationProfile(data)

nextProfile();

//Display the profile:  
document.querySelector('.btn').addEventListener('click', nextProfile)
//it will always show the first page

function nextProfile(){

    const currentProfile = profile.next().value;
    
    //currentProfile=undefined means it reaches the end of the data
    if (currentProfile!==undefined){
    document.querySelector('.display').innerHTML = `
    <ul class="info">
        <li>Name:${currentProfile.name}</li> 
        <li>age:${currentProfile.age}</li>
        <li>gender:${currentProfile.gender}</li>  
        <li>location:${currentProfile.location}</li>
        <li>looking for:${currentProfile.lookingfor}</li> 
     </ul>`

     document.querySelector('.imgDisplay').innerHTML = `
     <img src="${currentProfile.image}">`
    }else{

        //window reload
        window.location.reload()
    }
}

//Iterate the profile:
function IterationProfile(profile){
    let nextindex = 0;

    return {
        next:function(){
            return nextindex < profile.length? {value:profile[nextindex++], done: false}:{done: true}
    }
}
}