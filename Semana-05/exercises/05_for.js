//5.A
var Array5 = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for ( var i = 0; i < Array5.length; i++){
    alert('5.A: ' + Array5[i]);
};

//5.B
for ( var i = 0; i < Array5.length ; i++){
Array5[i] = Array5[i].substring(0,1).toUpperCase() + Array5[i].substring(1).toLowerCase();
    alert('5.B: ' + Array5[i]);
};
//5.C
var sentence = '';
for ( var i = 0; i < Array5.length; i++){
    sentence = sentence + ' ' + Array5[i]
};
alert('5.C: ' + sentence);

//5.D
var EmptyArray = [];
for ( var i = 0; i < 10; i++){
    EmptyArray.push(i);
}
console.log('5.D: ' + EmptyArray);