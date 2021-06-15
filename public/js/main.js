var frase = $('.frase').text();
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $('#tamanho-frase')

tamanhoFrase.text(numeroPalavras);

var campo = $(".campo-de-digitacao");


campo.on("input", atualizaDados);
campo.one("focus", iniciaContagemRegressiva);

function atualizaDados(){


    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length -1;
    $("#cont-palavra").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $('#cont-caracter').text(qtdCaracteres);
    
};


function iniciaContagemRegressiva(){

    var tempo = $('#tempo-digitacao');
    var contador = $('#tempo-digitacao').text(); // vale de 3


    const timer = setInterval(function(){
        contador--;
        tempo.text(contador); 
        if(contador < 1 ){
            campo.attr("disabled", true);
            
            clearInterval(timer);
        }

    },1000)
}


