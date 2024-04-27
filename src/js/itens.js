function getItens(){
    const conexao = new Conexao();
    conexao.get("itens").then(resposta => {
        resposta.map(item => {
            const produto = new Item(item);
            document.getElementById('card').innerHTML +=  (produto.render())
        })
    })
}


getItens();