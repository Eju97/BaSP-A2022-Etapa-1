window.onload = function(){
var inputValue = [];

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

// function EXCLUSIVE Number and Letter Validation
function numberAndLetterCheck(string){
    var numbersAndLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(j=0; j < string.length; j++){
        if(!(numbersAndLetters.includes(string[j]))){
            return false;
        };
    }; return true
};

// Name Validation
var inputName = document.getElementById('NameForm');
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
    } else if (inputName.value.length < 3){
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

// Email Validation
var inputEmail = document.getElementById('EmailForm');
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
        inputValue[1] = inputEmail.value;
    };
};
inputEmail.onfocus = function(){
    inputEmail.classList.remove("border-correct");
    inputEmail.classList.remove("border-error");
    inputEmailError.remove();
};

// Contact Area Validation
var inputContact = document.getElementById('ContactArea');
var inputContactError = document.createElement('p');
inputContactError.classList.add("font-error");

inputContact.onblur = function(){
    inputValue[2] = inputContact.value;
}

// Message Area Validation
var inputMessage = document.getElementById("Message");
var inputMessageError = document.createElement('p');
inputMessageError.classList.add("font-error");

inputMessage.onblur = function(){
    if(inputMessage.value == ""){
        inputMessage.classList.add("border-error");
        inputMessageError.textContent = '*Insert a message';
        inputMessage.insertAdjacentElement('afterend', inputMessageError);
    } else if(inputMessage.value.length < 3){
        inputMessage.classList.add("border-error");
        inputMessageError.textContent = '*Message must be longer than 3 characters';
        inputMessage.insertAdjacentElement('afterend', inputMessageError);
    } else if(!numberAndLetterCheck(inputMessage.value)){
        inputMessage.classList.add("border-error");
        inputMessageError.textContent = '*Message must be alphanumeric text';
        inputMessage.insertAdjacentElement('afterend', inputMessageError);
    } else if (numberAndLetterCheck(inputMessage.value)){
        inputMessage.classList.add("border-correct");
        inputValue[3] = inputMessage.value;
    };
};
inputMessage.onfocus = function(){
    inputMessage.classList.remove("border-correct");
    inputMessage.classList.remove("border-error");
    inputMessageError.remove();
};

// Send Button Validation
var sendButton = document.getElementById('SubmitBtn');
sendButton.onclick = function(e){
        e.preventDefault();
        if(inputValue.includes(inputName.value) &&
        inputValue.includes(inputEmail.value) &&
        inputValue.includes(inputContact.value) &&
        inputValue.includes(inputMessage.value)){
            alert('Name: ' + inputValue[0] + '\n' +
            'Email: ' + inputValue[1] + '\n' +
            'Contact Area: ' + inputValue[2] + '\n' +
            'Message: ' + inputValue[3]);
        } else if (inputValue.length == 0){
            alert('Error! Fields must be completed');
            inputName.onblur();
            inputEmail.onblur();
            inputMessage.onblur();
        } else {
            alert('Error! All fields must be completed');
            inputName.onblur();
            inputEmail.onblur();
            inputMessage.onblur();
        };
    };
};