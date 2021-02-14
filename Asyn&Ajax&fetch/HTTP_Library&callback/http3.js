class HTTP{
    
    //GET
    async get(url){
        const data = await fetch(url);
        const res = await data.json();
        return res;
    }



    //POST
    async post(url, input){
        const response = await fetch(url,{
            method: 'POST',
            headers: {'Content-type': 'application/json'
        },
        body:JSON.stringify(input)});
            
        const res = await response.json();
        return res;
    }

    //PUT
    async put(url, input){
        const response = await fetch(url,{
            method: 'PUT',
            headers: {'Content-type': 'application/json'
        },
        body:JSON.stringify(input)});
            
        const res = await response.json();
        return res;
    }


    //Delete
    async delete(url){
        const response = await fetch(url,{
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}})
        
        const res = await 'resource detele...';
        return res;
    }


}