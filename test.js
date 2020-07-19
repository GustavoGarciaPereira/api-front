//document.getElementById('item').addEventListener('blur', (event) => {
//    busca()
//})
//
//document.getElementById('item').addEventListener('keypress', (e) => {
//    if (e.which == 13) {
//        busca()
//    }
//}, false)



function busca() {
    $.ajax({
        //url: `https://primeira-api-django.herokuapp.com/programador/`,
        url: `https://primeira-api-django.herokuapp.com/programador/programadores/?nome=${document.getElementById("nome").value}&?liguagem_atualmente=${document.getElementById("linguagem").value}`,

        success: function(result) {
            limpar_tela()
            result.map(function(dados) {
                mostrar_dados_tela(dados)
            });

        },
        error: function(result) {
            console.log("<>", result);
        }
    })
}


//// tabela no html

function mostrar_dados_tela(dados) {

    document.getElementById("dados").innerHTML +=
        `
        <tr>
            <td>${dados.nome}</td>
            <td>${dados.data_nascimento}</td>
            <td>${dados.liguagem_atualmente}</td>            
        </tr>
        `
}

function limpar_tela() {
    document.getElementById("dados").innerHTML = ''
}