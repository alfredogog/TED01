var i, altura, sexo, mulher = 0, quantidadeMulher = 0, homem = 0, quantidadeHomem = 0;
var menorAltura = 0, maiorAltura = 0, mediaAlturaHomem;


for(i = 1; i <= 15; i++){
    altura=parseFloat(prompt("Informe a sua altura: " + i));
    sexo=prompt("Informe o seu sexo (M ou F): ").toUpperCase();

    if(i == 1){
        menorAltura = altura;
    } if(altura > maiorAltura){
        maiorAltura = altura;
    } if(altura < menorAltura){
        menorAltura = altura;
    } if(sexo === 'F'){
        mulher += altura;
        quantidadeMulher++;
    } else if(sexo === 'M'){
        homem += altura;
        quantidadeHomem++;
    }
}

mediaAlturaHomem=homem/quantidadeHomem;

console.log("A maior altura do grupo é: " + maiorAltura);
console.log("A menor altura do grupo é: " + menorAltura);
console.log("A média da altura dos homens é: " + mediaAlturaHomem);
console.log("O número de mulheres é: " + quantidadeMulher);