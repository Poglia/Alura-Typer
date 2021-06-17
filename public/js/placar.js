function inserePlacar(){

    var corpoTabela = $(".placar").find("tbody");
    var numPalavras = $("#cont-palavra").text();
    var usuario = "Pedro";

    var linha = novaLinha(usuario,numPalavras);
    
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.prepend(linha);

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