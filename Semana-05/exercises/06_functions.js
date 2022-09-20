//6.A
function suma(valor1, valor2){
    return valor1 + valor2;
}
console.log('6.A: ' + suma(2,3));

//6.B
function sumaB(valor1, valor2){
    if (typeof valor1 === 'number' && typeof valor2 === 'number'){
        return valor1 + valor2;
    } else{
        return alert(NaN);
    }
}
console.log('6.B: ' + sumaB(10,3));

//6.C
function validate(number){
    return  (Number.isInteger(number));
    }
console.log('6.C: ' + validate(10))

//6.D
function sumaD(valor1, valor2){
    if (validate(valor1) && validate(valor2)){
        return valor1 + valor2;
    } else{
        return alert('6.D: Numero decimal detectado ' + Math.round(valor1 + valor2)) ;
    }
};
console.log('Checkear alerta 6.D: ' + sumaD(3,3.6));
console.log('6.D: ' + sumaD(5,5))

//6.E
function sumaA(valor1, valor2){
    return sumaD(valor1, valor2)
};
console.log('6.E: ' + sumaA(5,4))

