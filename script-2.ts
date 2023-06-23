const entrada2 = require("readline-sync");

let ano: number = entrada2.question("Digite o ano: ");

if(ano % 4 == 0){
    ano = ano % 4;
    if(ano % 100 == 0){
        ano = ano % 100;
        if(ano % 400 == 0)
        console.log("Ano bissexto")
        else{
            console.log("Ano bissexto");
        }
    }
    else{
        console.log("Ano nao bissexto");
        
    }
}
else{
    console.log("Ano nao bissexto");
    
}