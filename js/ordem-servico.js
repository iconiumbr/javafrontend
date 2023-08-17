var urlBase = "http://localhost:8080/";
var urlEquipamentos = urlBase + "equipamentos";

function load() {
    listarTipos();
}

function listarTipos() {
    var requisicao = {
        method: "GET"
    };
    fetch(urlEquipamentos + "/tipos", requisicao)
        .then(res=> res.json())
        .then(res=> montarTipos(res))
        .catch(error=> alert("falha requisicao"));
}

function montarTipos(res) {
    var options = `<option>Selecione</option>`;
    for(i=0; i < res.length; i++) {

        var e = res[i];
        options += `<option value="${e}">${e}</option>`
    }
    document.getElementById("tipo").innerHTML = options;


}


function listarOrdensServico() {

}