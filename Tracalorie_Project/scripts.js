//create ItemCtrl Module

const itemCtrl = (function(){

const data = [
    {id:0, name:'Cookie', cal:350},
    {id:1, name:'Noodles', cal:550},
    {id:2, name:'French Fries', cal:450}
]

const itemData = function (data){
    this.id = id;
    this.name = name;
    this.cal = cal;
}

return{
    InfoData: function(){
        console.log(itemData)
    }
}



})();