class HTTP{

    //create get method
    get(url){
        return new Promise(function(resolve, reject){
            fetch(url)
            .then(res=>res.json())
            .then(data=> resolve(data))
            .catch(err => reject(err))
        })
        
    }

    //post method
    // post(url, data){
    //     return new Promise((resolve, reject)=>{
    //         fetch(url, {
    //             method: 'POST',
    //             headers:{
    //                 'Content-type': 'application/json'
    //             },
    //             body:JSON.stringify(data)
    //         })
    //         .then(res=>res.json())
    //         .then(data=> resolve(data))
    //         .catch(err => reject(err))
    //     })
        
    // }

//PUT method
    // put(url, data){
    //     return new Promise((resolve, reject)=>{
    //         fetch(url, {
    //             method: 'PUT',
    //             headers:{
    //                 'Content-type': 'application/json'
    //             },
    //             body:JSON.stringify(data)
    //         })
    //         .then(res=>res.json())
    //         .then(data=> resolve(data))
    //         .catch(err => reject(err))
    //     })
        
    // }


    //Delete data
    delete(url){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                 method: 'DELETE',
                 headers:{
                    'Content-type': 'application/json'
                 }
                })                 
            .then(res=>res.json())
            .then(data=> resolve('Data Delete!!'))
            .catch(err => reject(err))
        })
        
    }

}