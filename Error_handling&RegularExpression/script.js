const btn = document.querySelector('.btn')

btn.addEventListener('click', getCheckColumns)

function getCheckColumns(){

    checkName();

    checkZipCode();

    checkEmail();

    checkPhone();
}

function checkName(){
    const name = document.querySelector('.name')

    if(name.value ===''){
        
         errorMessage('name', 'Please fill in your Name','red')
    }else{
        let re = /^[A-Za-z]{2,10}\s[a-zA-Z]{2,10}/;
        let result = re.exec(name.value)
        if (result === null){
            errorMessage('name', 'Please follow the format- John Doe','red')
        }
        else{
            errorMessage('name', 'correct','lightseagreen')
        }
    }
}

function checkZipCode(){
    const zip = document.querySelector('.zipcode')

    if(zip.value ===''){
        errorMessage('zipcode','Please fill in your ZipCode','red')
    }else{
        let re = /\d{5}/;
        let result = re.exec(zip.value)
        if (result === null){
            errorMessage('zipcode', 'Please follow the format- 12345', 'red')
        }else{
            errorMessage('zipcode', 'correct','lightseagreen')
        }
}
}

function checkEmail(){
    const email = document.querySelector('.email')

    if(email.value ===''){
        errorMessage('email','Please fill in your Email','red')
    }else{
        let re = /^\w+@\w+\.\w+/;
        let result = re.exec(email.value)
        if (result === null){
            errorMessage('email', 'Please follow the format- 123abc@gmail.com','red')
        }else{
            errorMessage('email', 'correct','lightseagreen')
        }
}
}

function checkPhone(){
    const phone = document.querySelector('.phone')

    if(phone.value ===''){
        errorMessage('phone','Please fill in your Phone','red')
    }else{
        let re = /\d{3}-\d{3}-\d{4}/;
        let result = re.exec(phone.value)
        if (result === null){
            errorMessage('phone', 'Please follow the format','red')
        }else{
            errorMessage('phone', 'correct','lightseagreen')
        }
}
}

function errorMessage(str,error,color){
    
    label = document.querySelector('label.'+str);
    label.style.color = color;
    label.textContent = error;

}