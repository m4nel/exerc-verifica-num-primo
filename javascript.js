function confere(){
let numero = parseInt(document.getElementById("numeroInput").value);
let tela = document.getElementById("tela");
let i = 1
let ContDiv = 0


for(i; i < numero;){
    i += 1;
    
if(numero % i == 0){
    ContDiv += 1
}

if (ContDiv < 2) {
    tela.innerHTML = "O numero é primo";
}else {
    tela.innerHTML = "O numero não é primo";
}

console.log(ContDiv)
    
    
    
   
}



}

