$(document).ready(function(){
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

// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// console.log(funcionario['nome']);
// console.log(funcionario.ano_nasc);

// funcionario.cargo = "Gerente de T.I.";
// funcionario.cnh = "122131344";

//AULA 16 - EVENTOS

// document.getElementById("click-me").onclick = function (){
//     alert("Você clicou no botão");
// };

// document.getElementById("hover-me").onmouseover = function (){
//     alert("Você passou com o cursor no botão");
// };

// document.getElementById("leave-me").onmouseout = function (){
//     alert("Você saiu com o cursor no botão");
// };

// document.onkeydown = function() {
//     alert('Você apertou a tecla: ' + event.keyCode);
// };

// function button_clicked(){
//     alert("Você clicou no botão");
// }


// document.getElementById("botao_cor").onclick = function(){

//     this.style['backgroundColor'] = "purple";
//     this.style.transform = "translateX(100px)";
// };

// var exemplo = document.getElementsByClassName("exemplo");

// exemplo[0].innerHTML = "teste1";

// console.log(exemplo);

// var exemplo = document.getElementsByTagName("p");

// for(var a = 0; a < 5; a++) {
//     console.log(a);

// }

// var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

// for (var b=0; b < alunos.length; b++){
//     console.log(alunos[b]);
// }

// var carro = {
//     'Ano': 2018,
//     'Modelo': 'Fox',
//     'Cilindradas': '1.8',
//     'Combustível': 'Gasolina'

// }

// for (var prop in carro) {
//     console.log( prop + ': ' + carro[prop] );
// }


// var elementos = document.getElementsByClassName("exemplo");

// for (var c = 0; c < elementos.length; c++){
//     elementos[c].style.color = "orange";
//     elementos[c].style['font-weight'] = "bold";
// }

//var count = 0;

// while (count < 5){
//     console.log(count);
//     count ++;
// }

// var elementos = document.getElementsByClassName("exemplo");

// var count = 0;

// while(count < elementos.length){

//     elementos[count].style.color = "orange";
//     elementos[count].style['font-weight'] = "bold;"
//     count ++;
// }

// var count2 = 10;

// do {
//     console.log(count2);
//     count2++;
// } while(count2 < 5);

// var idade = 18;

// if (idade < 18){
//     console.log("Menor de idade");
// }else if (idade == 18){
//     console.log("Tem 18 anos");
// }

// else{
//     console.log("Maior de idade");
// }

// var nota = 8;
// var faltas = 5;

// if(nota >= 7 && faltas <= 4){
//     console.log("APROVADO");
// }else{
//     console.log("REPROVADO");
// }

// var nome = "Ivan";

// if(nome){
//     console.log("Nome: " + nome);
// }else{
//     console.log("Nome não informado");
// }

// var socio = true;
// var idade = 25;

// if(socio == true || idade >= 65){
//     console.log("O ingresso é gratis");
// }else{
//     if(idade < 18){
//         console.log("Preço a pagar: R$ 6,00");
//     }else{
//         console.log("Preço a pagar: R$ 12,00");
//     }
// }

// var funcionarios = [
        
//     {
//         'nome': 'Carlos Henrique da Silva',
//         'idade': 45,
//         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
//     },

//     {
//         'nome': 'Maria Helena Pereira',
//         'idade': 32,
//         'filhos': undefined
        
//     },

//     {
//         'nome': 'José Feliciano Maia',
//         'idade': 39,
//         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
//     }

// ];

// var list_element = document.getElementById("filhos");

// list_element.innerHTML = "";

// for(var a = 0; a < funcionarios.length; a++){
    
//     if(funcionarios[a].filhos){

//         var lista_filhos = funcionarios[a].filhos;

//         for(var b = 0; b < lista_filhos.length; b++){
//             list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho de ' + funcionarios[a].nome;
//         }
//     }

// }

// window.onmousemove = function(e){

//     if(e.pageY < 5){
//         alert('Não perca os descontos exclusivos na seção de promçoes');
//     }

// }

//window.localStorage.setItem("nome", "João");

// console.log(localStorage['nome']);

// localStorage.removeItem("nome");

// console.log(localStorage['nome']);

// document.getElementById("enviar-nome").onclick = function(){

//     //guardar o nome digitado em localstorage
//     var nome = document.getElementById("nome-usuario").value;
//     localStorage.setItem("nome", nome);

//     //esconder formulario
//     document.getElementById("name-field").style.display = "none";

//     //atualizar e mostrar mensagem de boas vindas
//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem ?";
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
//     document.getElementById("welcome-area").style.display = "initial";

// };

// if(localStorage.nome){

//     //esconder formulario
//     document.getElementById("name-field").style.display = "none";

//     //atualizar e mostrar mensagem de boas vindas
//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem ?";
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
//     document.getElementById("welcome-area").style.display = "initial";

// }

// document.getElementById("not-me").onclick = function(){

//     //remover chave no local storage
//     localStorage.removeItem("nome");

//     //esconder mensagem de boas vindas
//     document.getElementById("welcome-area").style.display = "none";

//     //mostrar formulario
//     document.getElementById("name-field").style.display = "initial";
// }

// var data_hoje = new Date();

// console.log(data_hoje.getDate());

// var data_nascimento = "2002-08-15";

// var ano_nascimento = new Date("2002-08-15").getFullYear();
// var ano_atual = new Date().getFullYear();
// var idade = ano_atual - ano_nascimento;
// console.log(idade);

// var data = new Date();

// console.log(data.getTime() / 31536000000);

// var data_envio = new Date("2018-03-20");
// data_envio = data_envio.getTime();

// var data_entrega = new Date("2018-04-06");
// data_entrega = data_entrega.getTime();

// var tempo_entrega = (data_entrega - data_envio) / 86400000;

// console.log(tempo_entrega);

// document.getElementById("dias_entrega").innerHTML = tempo_entrega + " dias";

// console.log('Mensagem 1');

// window.setTimeout(function(){
//     console.log('Mensagem 2');
// },3000);

// document.getElementById("mostrar-loader").onclick = function(){

//     document.getElementById("spinner-loader").style.display = "initial";

//     window.setTimeout(function(){
//         document.getElementById("spinner-loader").style.display = "none";
//     },5000);

// };


// var count = 0;

// var inter = window.setInterval(function(){
//     console.log(count);
//     count++;
//     if(count >= 10){
//         window.clearInterval(inter);
//     }
// },1000);

// window.setInterval(function(){

// var hora_atual = new Date();

// var horas = hora_atual.getHours();
// var minutos = hora_atual.getMinutes();
// var segundos = hora_atual.getSeconds();

// function format_time (time){
//     if(time >= 0 && time <= 9){
//         var formatted_time = time.toString();
//         formatted_time = "0" + formatted_time;
//     }else{
//         var formatted_time = time.toString();
//     }
//     return formatted_time;
// }

// document.getElementById("relogio").innerHTML = format_time(horas) + ":" + format_time(minutos) + ":" + format_time(segundos);

// },1000);


// function valor_pedagio(categoria){
    
//     switch(categoria){

//         case '1': return 11.22;
//         break;

//         case '2': return 22.45;
//         break;

//         case '3': return 16.88;
//         break;

//         case '4': return 33.65;
//         break;

//         default: return 'categoria não encontrada';

//     }

// }


// var categoria_veiculo = "3";

// console.log(valor_pedagio(categoria_veiculo));

// var categoria_veiculo = "2";

// console.log(valor_pedagio(categoria_veiculo));

// var categoria_veiculo = "5";

// console.log(valor_pedagio(categoria_veiculo));


// var x = 0;

// while(x < 10){
//     console.log(x);
//     x++;

//     if(x == 5){
//         break;
//     }
// }

// var lista = [1,5,9,33,56,89,100,122,145,189,190,205,290];

// for(i = 0; i < lista.length; i++){
//     if(lista[i] == 33){
//         console.log("valor encontrado");
//         break;
//     }

//     console.log('Tentativa: ' + i);

// }

// var num = 0;

//     while (num < 20) {
//         num++;
//         if (num % 2 == 0) {
//             continue;
//         }
//         console.log(num);
//     }

// document.getElementById("mostrar_opcao").onclick = function(){

//     var campo_select = document.getElementById("options");
//     var indice_selecionado = campo_select.options.selectedIndex;
//     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//     document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
    
//     // var indice_selecionado = document.getElementById("options").value;
//     // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

// };

// document.getElementById("mostrar_radio").onclick = function(){

//     var radio = document.getElementsByName("genero");

//     var radio_selected;

//     for(var a = 0; a < radio.length; a++){
//         if(radio[a].checked){
//             radio_selected = radio[a].value;
//             break;
//         }
//     }

//     document.getElementById("radio_selecionado").innerHTML = radio_selected;
// };

// document.getElementById("mostrar_check").onclick = function(){

//     document.getElementById("check_selecionado").innerHTML = "";

//     var check = document.getElementsByName("interesse");

//     for(var i = 0; i < check.length; i++){
//         if(check[i].checked){
//             document.getElementById("check_selecionado").innerHTML += '<li>' + check[i].value + '</li>';
//         }
//     }
// };

// document.getElementById("mostrar_data").onclick = function(){

//     var data_selected = document.getElementById("data_evento").value;
//     var data_completa = new Date(data_selected);
//     document.getElementById("data_selecionada").innerHTML = data_completa;
// };

// document.getElementById("escolaridade").onchange = function () {

//     var campo_select = document.getElementById("escolaridade");
//     var indice_selecionado = campo_select.options.selectedIndex;
//     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//     document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

// };

// var check = document.getElementsByName("lanche");

// for (var a = 0;  a < check.length; a++) {

//     check[a].onchange = function () {

//         document.getElementById("check_selecionado").innerHTML = "";
        
//         for (var b = 0;  b < check.length; b++) {
            
//             if (check[b].checked) {
//                 document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
//             }
//         }
//     }  
// }

//JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY JQUERY 

// $("#esconder").click(function(){
//     $(".exemplo").css("display","none");
// });

// $("#esconder").click(function(){
//     $(".exemplo").hide();
// });

// var conteudo_html = $("#paragrafo-html").html();

// $("#paragrafo-html").html("Mudar o conteúdo do paragrafo");

// console.log(conteudo_html);

// var url_link = $("#paragrafo-link").attr("href");
// console.log(url_link);

// $("#paragrafo-link").attr("href","http://udemy.com");
// url_link = $("#paragrafo-link").attr("href");
// console.log(url_link);

// $("#mudar_imagem").click(function(){
//     $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
//     $("#mudar_imagem").hide();
// });

// $("#paragrafo-empty").empty();
// $("#paragrafo-empty").remove();



// var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

// $.each(lista,function(indice,valor){
//     console.log("O elemento de índice [" + indice + "] tem o valor de: " + valor);
// });

// var pessoa = {
//     'nome': 'João Pedro',
//     'DN': '20/01/1990',
//     'CPF': '111.111.111-11'
// };

// $.each(pessoa, function( chave, valor ) {
//     console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
// });

// var interesses = $("#interesses li");

// $.each(interesses, function( chave, valor ) {
//      console.log($(valor).text());
//  });

// var conteudo_input = $("#campo_nome").val();

// console.log(conteudo_input);

// var valor_selecionado = $('#options').val();
//     console.log(valor_selecionado);

// var texto_selecionado = $('#options').find(":selected").text();
// console.log(texto_selecionado);

// $("#options").change(function(){
//     var novo_selecionado = $('#options').find(":selected").text();
//     console.log(novo_selecionado);
// });

// var valor_radio_selecionado = $("input[name='genero']:checked").val();
// console.log(valor_radio_selecionado);

// var texto_radio_selecionado = $("input[name='genero']:checked").parent('span').text();;
// console.log(texto_radio_selecionado);

// $("input[name='interesse']").change(function() {

//     var checkboxes_selecionados = $("input[name='interesse']:checked");
//     var textos = [];
    
//     $.each(checkboxes_selecionados, function( index, value ) {
        
//         textos.push($(value).parent("span").text());
    
//     });
    
//     console.log(textos);
    
// });

// $("#adicionar_classe").click(function(){
//     $("#paragrafo-classes").addClass("styling");
// });

// $("#remover_classe").click(function(){
//     $("#paragrafo-classes").removeClass("styling");
// });

// $("#alternar_classe").click(function(){
//     $("#paragrafo-classes").toggleClass("styling");
// });

// $("#nome").keyup(function(){
//     var conteudo = $("#nome").val();

//     if(conteudo){
//         $("#confirmar").css("display","initial");
//     }else{
//         $("#confirmar").css("display","none");
//     }
// });

// $( "#botao-esconder" ).click(function() {
//     $(this).hide(2000, function(){
//         $("#texto-escondido").show();
//     });
    
// });

// $("#toggle-tab").click(function() {

//     $("#tab-content").toggle();
//     $("#toggle-tab").toggleClass("flip");
    
// });

// $("#toggle-tab").click(function() {

//     $("#tab-content").slideToggle(500);
//     $("#toggle-tab").toggleClass("flip");
    
// });

// $("#toggle-tab").click(function() {

//     $("#tab-content").slideToggle(500);
//     $("#toggle-tab").toggleClass("flip");
    
// });

// $("#toggle-tab").click(function() {

//     $("#tab-content").fadeToggle(1000);
//     $("#toggle-tab").toggleClass("flip");

// });

// $("#animar").click(function(){
//     $("#quadrado").animate({
//         width: '+=20px',
//         height: '+=20px'
//     },2000);
// }); 

// $("#animar").click(function(){

//     $("#quadrado").animate({
//         width: '+=100px'
//     },5000);

//     $("#quadrado").animate({
//         height: '+=100px'
//     }),5000;

// });

// $("#animar").click(function(){

//     $("#quadrado").animate({
//         width: '+=20px'
//     },500).animate({
//         height: '+=20px'
//     },500).css('background-color', 'green');

// });

// $("#animar").click(function(){

//     $("#quadrado").animate({
//         width: '+=20px'
//     },500).animate({
//         height: '+=20px'
//     },500, function() {
//         $("#quadrado").css('background-color', 'green')
//     });

// });


// $("#animar").click(function(){

//     $("#quadrado")
//         .animate({width: '+=20px'},500)
//         .animate({height: '+=20px'},500, 
//             function() {
//                 $("#quadrado").css('background-color', 'green')
//             }
//         )
//         .animate({borderRadius: '20px'});
// });

// function pegar_usuario(callback){

//     var u = {
//         'nome': 'João'
//     };

//     callback(u);
    
// }
        
        
// pegar_usuario(function(user){
//     console.log('Olá ' + user.nome + ', como vai?');
// });

// function pegar_usuario(){

//     window.setTimeout(function(){
//         var u = {
//             'nome': 'João'
//         };
//         return u;
//     }, 1000);
    
// }
        
// function saudar_usuario(user) {
//     console.log('Olá ' + user.nome + ', como vai?');
// }



// var user = {'nome': ''};


// try{

//     if(user.nome == ''){
//         throw 'Nome em branco';
//     }
 
//     saudar_usuario(user);

// }catch(err){

//     console.log(err);

// }

// var nome = "";

    // if (nome) {
    //     var mensagem = "Olá " + nome;
    // } else {
    //     var mensagem = "Nome não informado";
    // }

// var mensagem;
// mensagem = nome ? "Olá " + nome : "Nome não informado";

// console.log(mensagem);

// nome = "aa";
// idade = "12";

// mensagem = (nome && idade) ? " Olá" + nome + ", você tem" + idade + "anos."
// : (!nome && !idade) ? "Nome e idade não informados"
// : (!idade) ? "Idade não informada"
// : "Nome não informado"

// console.log(mensagem);



// function criar_nome() {
//     nome = 'Maria';
//     console.log(nome); // O console mostrará 'Maria'
// }

// criar_nome();

// console.log(nome); 

// var x = 0;

//     if (x == 0) {
//         let nome = "Mariana";
//     }

//     console.log(nome);

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// const PI = "3.14159";


// var meuWebApp = {};
    
// meuWebApp.nome = "Felipe";

// meuWebApp.ver_nome = function() {
//     console.log(this.nome);
// };


// var meuWebApp = {

//     nome: "Felipe",

//     ver_nome: function() {
//         console.log(this.nome)
//     }

// };

// meuWebApp.ver_nome();

// var meuWebApp = (function() {

//     var nome= "Felipe";
    
//     return {
//         ver_nome: function() {
//             return nome;    
//         },
//         mudar_nome: function(novo_nome) {
//             nome = novo_nome;
//         },
//         apagar_nome: function() {
//             nome = null;
//         }
//     };  
// })();   

// console.log( meuWebApp.ver_nome() );
// console.log( meuWebApp.mudar_nome('Marcos') );
// console.log( meuWebApp.apagar_nome() );


// var funcionario = {
//     'nome': "Fernanda Costa",
//     'd_nascimento': '1988-10-01',
//     'CPF': '111.111.111-11'
// };

// var funcionario_json = JSON.stringify(funcionario);
// console.log(funcionario_json);

// var funcionario_obj = JSON.parse(funcionario_json);

// console.log(funcionario_obj);

// function mostrar_temperatura(){
//     var dados_obj = JSON.parse(dados);
//     console.log("A temperatura de londres é de: " + dados_obj.main.temp + " graus Celsius ");
// }

// function mostrar_dados(){
//     var dados_obj = JSON.parse(dados);
//     console.log(dados_obj);
// }

// function tempo_londres(callback){
// var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         callback(this.responseText);
//     }
// };

// xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=22ab7b66298b4a30865204738201711&q=Araguaína");
// xhttp.send();

// }

// tempo_londres(mostrar_temperatura);

// $.ajax({

//     url: "http://api.weatherapi.com/v1/current.json?key=22ab7b66298b4a30865204738201711&q=Araguaína",
//     type: "GET",
//     dataType: "json",
//     success: function(data){
//         console.log(data.main.temp);

//     },

//     error:function(){
//         console.log("erro na requisição");
//     }


// });




});