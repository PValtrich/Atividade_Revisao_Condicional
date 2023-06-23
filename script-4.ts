const entrada4= require("readline-sync");

let texto : string = entrada4.question("Digite uma palavra: ");
let temp = "";

for (let i = 0; i <= texto.length; i++) {
    temp += texto.charAt(texto.length - i);
  }
  
  if(texto == temp){
    console.log("a palavra e um palíndromo");
    
  }
  else{
    console.log("palavra nao e um palíndromo")
  }
