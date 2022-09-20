//3.A
var ArrayA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('3.A: ' + ArrayA[4], ArrayA[10]);

//3.B
var ArrayB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('3.B: ' + ArrayB.sort());

//3.C
var ArrayC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
ArrayC.unshift('January');
ArrayC.push('December');
console.log('3.C: ' + ArrayC);

//3.D
var ArrayD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
ArrayD.shift();
ArrayD.pop();
console.log('3.D: ' +  ArrayD);

//3.E
var ArrayE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
ArrayE.reverse();
console.log('3.E: ' + ArrayE);

//3.F
var ArrayF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('3.F: ' +  ArrayF.join('-'));

//3.G
var ArrayG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('3.G: ' + ArrayG.slice(4,11));