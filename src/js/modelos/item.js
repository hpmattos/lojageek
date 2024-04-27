class Item{
    id ;
    nome ;
    idcategoria; 
    valor; 
    imagem;
    constructor(item){
        this.id = item.id;
        this.nome = item.nome;
        this.idcategoria = item.idcategoria; 
        this.valor = item.valor; 
        this.imagem = item.imagem;
    }

    render(){
        return `<div class="item">
                <figure  >
                    <img class='imagem'
                      src="${this.imagem}" 
                      alt="${this.nome}" />
                </figure>
                <div class="rodape_item">
                    <span class="nome_item">${this.nome}</span>
                    <span class="valor_item">R$ ${this.valor}</span>
                    <a href="#" class="remover-item">
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvtls0NwjAMhb9eYAZgFGAT1kAgJMSBAz9jwCb8jQI7cIG6SqQQOUrUBg6oudW137Md168FXz5FBL8LrIEJ0PN8H8ARWALPEE6MYA9MI0nsgHldgrvJfAjcPBCxXQDxGdQleJnAUKWx97iBZ2CU6c6lsrFg/ZTAJh8tO1ClGqf19j8JZADkVBcH+M9ia9QiP1gDawmq3tupa1v00Q5tLLOPacoObDSmWQmsyMjqvqYgmy/8pImPtuy2wCwR2HfblPq8cI0aQccR+n4ikVR9KPfRyv8BiIl+In7Y7Q0KH0QZOFM6wQAAAABJRU5ErkJggg==">
                    </a>
                </div>

        </div>`
    }
}