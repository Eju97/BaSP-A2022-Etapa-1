window.onload = function(){
var inputValue = [];

// function Letter validation
function letterCheck(letterString){
    var ascii =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for(i=0; i < letterString.length; i++){
        if( ascii.includes(letterString[i])){
            return true;
        };
    }; return false;
};


// Number validation
function numberCheck(numberString){
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(i = 0; i < numberString.length; i++){
        if ((numbers.includes(numberString[i]))){
            return true;
        };
    };
    return false;
};

// function EXCLUSIVE Number validation
function exclusiveNumberCheck(numberString){
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(i = 0; i < numberString.length; i++){
        if (!(numbers.includes(numberString[i]))){
            return false;
        };
    };
    return true;
};

// function EXCLUSIVE Letter validation
function exclusiveLetterCheck(letterString){
    var ascii =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(i=0; i < letterString.length; i++){
        if (!(ascii.includes(letterString[i]))){
            return false;
        };
    }; return true;
};

// function to detect at least 4 letters
function cityValidation(citystring){
    var letter = citystring.length;
    var Validation = false;
    var num = 0
    var i = 0
    var ascii =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    while(i < letter && num < 4){
            for(var j = 0; j < ascii.length; j++){
                if(citystring[i] == ascii[j]){
                    num++
                }
            }
            i++;
    }
    if (num === 4){
        Validation = true;
    } return Validation;
};

function spaceDetecter(string){
    for(i = 0; i < string.length; i++){
        if(string.indexOf(" ") === -1){
            return false;
        }
    } return true;
};

function birthDateMDY(date) {
    var year = date.substr(0, 4);
    var month = date.substr(5, 2);
    var day = date.substr(8, 2);
    var newDate = month.concat('/', day, '/', year)
    return newDate;
}

function birthDateDMY(date) {
    var year = date.substr(6, 4);
    var month = date.substr(0, 2);
    var day = date.substr(3, 2);
    var newDate = year.concat('/', month, '/', day)
    return newDate;
}

// Name Validation
var inputName = document.getElementById('Name');
var inputNameError = document.createElement('p');
inputNameError.classList.add("font-error");

inputName.onblur = function(){
    if (inputName.value == ''){
        inputName.classList.add("border-error");
        inputNameError.textContent = 'Insert a name';
        inputName.insertAdjacentElement('afterend', inputNameError);
    } else if (!exclusiveLetterCheck(inputName.value)){
        inputName.classList.add("border-error");
        inputNameError.textContent = 'Name can only contain letters';
        inputName.insertAdjacentElement('afterend', inputNameError);
    } else if (inputName.value.length <= 3){
        inputName.classList.add("border-error");
        inputNameError.textContent = 'Name must have at least 3 words';
        inputName.insertAdjacentElement('afterend', inputNameError);
    }  else if (exclusiveLetterCheck(inputName.value.length)){
        inputName.classList.add("border-correct");
        inputValue[0] = inputName.value;
    };
};

inputName.onfocus = function(){
    inputName.classList.remove("border-correct");
    inputName.classList.remove("border-error");
    inputNameError.remove();
};

// Surname Validation
var inputSurname = document.getElementById('SurName');
var inputSurnameError = document.createElement('p');
inputSurnameError.classList.add("font-error");

inputSurname.onblur = function(){
    if (inputSurname.value == ''){
        inputSurname.classList.add("border-error");
        inputSurnameError.textContent = 'Insert a Surname';
        inputSurname.insertAdjacentElement('afterend', inputSurnameError);
    } else if (!exclusiveLetterCheck(inputSurname.value)){
        inputSurname.classList.add("border-error");
        inputSurnameError.textContent = 'Surname can only contain letters';
        inputSurname.insertAdjacentElement('afterend', inputSurnameError);
    } else if (inputSurname.value.length <= 3){
        inputSurname.classList.add("border-error");
        inputSurnameError.textContent = 'Surname must have at least 3 words';
        inputSurname.insertAdjacentElement('afterend', inputSurnameError);
    } else if(exclusiveLetterCheck(inputSurname.value.length)){
        inputSurname.classList.add("border-correct");
        inputValue[1] = inputSurname.value;
    };
};

inputSurname.onfocus = function(){
    inputSurname.classList.remove("border-correct");
    inputSurname.classList.remove("border-error");
    inputSurnameError.remove();
};

// Email Validation
var inputEmail = document.getElementById('Email');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var inputEmailError = document.createElement('p');
inputEmailError.classList.add("font-error");

inputEmail.onblur = function(){
    if (inputEmail.value == ''){
        inputEmail.classList.add("border-error");
        inputEmailError.textContent = '*Insert an email';
        inputEmail.insertAdjacentElement('afterend', inputEmailError);
    } else if (!emailExpression.test(inputEmail.value)){
        inputEmail.classList.add("border-error");
        inputEmailError.textContent = "*Insert a valid email";
        inputEmail.insertAdjacentElement('afterend', inputEmailError);
    } else{
        inputEmail.classList.add("border-correct");
        inputValue[2] = inputEmail.value;
    };
};
inputEmail.onfocus = function(){
    inputEmail.classList.remove("border-correct");
    inputEmail.classList.remove("border-error");
    inputEmailError.remove();
};

// Phone Number Validation
var inputPhone = document.getElementById('PhoneNumber');
var inputPhoneError = document.createElement('p');
inputPhoneError.classList.add("font-error");

inputPhone.onblur = function(){
    if (inputPhone.value == ''){
        inputPhone.classList.add("border-error");
        inputPhoneError.textContent = '*Insert a Phone Number';
        inputPhone.insertAdjacentElement('afterend', inputPhoneError);
    } else if (!exclusiveNumberCheck(inputPhone.value)){
        inputPhone.classList.add("border-error");
        inputPhoneError.textContent = '*Phone numbers must contain only numbers';
        inputPhone.insertAdjacentElement('afterend', inputPhoneError);
    } else if(inputPhone.value.length < 10 || inputPhone.value.length > 10){
        inputPhone.classList.add("border-error");
        inputPhoneError.textContent = '*Phone Number must be 10 digits long';
        inputPhone.insertAdjacentElement('afterend', inputPhoneError);
    } else if (exclusiveNumberCheck(inputPhone.value) && (inputPhone.value.length == 10)){
        inputPhone.classList.add("border-correct");
        inputValue[3] = inputPhone.value;
    };
};
inputPhone.onfocus = function(){
    inputPhone.classList.remove("border-correct");
    inputPhone.classList.remove("border-error");
    inputPhoneError.remove();
};

// Password Validation
var inputPassword = document.getElementById('Password');
var inputPasswordError = document.createElement('p');
inputPasswordError.classList.add('font-error');

inputPassword.onblur = function(){
    if(inputPassword.value.length == ''){
        inputPassword.classList.add("border-error");
        inputPasswordError.textContent = '*A password is required';
        inputPassword.insertAdjacentElement('afterend', inputPasswordError);
    } else if(inputPassword.value.length < 8){
        inputPassword.classList.add("border-error");
        inputPasswordError.textContent = '*The password must be 8 characters long';
        inputPassword.insertAdjacentElement('afterend', inputPasswordError);
    } else if(!numberCheck(inputPassword.value)){
        inputPassword.classList.add("border-error");
        inputPasswordError.textContent = '*The password must contain at least one number';
        inputPassword.insertAdjacentElement('afterend', inputPasswordError);
    } else if (!letterCheck(inputPassword.value)){
        inputPassword.classList.add("border-error");
        inputPasswordError.textContent = '*The password must contain at least one letter';
        inputPassword.insertAdjacentElement('afterend', inputPasswordError);
    } else if ((letterCheck(inputPassword.value)) && (numberCheck(inputPassword.value))){
        inputPassword.classList.add("border-correct");
        inputValue[4] = inputPassword.value;
    };
};
inputPassword.onfocus = function(){
        inputPassword.classList.remove("border-correct");
        inputPassword.classList.remove("border-error");
        inputPasswordError.remove();
};

// Confirm Password Validation
var inputConfirmPassword = document.getElementById('ConfirmPassword');
var inputConfirmPasswordError = document.createElement('p');
inputConfirmPasswordError.classList.add('font-error');

inputConfirmPassword.onblur = function(){
    if(inputConfirmPassword.value.length == 0){
        inputConfirmPassword.classList.add("border-error");
        inputConfirmPasswordError.textContent = '*This field can not be empty';
        inputConfirmPassword.insertAdjacentElement('afterend', inputConfirmPasswordError);
    } else if(inputConfirmPassword.value === inputPassword.value){
        inputConfirmPassword.classList.add("border-correct");
        inputValue[5] = inputConfirmPassword.value;
    } else {
        inputConfirmPassword.classList.add("border-error");
        inputConfirmPasswordError.textContent = '*The password must be the same';
        inputConfirmPassword.insertAdjacentElement('afterend', inputConfirmPasswordError);
    };
};
inputConfirmPassword.onfocus = function(){
    inputConfirmPassword.classList.remove("border-correct");
    inputConfirmPassword.classList.remove("border-error");
    inputConfirmPasswordError.remove();
};

// Birth Date validation
var inputBirthDate = document.getElementById('BirthDate');
var inputBirthDateError = document.createElement('p');
inputBirthDateError.classList.add("font-error");

inputBirthDate.onblur = function(){
    if (inputBirthDate.value == ''){
        inputBirthDate.classList.add("border-error");
        inputBirthDateError.textContent = 'Error';
        inputBirthDate.insertAdjacentElement('afterend', inputBirthDateError);
    } else{
        inputBirthDate.classList.add("border-correct");
        inputValue[6] = inputBirthDate.value;
    };
};
inputBirthDate.onfocus = function(){
    inputBirthDate.classList.remove("border-correct");
    inputBirthDate.classList.remove("border-error");
    inputBirthDateError.remove();
}


// DNI Validation
var inputDNI = document.getElementById('DNI');
var inputDNIError = document.createElement('p');
inputDNIError.classList.add("font-error");

inputDNI.onblur = function(){
    if (inputDNI.value == ''){
        inputDNI.classList.add("border-error");
        inputDNIError.textContent = '*Insert DNI';
        inputDNI.insertAdjacentElement('afterend', inputDNIError);
    } else if (!exclusiveNumberCheck(inputDNI.value)){
        inputDNI.classList.add("border-error");
        inputDNIError.textContent = '*DNI must contain only numbers';
        inputDNI.insertAdjacentElement('afterend', inputDNIError);
    } else if(inputDNI.value.length < 7){
        inputDNI.classList.add("border-error");
        inputDNIError.textContent = '*DNI must contain at least 7 digits';
        inputDNI.insertAdjacentElement('afterend', inputDNIError);
    } else if (exclusiveNumberCheck(inputDNI.value) && (inputDNI.value.length >= 7)){
        inputDNI.classList.add("border-correct");
        inputValue[7] = inputDNI.value;
    };
};
inputDNI.onfocus = function(){
    inputDNI.classList.remove("border-correct");
    inputDNI.classList.remove("border-error");
    inputDNIError.remove();
};

// Localidad Validation
var inputCity = document.getElementById('City');
var inputCityError = document.createElement('p');
inputCityError.classList.add("font-error");

inputCity.onblur = function(){
    if(inputCity.value.length == ''){
        inputCity.classList.add("border-error");
        inputCityError.textContent = '*Insert City name';
        inputCity.insertAdjacentElement('afterend', inputCityError);
    } else if(inputCity.value.length < 3){
        inputCity.classList.add("border-error");
        inputCityError.textContent = '*City name must have at least 4 letters';
        inputCity.insertAdjacentElement('afterend', inputCityError);
    } else if(!cityValidation(inputCity.value)){
        inputCity.classList.add("border-error");
        inputCityError.textContent = '*City name must have at least 4 letters';
        inputCity.insertAdjacentElement('afterend', inputCityError)
    }
    else if(cityValidation(inputCity.value)){
        inputCity.classList.add("border-correct");
        inputValue[8] = inputCity.value;
    } else {
        inputCity.classList.add("border-error");
        inputCityError.textContent = '*ERROR';
        inputCity.insertAdjacentElement('afterend', inputCityError)
    }
};
inputCity.onfocus = function(){
    inputCity.classList.remove("border-correct");
    inputCity.classList.remove("border-error");
    inputCityError.remove();
};

// Address Validation
var inputAddress = document.getElementById('Address');
var inputAddressError = document.createElement('p');
inputAddressError.classList.add("font-error");

inputAddress.onblur = function(){
    if(inputAddress.value.length == ''){
        inputAddress.classList.add("border-error");
        inputAddressError.textContent = "*Insert Address";
        inputAddress.insertAdjacentElement('afterend', inputAddressError);
    } else if(inputAddress.value.length < 5){
        inputAddress.classList.add("border-error");
        inputAddressError.textContent = "*Address must contain at least 5 characters";
        inputAddress.insertAdjacentElement('afterend', inputAddressError);
    } else if(spaceDetecter(inputAddress.value) && ( numberCheck(inputAddress.value) && letterCheck(inputAddress.value))){
        inputAddress.classList.add("border-correct");
        inputValue[9] = inputAddress.value;
    } else{
        inputAddress.classList.add("border-error");
        inputAddressError.textContent = "*error";
        inputAddress.insertAdjacentElement('afterend', inputAddressError);
    };
};

inputAddress.onfocus = function(){
    inputAddress.classList.remove("border-correct");
    inputAddress.classList.remove("border-error");
    inputAddressError.remove();
}


// Postal Code Validaiton
var inputPostal = document.getElementById('PostalCode');
var inputPostalError = document.createElement('p');
inputPostalError.classList.add("font-error");

inputPostal.onblur = function(){
    if (inputPostal.value.length == ''){
        inputPostal.classList.add("border-error");
        inputPostalError.textContent = "*Insert Postal Code";
        inputPostal.insertAdjacentElement('afterend', inputPostalError);
    } else if (!exclusiveNumberCheck(inputPostal.value)){
        inputPostal.classList.add("border-error");
        inputPostalError.textContent = "*Postal Code must contain only numbers";
        inputPostal.insertAdjacentElement('afterend', inputPostalError);
    } else if(inputPostal.value.length < 4 || inputPostal.value.length > 5){
        inputPostal.classList.add("border-error");
        inputPostalError.textContent = "*Postal Code must contain 4 or 5 numbers";
        inputPostal.insertAdjacentElement('afterend', inputPostalError);
    } else {
        inputPostal.classList.add("border-correct");
        inputValue[10] = inputPostal.value
    }
}
inputPostal.onfocus = function(){
    inputPostal.classList.remove("border-correct");
    inputPostal.classList.remove("border-error");
    inputPostalError.remove();
};

// Create Button Validation
var createButton = document.getElementById('signupBtn');
    createButton.onclick = function(e){
        e.preventDefault();
        inputName.onblur();
        inputSurname.onblur();
        inputEmail.onblur();
        inputPhone.onblur();
        inputPassword.onblur();
        inputConfirmPassword.onblur();
        inputBirthDate.onblur();
        inputDNI.onblur();
        inputCity.onblur();
        inputAddress.onblur();
        inputPostal.onblur();
    if(inputValue.includes(inputName.value) &&
        inputValue.includes(inputSurname.value) &&
        inputValue.includes(inputEmail.value) &&
        inputValue.includes(inputPhone.value) &&
        inputValue.includes(inputPassword.value) &&
        inputValue.includes(inputConfirmPassword.value) &&
        inputValue.includes(inputBirthDate.value) &&
        inputValue.includes(inputDNI.value) &&
        inputValue.includes(inputCity.value) &&
        inputValue.includes(inputAddress.value) &&
        inputValue.includes(inputPostal.value)){
            promiseSignUp();
            alert(
            'Account Created Successfully' + '\n' +
            'Name: ' + inputValue[0] + '\n' +
            'Surname: ' + inputValue[1] + '\n' +
            'Email: ' + inputValue[2] + '\n' +
            'Phone Number: ' + inputValue[3] + '\n' +
            'Password: ' + inputValue[4] + '\n' +
            'Confirmed Password: ' + inputValue[5] + '\n' +
            'Birth Date: ' + inputValue[6] + '\n' +
            'DNI: ' + inputValue[7] + '\n' +
            'City: ' + inputValue[8] + '\n' +
            'Address: ' + inputValue[9] + '\n' +
            'Postal Code: ' + inputValue[10] + '\n'
            );
        } else if (inputValue.length == 0){
            alert('Fields are empty. Try again');
            inputName.onblur();
            inputSurname.onblur();
            inputEmail.onblur();
            inputPhone.onblur();
            inputPassword.onblur();
            inputConfirmPassword.onblur();
            inputBirthDate.onblur();
            inputDNI.onblur();
            inputCity.onblur();
            inputAddress.onblur();
            inputPostal.onblur();
        } else{
            alert('ERROR! All fields must be completed correctly');
            inputName.onblur();
            inputSurname.onblur();
            inputEmail.onblur();
            inputPhone.onblur();
            inputPassword.onblur();
            inputConfirmPassword.onblur();
            inputBirthDate.onblur();
            inputDNI.onblur();
            inputCity.onblur();
            inputAddress.onblur();
            inputPostal.onblur();
        };
    };


    inputName.value = localStorage.getItem('Name');
    inputSurname.value = localStorage.getItem('Last Name');
    inputEmail.value = localStorage.getItem('Email');
    inputPhone.value = localStorage.getItem('Phone');
    inputPassword.value = localStorage.getItem('Password');
    inputConfirmPassword.value = localStorage.getItem('Password');
    inputBirthDate.value = birthDateDMY(localStorage.getItem('Birth Date'))
    inputDNI.value = localStorage.getItem('DNI');
    inputCity.value = localStorage.getItem('City');
    inputAddress.value = localStorage.getItem('Address');
    inputPostal.value = localStorage.getItem('Postal Code');

function promiseSignUp(queryParams){
    var queryParams = 'name=' + inputName.value +
    '&lastName=' + inputSurname.value +
    '&email=' + inputEmail.value +
    '&phone=' + inputPhone.value +
    '&password=' + inputPassword.value +
    '&dob=' + birthDateMDY(inputBirthDate.value) +
    '&dni=' + inputDNI.value +
    '&city=' + inputCity.value +
    '&address=' + inputAddress.value +
    '&zip=' + inputPostal.value;
    fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?' + queryParams)
    .then(function(response){
        if(response.status >= 400){
            throw new Error('Bad request - error 400, try again');
        } else if(response.status >= 500){
            throw new Error('Bad request - error 500, try again');
        }
        else{
            console.log(response)
            return response.json();
        }
    }
    )
    .then(function(data){
        alert('Success: ' + data.success + '\n' + 'Message: ' + data.msg)
        localStorage.setItem('Name', data.data.name);
        localStorage.setItem('Last Name', data.data.lastName);
        localStorage.setItem('Email' , data.data.email);
        localStorage.setItem('Phone', data.data.phone);
        localStorage.setItem('Password', data.data.password);
        localStorage.setItem('Confirm Password', data.data.password);
        localStorage.setItem('Birth Date', data.data.dob);
        localStorage.setItem('DNI', data.data.dni);
        localStorage.setItem('City', data.data.city);
        localStorage.setItem('Address', data.data.address);
        localStorage.setItem('Postal Code', data.data.zip);
    })
    .catch(function(error){
        console.log(error);
    })
};
};