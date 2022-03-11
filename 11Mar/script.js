
const PI = 3.14;

console.log(PI);

if (PI >= 3) { 
  
console.log(PI); 

}

// 3.14 in output sia in globale che in locale 



var favColour = "violet"; 

let monthsInAYear = 12;

if (true) { 

 var favColour = "violet"; 
  
 console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Il primo console.log restituirà 'violet' essendo favColour ugule a una var  
// Il secondo console.log restituirà 12 essendo let (Global Scope) uguale a 12

function makePizza(moreIngredients) {

let theSecond = "Sugo di pomodoro freschissimo"; 
}

if (true) {
  
  makePizza ("rucola, prosciutto crudo e scaglie di grana."); 
  console.log ("Il secondo ingrediente necessario: ", theSecond); 
}


// Restituisce undefined essendo la variabile theSecond nominata all'interno del primo blocco codice
