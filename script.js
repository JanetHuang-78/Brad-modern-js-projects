// function squre(x){
//     return x*x;
// }

// console.log(squre(8))

// let x = function(x = 3){
//     return x*x;
// }

// console.log(x(7));

// (function(x = 4){
//     console.log(x*x) 
// })( 8)

let obj = {
    add: function(){
        console.log('Adding...')
    },
    edit:function(){
        console.log('editing...')
    }
}

obj.delete = function(){console.log('deleting...')}

obj.add()
obj.edit()
obj.delete()
