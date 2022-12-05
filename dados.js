dados.js

let i = 10;

let pi = 3.14;
let r = 5/2;

let a = "a";
let b = 10;
let c = a * b;
console.log(c);

let nome = "Paulo";
let sobreNome = "Araujo";
let nomeCompleto = nome + "" + sobreNome;
let st = `${nome} ${sobreNome}`;
console.log(nomeCompleto);
connsole.log(st);

let teste;
console.log(teste); //undefined

//typeof
let texto = "Javascript Start";
let numero = 300;
let emAberto;
console.log(typeof(texto));
console.log(typeof(numero));
console.log(typeof(emAberto));

let textoNovo = parseInt(texto);
console.log(`Valor de textoNovo: ${textoNovo}`);

let numeroNovo = numero.toString();
console.log(`Valor de numeroNovo: ${numeroNovo}`);

let a = "10.5";
let b = "20.5";
let junta = a + b;
console.log(`Valor de junta: ${junta}`);

emAberto = parseInt(a) + parseInt(b);
console.log(`Valor de emAberto: ${emAberto}`);

let npf = "30.45";
let pontoFlutuante = parseFloat(npf);
console.log(`Valor de emAberto: ${pontoFlutuante}`);

Desafio #1

//Definição dos dados
let nome = "Paulo";
let peso = 67;
let altura = 1.88;

//Fórmula
let imc = peso / altura * altura;

cosole.log(`${nome}, seu IMC é de ${imc.toFixed(1)}`);
