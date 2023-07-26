//recuperar o tbody para passar as informações dentro dele no fim do script
const tbody = document.querySelector('tbody');

// escutar quando o evento submit for disparado, criar uma função para cancelar o evento
// e escrever na tabela.
document.querySelector('form').addEventListener('submit', function(e){

    // cancelar o evento 
    e.preventDefault();

    //recuperar os campos do formulário e armazenar em um array
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    // console.log(campos);
    // criar uma tr que receberá as colunas contendo os dados digitados
    const tr = document.createElement('tr');

    // forEach para percorrer o array campos    
    campos.forEach( campo => {
        // criar uma td
        const td = document.createElement('td');

        // colocar na td o conteúdo digitado
        td.textContent = campo.value;

        //colocar a td na tr
        tr.appendChild(td);
    });

    // colocar a tr no tbody - ASSIM IRÁ APARECER NA PÁGINA
    tbody.appendChild(tr);

    //limpar os campos do formulário
    this.reset();
});