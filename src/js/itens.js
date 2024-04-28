const conexao = new Conexao();

function addItemCard(produto){
    document.getElementById('card').innerHTML +=  (produto.render())
}


function podeExibirProduto(item){
    const nomeProduto = document.getElementById('pesquisaproduto').value;
    const categoria = document.getElementById('filtro_categoria').value;
    if (nomeProduto == "" && categoria == -1) return true;

    let pode = true;
    if (categoria != -1 && categoria != item.idcategoria){
        pode = false;
    }

    if (nomeProduto != ""  && pode  ){
        pode =  item.nome.toUpperCase().indexOf(nomeProduto.toUpperCase()) >= 0;
    }
    return pode;

}

async function getItens(){  
   
    conexao.get("itens?_sort=idcategoria").then(resposta => {
        resposta.map(item => {
            if ( podeExibirProduto( item )   ){
                    const produto = new Item(item.id, item.nome, item.idcategoria, item.valor, item.imagem);
                    addItemCard(produto)
                }
           
        })
    })
}

function atualizaItem(id, dadoAtualizado){
    const card = document.querySelector("input[name='idproduto'][value='"+id+"']").parentElement;
        
    card.querySelector("input[name='nomeproduto']").value = dadoAtualizado.nome;
    card.querySelector("input[name='valorproduto']").value = dadoAtualizado.valor;
    card.querySelector("input[name='imagemproduto']").value = dadoAtualizado.imagem;
    card.querySelector("input[name='categoriaproduto']").value = dadoAtualizado.idcategoria;
    
    card.querySelector(".nome_item").innerText = dadoAtualizado.nome;
    card.querySelector(".valor_item").innerText ="R$ "+ dadoAtualizado.valor;
    card.parentElement.querySelector("figure").querySelector(".imagem").src = dadoAtualizado.imagem;
}

async function gravar(){
    if (! confirm("Deseja realmente gravar esse produto?") ) return false;

    const inputs = document.querySelectorAll("input");
    for(let input of inputs){
        if (input.name == "id") continue;

        if (input.value == ""){
            alert("Preencha todos os campos");
            input.focus();
            return false;
        }
    }
    if (document.querySelector("#categoria").value == -1){
        alert("Informe a categoria");
        return false;
    }

    const id = document.querySelector("input[name='id']").value;
    const nome = document.querySelector("input[name='nome']").value;
    const valor = document.querySelector("input[name='valor']").value;
    const imagem = document.querySelector("input[name='imagem']").value;;
    const idcategoria = document.querySelector("#categoria").value;

    const item = new Item(id,nome, idcategoria, valor,imagem);
    if (item.id != "" || item.id > 0){
        const resposta =  await conexao.put("itens/"+item.id,item.asJson());
    if (resposta == null) return false;
       atualizaItem(item.id, resposta);
       alert("Produto alterado com sucesso");
       limpar();
       return true;
    }else{
        const resposta =  await conexao.post("itens",item.asJson());
        if (resposta == null) return false;

        alert("Produto criado com sucesso!");
        const produto = new Item(resposta.id, resposta.nome, 
                                resposta .idcategoria, resposta.valor, 
                                resposta.imagem);
        addItemCard(produto);
        limpar();
        return true;
    }   
   
    
}

function editar(e){
    const id = e.parentElement.querySelector("input[name='idproduto']").value;
    const nome = e.parentElement.querySelector("input[name='nomeproduto']").value;
    const valor = e.parentElement.querySelector("input[name='valorproduto']").value;
    const imagem = e.parentElement.querySelector("input[name='imagemproduto']").value;
    const idcategoria = e.parentElement.querySelector("input[name='categoriaproduto']").value;

    document.querySelector("input[name='id']").value = id;
    document.querySelector("input[name='nome']").value = nome;
    document.querySelector("input[name='valor']").value = valor;
    document.querySelector("input[name='imagem']").value = imagem;
    document.querySelector("#categoria").value = idcategoria;
    document.querySelector("input[name='nome']").focus();
    document.getElementById("tituloform").innerHTML = 'Alterar produto';

}

function limpar(){
    const inputs = document.querySelector("form").querySelectorAll("input");
    for(let input of inputs){
        input.value = "";
    }

    document.querySelector("#categoria").value = -1;
    document.getElementById("tituloform").innerHTML = 'Adicionar um produto';
}

async function apagaProduto(e){
    if (! confirm("Deseja realmente apagar esse produto?")) return false;

    const id = e.parentElement.querySelector("input[name='idproduto']").value;
    const resposta = await conexao.del("itens/"+id);
    if(resposta == null){
        alert("Ocorreu um erro");
        return false;
    }
    e.parentElement.querySelector("input[name='idproduto']").parentElement.parentElement.remove();
    alert("Produto removido");
}


getItens();

document.getElementById("gravar").onclick = gravar;
document.getElementById("limpar").onclick = limpar;
document.addEventListener("click",function(event){
    const classes = event.target.classList;
    for(let classe of classes){
        if (classe == 'img-edit-item'){
            editar(event.target.parentElement);
        }
        if (classe == 'img-remover-item' ){
            apagaProduto(event.target.parentElement);
        }
        
    }
})

document.getElementById('pesquisaproduto').onchange = (event) =>{
    document.getElementById('card').innerHTML = '';
    getItens();
} 

document.getElementById('filtro_categoria').onchange = (event) =>{
    document.getElementById('card').innerHTML = '';
    getItens();
} 