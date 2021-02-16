//create ItemCtrl Module

const itemCtrl = (function(){
//Private
const data = [
    // {id:0, name:'Cookie', cal:350},
    // {id:1, name:'Noodles', cal:550},
    // {id:2, name:'French Fries', cal:450}
];
const currData =[];

//Item Constructor:
const itemData = function (id, name, cal){
    this.id = id;
    this.name = name;
    this.cal = cal;
}

//Public
return{
    getData: function(){
        return data;
    },
    addItemData: function(name, cal){
        let ID;

        if (data.length > 0){
            ID = data.length;
        }else{
            ID = 0;
        }
        //convert calories to number
        cal = parseInt(cal);

        newItem = new itemData(ID, name, cal);
        data.push(newItem);
        
        return newItem;
    },
    getTotalCalories: function(){
        let totalCal = 0;
        data.forEach(function(item){
            totalCal +=item.cal
        })
        return totalCal
    },
    getCurrData: function(){
        return currData;
    },
    getItemData: function(id){
        let dataToEdit;
        data.forEach(function(e){    
            if (id == e.id){
                dataToEdit = e;   
            }  
        })
        return dataToEdit; //remember to return outside of forEach()
    },
    setCurrentItem:function(dataList){
        currItem = new itemData(dataList.id, dataList.name, dataList.cal)
        currData.push(currItem);
    },
    deleteColumn:function(target){
        // target.parentNode.parentNode.remove();
        }
    
}


})();


const UICtrl = (function(){

//Public   
    return {
        
        //print out the data on browser
        printOutList: function(data){
            let output = ''
            data.forEach(e => {
                output +=`
                <li><strong>${e.name}: </strong><span>${e.cal}</span><a href="#"><i class="fa fa-edit"></a></i></li>
                `                
            });
            document.querySelector('.display').innerHTML = output
        },
        //grab data from UI
        getInput: function(){
            return {
                name: document.querySelector('#meal').value,
                cal : document.querySelector('#cal').value
            }   
        },
        addNewItem: function(data){
            const li = document.createElement('li');
            li.id = `item-${data.id}`
            li.innerHTML = `
            <strong>${data.name}: </strong>
            <span>${data.cal}</span>
            <a href="#"><i class="fa fa-edit edit"></i></a>
            <a href="#"><i class="fa fa-times-circle delete"></i></a>
            `
            //Before the end of the element (as the last child)
            document.querySelector('.display').insertAdjacentElement('beforeend',li)
        },
        updatTotalCal: function(totalCal){
            
            document.querySelector('span.showCal').textContent = totalCal;
        },
        clearInput: function(){
            document.querySelector('#meal').value = '';
            document.querySelector('#cal').value = '';
        },
        clearOtherButtons: function(){
            document.querySelector('.btn.add').style.display = 'inline';
            document.querySelector('.btn.edit').style.display = 'none';
            document.querySelector('.btn.del').style.display = 'none';
            document.querySelector('.btn.back').style.display = 'none';
            
        },
        editButtons: function(){
            document.querySelector('.btn.add').style.display = 'none';
            document.querySelector('.btn.del').style.display = 'inline';
            document.querySelector('.btn.back').style.display = 'inline';
            document.querySelector('.btn.edit').style.display = 'inline';
            
        },
        getItemToEdit: function(data){
            document.querySelector('#meal').value = data.name;
            document.querySelector('#cal').value = data.cal;
            UICtrl.editButtons();
        }
    }
})()


//main control
const app = (function(itemCtrl, UICtrl){

    //Load EventListener
    const loadEventListener = function(){
        //when add-button is pressed
        const addBtn = document.querySelector('.add');
        addBtn.addEventListener('click', ItemAddSubmit);

        //when edit on the li is pressed
        const liEdit = document.querySelector('ul');
        liEdit.addEventListener('click', columnUpdate);

        const Editbtn = document.querySelector('.edit');
        Editbtn.addEventListener('click', ItemEditSubmit);
    }

        //Add Item Submit
        function ItemAddSubmit(e){
        //get form input
        const input = UICtrl.getInput();
        if (input.name!=='' && input.cal!==''){
            const newData = itemCtrl.addItemData(input.name, input.cal)
            UICtrl.addNewItem(newData);
            UICtrl.clearInput();
            //get total Calories
            const totalCal = itemCtrl.getTotalCalories();
            //Update total cal 
            UICtrl.updatTotalCal(totalCal);
        }
        e.preventDefault();
    }


    function columnUpdate(e){
        
        if (e.target.classList.contains('edit')){
            const listID = e.target.parentNode.parentNode.id
            
            let idArr = listID.split('-');
            let idNum = parseInt(idArr[1]);
            const itemToEdit = itemCtrl.getItemData(idNum);
            const setItemToEdit = UICtrl.getItemToEdit(itemToEdit);
            
            itemCtrl.setCurrentItem(itemToEdit);
        }else {
            
            if(e.target.classList.contains('delete')){
            itemCtrl.deleteColumn(e.target);

            // const listID = e.target.parentNode.parentNode.id
            // console.log(listID)
            // let idArr = listID.split('-');
            // let idNum = parseInt(idArr[1]);
            // const itemToEdit = itemCtrl.getItemData(idNum);
            // itemCtrl.deleteColumn(itemToEdit);
            
            // itemCtrl.setCurrentItem(itemToEdit);
        }
    }

        e.preventDefault()
    }

    function ItemEditSubmit(){

    }

    //Initialize
    return{
        init: function(){
            //Only add button show in the browser in the begining
            UICtrl.clearOtherButtons()
            // console.log('Initialing...')
            // const dataList = itemCtrl.getData();
            // UICtrl.printOutList(dataList);

            //call loadEventListener in order to prepare activating ItemAddSubmit
            loadEventListener(); 
            
            
        }
    }
})(itemCtrl, UICtrl)

//Initialize everything in the app 
app.init();