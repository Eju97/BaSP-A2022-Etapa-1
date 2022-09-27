window.onload = function(){
var InputValue = [];

// function EXCLUSIVE Letter validation
function ExclusiveLetterCheck(letterString){
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
function NumberAndLetterCheck(string){
    var NumbersAndLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(j=0; j < string.length; j++){
        if(!(NumbersAndLetters.includes(string[j]))){
            return false;
        };
    }; return true
};

// Name Validation
var InputName = document.getElementById('NameForm');
var InputNameError = document.createElement('p');
InputNameError.classList.add("font-error");

InputName.onblur = function(){
    if (InputName.value == ''){
        InputName.classList.add("border-error");
        InputNameError.textContent = 'Insert a name';
        InputName.insertAdjacentElement('afterend', InputNameError);
    } else if (!ExclusiveLetterCheck(InputName.value)){
        InputName.classList.add("border-error");
        InputNameError.textContent = 'Name can only contain letters';
        InputName.insertAdjacentElement('afterend', InputNameError);
    } else if (InputName.value.length < 3){
        InputName.classList.add("border-error");
        InputNameError.textContent = 'Name must have at least 3 words';
        InputName.insertAdjacentElement('afterend', InputNameError);
    }  else if (ExclusiveLetterCheck(InputName.value.length)){
        InputName.classList.add("border-correct");
        InputValue[0] = InputName.value;
    };
};

InputName.onfocus = function(){
    InputName.classList.remove("border-correct");
    InputName.classList.remove("border-error");
    InputNameError.remove();
};

// Email Validation
var InputEmail = document.getElementById('EmailForm');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
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
        InputValue[1] = InputEmail.value;
    };
};
InputEmail.onfocus = function(){
    InputEmail.classList.remove("border-correct");
    InputEmail.classList.remove("border-error");
    InputEmailError.remove();
};

// Contact Area Validation
InputContact = document.getElementById('ContactArea');
InputContactError = document.createElement('p');
InputContactError.classList.add("font-error");

InputContact.onblur = function(){
    InputValue[2] = InputContact.value;
}

// Message Area Validation
InputMessage = document.getElementById("Message");
InputMessageError = document.createElement('p');
InputMessageError.classList.add("font-error");

InputMessage.onblur = function(){
    if(InputMessage.value == ""){
        InputMessage.classList.add("border-error");
        InputMessageError.textContent = '*Insert a message';
        InputMessage.insertAdjacentElement('afterend', InputMessageError);
    } else if(InputMessage.value.length < 3){
        InputMessage.classList.add("border-error");
        InputMessageError.textContent = '*Message must be longer than 3 characters';
        InputMessage.insertAdjacentElement('afterend', InputMessageError);
    } else if(!NumberAndLetterCheck(InputMessage.value)){
        InputMessage.classList.add("border-error");
        InputMessageError.textContent = '*Message must be alphanumeric text';
        InputMessage.insertAdjacentElement('afterend', InputMessageError);
    } else if (NumberAndLetterCheck(InputMessage.value)){
        InputMessage.classList.add("border-correct");
        InputValue[3] = InputMessage.value;
    };
};
InputMessage.onfocus = function(){
    InputMessage.classList.remove("border-correct");
    InputMessage.classList.remove("border-error");
    InputMessageError.remove();
};

// Send Button Validation
var SendButton = document.getElementById('SubmitBtn');
SendButton.onclick = function(e){
        e.preventDefault();
        if(InputValue.includes(InputName.value) &&
        InputValue.includes(InputEmail.value) &&
        InputValue.includes(InputContact.value) &&
        InputValue.includes(InputMessage.value)){
            alert('Name: ' + InputValue[0] + '\n' +
            'Email: ' + InputValue[1] + '\n' +
            'Contact Area: ' + InputValue[2] + '\n' +
            'Message: ' + InputValue[3]);
        } else if (InputValue.length == 0){
            alert('Error! Fields must be completed');
            InputName.onblur();
            InputEmail.onblur();
            InputMessage.onblur();
        } else {
            alert('Error! All fields must be completed');
            InputName.onblur();
            InputEmail.onblur();
            InputMessage.onblur();
        };
    };
};