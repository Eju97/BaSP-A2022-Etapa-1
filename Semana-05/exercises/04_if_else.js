//4.A
var random = Math.random()
if ( random >= 0.5 ){
    alert("4.A: Greater than 0,5")
} else{
    alert("4.A: Lower than 0,5");
}

//4.B
var Age = Math.round(Math.random()*100);
if (Age < 2){
    alert("4.B: Bebe");
} else if ( Age < 12){
    alert("4.B: Niño");
} else if ( Age < 19){
    alert("4.B: Adolescente");
} else if ( Age < 30){
    alert("4.B: Joven");
} else if ( Age < 60){
    alert("4.B: Adulto");
} else if ( Age < 75){
    alert("4.B: Adulto Mayor");
} else if (Age > 75){
    alert("4.B: Anciano");
}
console.log("4.B: The age is " + Age)