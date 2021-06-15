var frase = $('.frase').text();
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $('#tamanho-frase')

tamanhoFrase.text(numeroPalavras);

var campo = $(".campo-de-digitacao");


campo.on("input", atualizaDados);



function atualizaDados(){


    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length -1;
    $("#cont-palavra").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $('#cont-caracter').text(qtdCaracteres);
    
};


