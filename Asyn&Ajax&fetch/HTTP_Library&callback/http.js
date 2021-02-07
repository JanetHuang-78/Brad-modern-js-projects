function HTTP(){
    this.http = new XMLHttpRequest()
}

//GET
// HTTP.prototype.get = function(url, callback){

//     this.http.open('GET',url,true)
//     this.http.send()
    
    
//     this.http.onload = ()=>{

//         if (this.http.status === 200){
//              callback(null, this.http.responseText)
//         }else{
//             callback('error'+ this.http.status)
//         }
//     }
//     // e.preventDefault()
// }

// POST
// HTTP.prototype.post = function(url, data, callback){

//     this.http.open('POST',url,true)

//     this.http.setRequestHeader('content-type','application/JSON')

//     this.http.send(JSON.stringify(data))
    
    
//     this.http.onload = ()=>{
//         callback(null, this.http.responseText)
        
//     }
//     // e.preventDefault()
// }


// Put
// HTTP.prototype.put = function(url, data, callback){

//     this.http.open('PUT',url,true)

//     this.http.setRequestHeader('content-type','application/JSON')
    
//     this.http.send(JSON.stringify(data))
    
    
//     this.http.onload = ()=>{
//         callback(null, this.http.responseText)
        
//     }
//     // e.preventDefault()
// }


//Delete
HTTP.prototype.delete = function(url, callback){

        this.http.open('DELETE',url,true)
        this.http.send()
        
        
        this.http.onload = ()=>{
    
            if (this.http.status === 200){
                 callback(null,'Post delete')
            }else{
                callback('error'+ this.http.status)
            }
        }
        // e.preventDefault()
    }

