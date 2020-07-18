function add(){
    adicionar()
}

document.getElementById('item').addEventListener('blur',(event)=>{
    adicionar()
})

document.getElementById('item').addEventListener('keypress',(e)=>{
    if(e.which == 13){
        adicionar()
    }
},false)

//function adicionar(){
//    const novo_item = document.getElementById("item").value
//    if (novo_item != '' && novo_item.length >= 3){
//        document.getElementById("lista").innerHTML += `<li>${novo_item}</li>`
//        document.getElementById("item").value = ''
//    }
//}

function busca(){
    //console.log("busca",novo_item)
    //console.log(document.getElementById("item"))


    $.ajax({
        url: `https://primeira-api-django.herokuapp.com/programador/`,
        //url:`http://127.0.0.1:8000/programador/`,

        success: function(result){
            limpar_tela()
            result.map(function(dados){
                mostrar_dados_tela(dados)
            });
        
        },
        error: function(result){
            console.log("<>",result);
        }
    })
}


//// tabela no html

function mostrar_dados_tela(dados){

        document.getElementById("dados").innerHTML += 
        `
        <tr>
            <td>${dados.nome}</td>
            <td>${dados.data_nascimento}</td>
            <td>${dados.liguagem_atualmente}</td>


            
        </tr>
        `
}

function limpar_tela(){
    document.getElementById("dados").innerHTML = ''
}

//detalhes
//http://www.omdbapi.com/?i=tt0211915&apikey=6b325277