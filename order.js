// Input fields

const form = document.getElementById("order_form");
const firstName = document.getElementById("name");
const lastName = document.getElementById("surname")
const date = document.getElementById("date");
const street = document.getElementById("street");
const house = document.getElementById("house");
const flat = document.getElementById("flat");
const gifts = document.getElementsByClassName("gift");
const submitBtn = document.getElementById("submit")

// Error message

const errorMessage = document.getElementsByClassName("error")

// Validation colors
const red = "#89023E";

// Validate input functions

function validateFirstName(){
    //check if empty
    if(checkIfEmpty(firstName)) return;   
    //check if more than 4 symbols long
    if(!nameLength(firstName)) return;
    //if has only letters    
    if(!onlyLetters(firstName)) return;
    return true;    
    }

function validateDate() {
    //check if empty
    if(checkIfEmpty(date)) return;
    //check if not earlier than tomorrow
    if(!deliveryDate(date)) return;
    return true;
}

function validateLastName(){
    //check if empty
    if(checkIfEmpty(lastName)) return;
    //check if more than 5 symbols long
    if(!surnameLength(lastName)) return;    
    //if has only letters
    if(!onlyLetters(lastName)) return;
    return true;
    }
        
function validateStreet(){
    //check if empty
    if(checkIfEmpty(street)) return;
    //is if has only letters
    if(!lettersAndNumbers(street)) return;
    return true;
    }    

function validateHouse(){
    //check if empty
    if(checkIfEmpty(house)) return;
    //is if has only letters
    if(!onlyNumbers(house)) return;
    return true;
    }  

function validateFlat(){
    //check if empty
    if(checkIfEmpty(flat)) return;
    //is if has only letters
    if(!numbersAndDash(flat)) return;
    return true;
    }     

function validateGifts() {
    //check if empty
  
    //check if 2 gifts
    if (!twoGiftOptions(gifts)) return;
    return true;
}



// Nested functions

function checkIfEmpty(input){
    if(isEmpty(input.value.trim())){
        //set field invalid
        setInvalid(input, `${input.name} must not be empty`)
        return true;
        }else {
            //set valid
            setValid(input);
            return false;
        }
    }

function isEmpty(value){
    if(value === "") return true;
    return false;
}

function setInvalid(input, message){
    input.className = 'invalid';        
    input.nextElementSibling.innerHTML = message;
    input.nextElementSibling.style.color = red;
}

function setValid(input){
    input.className = 'valid';
    input.nextElementSibling.innerHTML = "";        
}

// Check special condition functions

function onlyLetters(input) {
    if(/^[a-zA-Z]+$/.test(input.value)){
        setValid(input);
        return true;
    } else {
        setInvalid(input, `${input.name} must contain only letters without spaces`);
        return false;
    }
}

function lettersAndNumbers(input){
    if(/^[a-zA-Z 1-9]+$/.test(input.value)){
        setValid(input);
        return true;
    } else {
        setInvalid(input, `${input.name} must contain only letters and numbers more than 0`);
        return false;
    }
}

function onlyNumbers(input) {
    if(/^[1-9]+$/.test(input.value)){
        setValid(input);
        return true;
    } else {
        setInvalid(input, `${input.name} must contain only positive numbers`);
        return false;
    }
}

function numbersAndDash(input) {
    if(/^\d[\/\-]?\d*/.test(input.value)) {
        setValid(input);
        return true;
    } else {
        setInvalid(input, `${input.name} must contain only positive numbers`);
        return false;
    }
}

function nameLength(input) {
    if (input.value.length >= 4) {
        setValid(input);
        return true;
    } else {
        setInvalid(input, `${input.name} must be at least 4 letters long`);
        return false
    }
}

function surnameLength(input) {
    if (input.value.length >= 5) {
        setValid(input);
        return true;
    } else {
        setInvalid(input, `${input.name} must be at least 5 letters long`);
        return false
    }
}

function deliveryDate(input) {   
    let current = new Date();
    let delivery = new Date(input.value)    
    if (delivery > current) {       
        setValid(input); 
        return true
    } else {
        setInvalid(input, `${input.name} must be not earlier than tomorrow`);
        return false
    }
    
}    


// order confirmation 




submitBtn.addEventListener("click", orderInfo)

function orderInfo() {     
    alert (`Your purchase will be delivered at ${street.value} ${house.value} ${flat.value}. Customer name is ${firstName.value} ${lastName.value}. Delivery date is ${date.value} `)
}


