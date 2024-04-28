let categorias = new Array();

function getTipoItem(){
    const conexao = new Conexao();
    conexao.get("tipoitens").then(resposta => {
        resposta.map(tipo => {
            const tipoItem = new TipoItem(tipo);
            categorias.push(tipoItem);

            document.getElementById("categoria").appendChild(tipoItem.render() );
        })
    })
}

function getCategoriaById(id){
    for(let categoria of categorias){
        if (categoria.id == id) return categoria;
    }
}


getTipoItem();
