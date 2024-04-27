function getTipoItem(){
    const conexao = new Conexao();
    conexao.get("tipoitens").then(resposta => {
        resposta.map(tipo => {
            const tipoItem = new TipoItem(tipo)
            document.getElementById("categoria").appendChild(tipoItem.render() );
        })
    })
}


getTipoItem();
