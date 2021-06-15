var frase = $('.frase').text();
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $('#tamanho-frase')

tamanhoFrase.text(numeroPalavras);

var campo = $(".campo-de-digitacao");

var contadorPalavras = $('.cont-palavra');
var contadorCaracteres = $('cont-caracter');


campo.on("click", function(){

    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(" ").length;
    var qtdCaracteres = conteudo.split("")

    contadorPalavras.text(qtdPalavras);
    
});
