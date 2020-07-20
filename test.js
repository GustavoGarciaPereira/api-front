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
    console.log(document.getElementById("nome").value)
    console.log(document.getElementById("linguagem").value)
    $.ajax({
        //url: `https://primeira-api-django.herokuapp.com/programador/`,
        url: `https://primeira-api-django.herokuapp.com/programador/programadores/?nome=${document.getElementById("nome").value}&liguagem_atualmente=${document.getElementById("linguagem").value}`,

        //url: `http://127.0.0.1:8000/programador/programadores/?nome=${document.getElementById("nome").value}&liguagem_atualmente=${document.getElementById("linguagem").value}`,
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