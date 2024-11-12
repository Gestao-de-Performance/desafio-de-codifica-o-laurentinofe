let vetor =  [9, 6, 18, 11, 20, 22, 3, 7, 18, 14];

let tamanhoVetor = vetor.length;
let soma = 0;

for (let i=0; i < tamanhoVetor; i++) {
    soma += vetor[i];
    console.log(vetor[i]); //apenas para visualizar o for percorrendo o vetor
}

let media = soma / tamanhoVetor;
console.log(media);

