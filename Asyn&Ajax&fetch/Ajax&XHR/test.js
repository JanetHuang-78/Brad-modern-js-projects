// const btn = document.querySelector('button')
// const p = document.querySelector('p')

// btn.addEventListener('click',load)


// function load(){
    
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'test.txt', true); //true means it is asynchronous
    
//     xhr.onload = function(){
//         if (this.status === 200){
//             p.innerHTML = this.responseText;
//             // console.log(this.responseText)
//         }
//     }
    
//     xhr.send();

// }



const btn1 = document.querySelector('button.Customer1')


btn1.addEventListener('click', loadCustomerData)

function loadCustomerData(e){
    
        let xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'customer.json', true);
        xhr.send();
        
        xhr.onload = function(){
            
            if (this.status === 200){
                
            const customer=JSON.parse(this.responseText);
            
            const output = `
            <ul>
                <li>ID: ${customer.ID}</li>
                <li>Name: ${customer.Name}</li>
                <li>Company: ${customer.Company}</li>
                <li>Phone: ${customer.Number}</li>
            </ul>`

            const p1 = document.querySelector('p.Customer1');
            p1.innerHTML = output;
        };
        
}
    
 e.preventDefault();   
}


const btn2 = document.querySelector('button.Customer2')

btn2.addEventListener('click', loadCustomersData)

function loadCustomersData(e){
    
        let xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'customers.json', true);
        xhr.send();
        
        xhr.onload = function(){
            
            if (this.status === 200){
                
            const customers=JSON.parse(this.responseText);
            let output = '';

            customers.forEach(element => {
                output+= `
                <ul>
                    <li>ID: ${element.ID}</li>
                    <li>Name: ${element.Name}</li>
                    <li>Company: ${element.Company}</li>
                    <li>Phone: ${element.Number}</li>
                </ul>`
            });

            const p2 = document.querySelector('p.Customer2');
            p2.innerHTML = output;
        };
        
}
    
 e.preventDefault();   
}