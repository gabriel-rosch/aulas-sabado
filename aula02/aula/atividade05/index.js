
// 6. Tem-se um conjunto de dados contendo a altura  de 15 pessoas. Faça um programa que calcule e escreva:
// a maior e a menor altura do grupo;
// a média de altura;
// o número de pessoas com mais de 1.81 de altura.


let alturas = [2,1,1,2,1.5,1.7,1.8,3.0,2.1,1.7,1.8,2.1,1.3,1.6,1.7]

let maiorAltura = alturas[0];
let menorAltura = alturas[0];
let total = 0;
let qtdAltos = 0;

for (let i = 0; i < alturas.length; i++) {
    const element = alturas[i];
    if(element > maiorAltura) {
        maiorAltura = element
    }
    if(element < menorAltura) {
        menorAltura = element
    }
    if(element > 1.81) {
        qtdAltos++
    }
    total += element  
}
let media = total / alturas.length

alert(`
    A maior altura é ${maiorAltura}
    A menor altura é ${menorAltura}
    A media das alturas é ${media}
    Numero de pessoal com mais de 1,81: ${qtdAltos}
`)










