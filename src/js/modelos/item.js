class Item{
    id = 0 ;
    nome ;
    idcategoria; 
    valor; 
    imagem;
    categoria;
   
    constructor(id, nome, idcategoria, valor, imagem){
        this.id = id ?? 0;
        this.nome = nome;
        this.idcategoria = idcategoria; 
        this.valor = valor; 
        this.imagem = imagem;
        this.categoria = getCategoriaById(idcategoria).nome
    }

    render(){
        return `<div class="item">
                <div>
                     <span class='categoria'>${this.categoria}</span>
                </div>
                <figure  >
                    <img class='imagem'
                      src="${this.imagem}" 
                      alt="${this.nome}" />
                </figure>
                <div class="rodape_item">
                    <input type='hidden' name='idproduto' value="${this.id}"/>
                    <input type='hidden' name='nomeproduto' value="${this.nome}"/>
                    <input type='hidden' name='valorproduto' value="${this.valor}"/>
                    <input type='hidden' name='imagemproduto' value="${this.imagem}"/>
                    <input type='hidden' name='categoriaproduto' value="${this.idcategoria}"/>

                    <span class="nome_item">${this.nome}</span>
                    <span class="valor_item">R$ ${this.valor}</span>
                    <a href="#" class='edit-item' title = "Editar produto">
                    <img class='img-edit-item'  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO5JREFUSEvt1LtKQ0EQgOEvCnkB38FKn8VC1E4QMb2pUmqjpVZiIcQupLfUR0gVSGFAgvgUKbws7AlLCJ5rebbZZuf/Z2d3pqP5tYU7nOK20zB/G2Ps4BKvQfBTUTLHbhIbMh/iBH0cYZIJ6t4kxD9gDwO84QXHTQhS+CFG+MIZvusKNsEXuAjwUL46glx4HUEheFVBYXgVQSl4FUEv/o6D2FAf6YNu6qcyj9zFO+5jM80S+H6ET9clZQQh+0d84gZP2Vf8g15FcLavPGUE5wiz5hnLtUwbEfw3slpB7kBvS9SWKLcChQ5cJyNjFfALLWNTCRHdYZQAAAAASUVORK5CYII=">
                    </a>
                    <a href="#" class="remover-item" title='Apagar produto'>
                    <img  class='img-remover-item'  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvtls0NwjAMhb9eYAZgFGAT1kAgJMSBAz9jwCb8jQI7cIG6SqQQOUrUBg6oudW137Md168FXz5FBL8LrIEJ0PN8H8ARWALPEE6MYA9MI0nsgHldgrvJfAjcPBCxXQDxGdQleJnAUKWx97iBZ2CU6c6lsrFg/ZTAJh8tO1ClGqf19j8JZADkVBcH+M9ia9QiP1gDawmq3tupa1v00Q5tLLOPacoObDSmWQmsyMjqvqYgmy/8pImPtuy2wCwR2HfblPq8cI0aQccR+n4ikVR9KPfRyv8BiIl+In7Y7Q0KH0QZOFM6wQAAAABJRU5ErkJggg==">
                    </a>
                </div>

        </div>`
    }

    asJson(){
        const jsn = {
            "nome" : this.nome,
            "idcategoria" : this.idcategoria,
            "valor" : this.valor,
            "imagem" : this.imagem,
        }
        
        return JSON.stringify(jsn);
    }

    
}