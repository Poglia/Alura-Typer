const tempoInicial = $('#tempo-digitacao').text();
var tempo = $('#tempo-digitacao');
var campo = $(".campo-de-digitacao");
var botaoReiniciar = $("#botao-reiniciar");
var botaoDelete = $('.botao-remover');

$(function() {

    //console.log("Pagina carregada");
    
    atualizaTamanhoFrase();
    atualizaDados();
    iniciaCronometro();
    inicializaMarcadores();
    botaoReiniciar.click(reiniciaJogo);
    botaoDelete.click(removeLinha);
    
    
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

function inserePlacar(){

    var corpoTabela = $(".placar").find("tbody");
    var numPalavras = $("#cont-palavra").text();
    var usuario = "Pedro";

    var linha = novaLinha(usuario,numPalavras);
    
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.prepend(linha);

}

function inicializaMarcadores(){

    var frase = $('.frase').text();  
    campo.on("input", function(){
  
    var digitado = campo.val();
    var comparavel = frase.substr(0,digitado.length);

    // console.log("Digitado: " + digitado);
    // console.log("Frase C.: " + comparavel);
    if(comparavel == digitado){
        campo.addClass("borda-verde");
        campo.removeClass("borda-vermelha");
        
    }else {
        campo.addClass("borda-vermelha");
        campo.removeClass("borda-verde");
    }
   

});
}


function iniciaCronometro(){

   
        campo.one("focus", function(){
       // botaoReiniciar.attr("disabled", true);
       //botao parou de funcionar com o materialize :(

        var contador = $('#tempo-digitacao').text(); // vale de 3
        
        const timer = setInterval(function(){
            contador--; 
            tempo.text(contador); // coloca o contador dentro da tag
            if(contador < 1 ){
                finalizaJogo(timer);
                inserePlacar();
                //botaoReiniciar.attr("disabled", false);  
            }

        },1000)
     

    });
}

function novaLinha(usuario, palavras){

    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone); // icone foi pra dentro do link
    colunaRemover.append(link); // link foi pr dentro da colunm remove
    linha.append(colunaUsuario); // coluna foi pra dentro de linha
    linha.append(colunaPalavras); 
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event){

        event.preventDefault();
        $(this).parent().parent().remove();

}


function reiniciaJogo(timer){
    
    finalizaJogo(timer);

        // libera o campo de texto novamente
        campo.attr("disabled", false);   
        campo.val(""); //zera o valor 

        // reseta o contador
        tempo.text(tempoInicial);

        //zera cara inserePlacar();cteres e palavras
        $("#cont-palavra").text('0');
        $('#cont-caracter').text('0');

        iniciaCronometro();

        campo.removeClass("campo-desativado");
        campo.removeClass("borda-vermelha");
        campo.removeClass("borda-verde");
}

function finalizaJogo(timer){

    campo.attr("disabled", true); //desabilita o campo
    clearInterval(timer); // trava o cronometro
    campo.addClass("campo-desativado");
    
}
