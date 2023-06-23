const entrada3= require("readline-sync");
let nota: number = entrada3.question("Insira a nota do aluno: ");
 
if(nota < 7){
    console.log("Reprovado")
}
else{
    console.log("Aprovado");
    
}
