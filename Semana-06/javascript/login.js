window.onload = function(){
var InputValue = [];

// Email Validation
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var InputEmail = document.getElementById('input-email');
var InputEmailError = document.createElement('p');
InputEmailError.classList.add("font-error");

InputEmail.onblur = function(){
    if (InputEmail.value == ''){
        InputEmail.classList.add("border-error");
        InputEmailError.textContent = '*Insert an email';
        InputEmail.insertAdjacentElement('afterend', InputEmailError);
    } else if (!emailExpression.test(InputEmail.value)){
        InputEmail.classList.add("border-error");
        InputEmailError.textContent = "*Insert a valid email";
        InputEmail.insertAdjacentElement('afterend', InputEmailError);
    } else{
        InputEmail.classList.add("border-correct");
        InputValue[0] = InputEmail.value;
    };
};

InputEmail.onfocus = function(){
    InputEmail.classList.remove("border-correct");
    InputEmail.classList.remove("border-error");
    InputEmailError.remove();
}

// Password Validation
var InputPassword = document.getElementById('input-password');
var InputPasswordError = document.createElement('p');
InputPasswordError.classList.add('font-error');

InputPassword.onblur = function(){
    if(InputPassword.value.length == ''){
        InputPassword.classList.add("border-error");
        InputPasswordError.textContent = '*A password is required';
        InputPassword.insertAdjacentElement('afterend', InputPasswordError);
    } else if(InputPassword.value.length < 8){
        InputPassword.classList.add("border-error");
        InputPasswordError.textContent = '*The password must be 8 characters long';
        InputPassword.insertAdjacentElement('afterend', InputPasswordError);
    } else if(!NumberCheck(InputPassword.value)){
        InputPassword.classList.add("border-error");
        InputPasswordError.textContent = '*The password must contain at least one number';
        InputPassword.insertAdjacentElement('afterend', InputPasswordError);
    } else if (!LetterCheck(InputPassword.value)){
        InputPassword.classList.add("border-error");
        InputPasswordError.textContent = '*The password must contain at least one letter';
        InputPassword.insertAdjacentElement('afterend', InputPasswordError);
    } else if ((LetterCheck(InputPassword.value)) && (NumberCheck(InputPassword.value))){
        InputPassword.classList.add("border-correct");
        InputValue[1] = InputPassword.value;
    };
};

InputPassword.onfocus = function(){
        InputPassword.classList.remove("border-correct");
        InputPassword.classList.remove("border-error");
        InputPasswordError.remove();
};

// function Letter validation
function LetterCheck(letterString){
    var ascii =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(i=0; i < letterString.length; i++){
        if( ascii.includes(letterString[i])){
            return true;
        };
    }; return false;
};

// function Number validation
function NumberCheck(numberString){
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(i = 0; i < numberString.length; i++){
        if (numbers.includes(numberString[i])){
            return true;
        };
    };
    return false;
};

// LogIn button validation
var loginButton = document.getElementById('loginbtn');
    loginButton.onclick = function(e){
        e.preventDefault();
        if(InputValue.includes(InputEmail.value) &&
        InputValue.includes(InputPassword.value)){
            alert('Email: ' + InputValue[0] + '\n' + 'Password: ' + InputValue[1] );
        }
        else if (InputValue.length == 0 ){
            alert('Error! Fields are empty or must be completed correctly. Try again');
            InputEmail.onblur();
            InputPassword.onblur();
        }
        else if (!(InputValue.includes(InputEmail.value)) || !(InputValue.includes(InputPassword.value))){
            alert('Both fields must be validated');
            InputEmail.onblur();
            InputPassword.onblur();
        } else{
            alert('ERROR! Try again');
        };
    };
};