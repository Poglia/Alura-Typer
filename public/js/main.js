var tempo = $('#tempo-digitacao');
const tempoInicial = $('#tempo-digitacao').text();
var campo = $(".campo-de-digitacao");
var botaoReiniciar = $("#botao-reiniciar");

$(function() {
    console.log("Pagina carregada");
    reiniciaJogo();
    atualizaTamanhoFrase();
    atualizaDados();
    iniciaCronometro();
    
    botaoReiniciar.click(reiniciaJogo);
    
    
});

function atualizaTamanhoFrase(){

    var frase = $('.frase').text();
    var numeroPalavras = frase.split(" ").length;
    var tamanhoFrase = $('#tamanho-frase')
    tamanhoFrase.text(numeroPalavras);
}



function atualizaDados(){

    campo.on("input", function(){

        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length -1;
        $("#cont-palavra").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $('#cont-caracter').text(qtdCaracteres);
    });
};


function iniciaCronometro(){


    campo.one("focus", function(){
        botaoReiniciar.attr("disabled", true);

        var contador = $('#tempo-digitacao').text(); // vale de 3
        
        const timer = setInterval(function(){
            contador--; 
            tempo.text(contador); // coloca o contador dentro da tag
            if(contador < 1 ){

                paraCronometro(timer);
                botaoReiniciar.attr("disabled", false);
            }

        },1000)

    });
}


function reiniciaJogo(timer){
    
        paraCronometro(timer);
        // libera o campo de texto novamente
        campo.attr("disabled", false);   
        campo.val(""); //zera o valor 

        // reseta o contador
        tempo.text(tempoInicial);

        //zera caracteres e palavras
        $("#cont-palavra").text('0');
        $('#cont-caracter').text('0');

        iniciaCronometro();
}

function paraCronometro(timer){

    campo.attr("disabled", true); //desabilita o campo
    clearInterval(timer); // trava o cronometro
}