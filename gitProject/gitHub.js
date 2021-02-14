class GitHub{

    constructor(){
        this.client_id = '01afc2da1d1af4ad8fd6';
        this.client_secret = '823151698455afee8f8fee349f853aa83926aa13';
    }

    async getProfile(user){
    const result = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const resData = await result.json();
    
    return {
        Data: resData
    };
}

}