//Exercicio 1

function pegar_paises(callback){

    $.ajax({

    url: "https://restcountries.eu/rest/v2/all",
    type: "GET",
    dataType: "json",
    }).done(function(data){
        callback(data);
    }).fail(function(){
        console.log("Erro na requisição");
    });
           
}

function popular_paises(paises){

    for(var i = 0; i < paises.length; i++){
        document.getElementById("paises").innerHTML += '<option value ="' + paises[i].alpha3code + '">' + paises[i].name + '</option>';
    }

}

pegar_paises(popular_paises);

//Exercicio 2

var cursos = [
    {
        "titulo": "PHP",
        "aval": []
    },
    {
        "titulo": "Javascript",
        "aval": [5,5,4.5,4,5,5,5,4.5]
    },
    {
        "titulo": "Python",
        "aval": [5,5,4,4,5,3,5,4,4,5]
    },
    {
        "titulo": "Machine Learning",
        "aval": [5,5,4.5]
    }
];

function media_aval(lista_cursos){

    for(var a = 0; a < lista_cursos.length; a++){

        try{

            if(lista_cursos[a].aval.length == 0){
                throw "Curso " + lista_cursos[a].titulo + " não possui avaliações."
            }else if(lista_cursos[a].aval.length < 5){
                throw "Curso " + lista_cursos[a].titulo + " possui menos de 5 avaliações."
            }

            var soma = 0;

            for(var b = 0; b < lista_cursos[a].aval.length; b++){
                
                soma += lista_cursos[a].aval[b];
            }

            var media = soma / lista_cursos[a].aval.length;
            console.log("Curso " + lista_cursos[a].titulo + " tem média de avaliações: " + media.toFixed(2));
        }

        catch(err){

            console.log(err);

        }

    }

}

media_aval(cursos);

//Exercicio 3

var theUserNamespace = {
    "usuarios": {
        "33884h": "João Gomes",
        "43585f": "Maria Luisa",
        "93661h": "Pedro Henqrique",
        "23172g": "Paula Carvalho",
    },

    "acessos": [
        {
            "usuario": "33884h",
            "data": "10/07/18"
        },
        {
            "usuario": "33884h",
            "data": "11/07/18"
        },
        {
            "usuario": "3585f",
            "data": "19/07/18"
        },
        {
            "usuario": "93661h",
            "data": "24/07/18"
        },
        {
            "usuario": "23172g",
            "data": "13/08/18"
        },
        {
            "usuario": "93661h",
            "data": "14/08/18"
        }
    ],

    "imprimir_acessos": function(){
        for(var a = 0; a < this.acessos.length; a++){
            $("#acessos").append("<p>Acesso de "+ this.usuarios[this.acessos[a].usuario] +", no dia"+ this.acessos[a].data +"<p>");
        }
    }
}

theUserNamespace.imprimir_acessos();

//Exercicio 4

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function pegar_pergunta(callback){

    $.ajax({

    url: "https://opentdb.com/api.php?amount=1&category=11",
    type: "GET",
    dataType: "json",
    }).done(function(data){
        callback(data.results[0]);
    }).fail(function(){
        console.log("Erro na requisição");
    });
           
}

$("#nova_pergunta").click(function(){
    $("#opcoes").html("");
    $("#erro_acerto").html("");
    $("#pergunta").html("");
    $("#nova_pergunta").hide();
    pegar_pergunta(gerar_pergunta);
});


function gerar_pergunta(pergunta){

    $("#pergunta").html(pergunta.question);
    var resposta_correta = pergunta.correct_answer;
    var respostas = pergunta.incorrect_answers;
    respostas.push(resposta_correta);
    respostas = shuffle(respostas);

    for(a = 0; a < respostas.length; a++){
        
        $("#opcoes").append('<input type = "radio" name = "opcao" value = "' + respostas[a] + '"> ' + respostas[a] + '<br>');
    }

    $("#opcoes input[name='opcao']").change(function(){
        $("#submeter").show();
    });

    $("#submeter").click(function(){
        var resposta_escolhida = $("#opcoes input[name='opcao']:checked").val();
        
        $("#submeter").hide();

        if(resposta_escolhida == resposta_correta){
            $("#erro_acerto").html("<span style = 'color: green': font-weight: bold'>Parabéns, você acertou! A resposta é: " + resposta_correta + "</span>");
        }else {
            $("#erro_acerto").html("<span style = 'color: red': font-weight: bold'>Você errou! A resposta é: " + resposta_correta + "</span>");
        }

        $("#opcoes input[name='opcao']").attr("disabled", true);

        $("#nova_pergunta").show();



    });
}


pegar_pergunta(gerar_pergunta);
