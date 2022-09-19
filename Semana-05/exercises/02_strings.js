//2.A.
var firstString = 'RadiumRocket';
console.log('2 A: ' +  firstString.toUpperCase());

//2.B.
var stringOne = 'RosarioSantaFe';
var stringTwo = stringOne.substring(0,5);
console.log('2 B: ' + stringTwo);

//2.C.
var stringTwoC = 'HelloWorld';
var stringThreeC = stringTwoC.substring(7,10);
console.log('2 C: ' + stringThreeC);

//2.D.
var String2D = 'middleEarth';
var String3D = String2D.substring(0,1).toUpperCase() + String2D.substring(1,11).toLowerCase();
console.log('2 D: ' + String3D);

//2.E.
var String2E = 'Rosario Central'
var OutCome2E = String2E.indexOf(' ');
console.log('2 E: ' + OutCome2E)

//2.F.
var String2F = 'eSTACION aNTARTIDA';
var OutCome2F = String2F.substring(0,1).toUpperCase() + String2F.substring(1,8).toLowerCase() + ' ' +
String2F.substring(9,10).toUpperCase() + String2F.substring(10,18).toLowerCase();
console.log('2 F: ' + OutCome2F);