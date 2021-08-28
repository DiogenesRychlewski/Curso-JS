// var nome = "João";  // podem ser usadas aspas duplas
// var sobrenome = 'Gomes';  // ou aspas simples
// var cpf = '111.111.111-11';  
// var telefone = "998887655";
// var ddd = '21';
// var email = 'joao@gmail.com';
// var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

// console.log(nome + ' ' + sobrenome);
// console.log('Primeira letra do nome: ' + nome[0]);
// console.log('PUltima letra do nome: ' + nome[3]);
// console.log('Número de caracteres do telefone: ' + telefone.length);

// var num1 = 20;
// var num2 = 3;

// var soma = num1 + num2;
// var subtracao = num1 - num2;
// var divisao = num1 / num2;
// var multiplicacao = num1 * num2;

// var media = (num1 + num2) / 2;
// console.log('A média é: ' + media);

// var potencia = Math.pow(2,4);  /*  Neste caso usamos o método pow do objeto Math, que faz potenciação.
//     Este método requer duas informações separadas por vírgula entre parênteses: o número base, e a potência.
//     Isso significa que temos 24, que dá 16. */

// var arredonda = Math.round(2.7); // Arredondamento. Resultado: 3

// var arredonda_cima = Math.ceil(4.3) // Arredondamento para cima. Resultado: 5
    
// var arredonda_baixo = Math.floor(4.6) // Arredondamento para baixo. Resultado: 4

// var raiz = Math.sqrt(36) // Raiz quadrada. Resultado: 6
// console.log(Math.pow(2,4));

// var increment = 20;
//     increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
//     console.log(increment); // O console mostrará 25

//     increment = 10;
//     increment++;
//     console.log(increment);

//     increment = 20;
//     increment--;
//     console.log(increment);

// //CONVERTER
// var telefone = "998887655";
// var ddd = '21';

// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();

// console.log(ddd_string + tel_string);

// var idade = '17';

// idade = parseInt(idade);
// idade++;
// console.log(idade);

//var undf;
//console.log(undf);

//AULA 10

//var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

//console.log(conteudo_caixa);

// document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>';

// var conteudo = document.getElementById("caixa_azul").innerHTML;
// document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo + '</h1>';

//AULA 11 - FUNÇÕES

// function soma_numeros(){
//     var x = 5;
//     var y = 2;
//     var soma = x + y;
//     console.log(soma);
// }

// soma_numeros();

// function soma_args(num1,num2){
//     var soma = num1 + num2;
//     return (soma);
// }

// var soma_f = soma_args(10,10);

// function valor_imc(peso,altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }

// var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
// var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

// var meu_imc = valor_imc(meu_peso,minha_altura);

// document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

//AULA 12 - ARRAYS

// var alunos = [ "João" , "Maria", "José" ];
// var num_primos = [ 2, 3, 5, 7, 11, 13 ];

// console.log(alunos.length);
// console.log(num_primos[2]);

// var grupos = [ 
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];

// console.log(grupos.length);
// console.log(grupos[1]);

// var ingredientes = [ "pão branco", "queijo", "presunto" ];

// ingredientes[0] = "pão integral";

// console.log(ingredientes);

// var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];

// console.log( alunos.slice(0,3) );

var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};

console.log(funcionario['nome']);
console.log(funcionario.ano_nasc);

funcionario.cargo = "Gerente de T.I.";
funcionario.cnh = "122131344";

