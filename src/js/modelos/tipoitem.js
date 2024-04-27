class TipoItem{
    id;
    nome;
    constructor(tipoitem){
        this.id = tipoitem.id;
        this.nome = tipoitem.nome;
        
    }

    render(){
        const opt = document.createElement("option");
        opt.value = this.id;
        opt.text = this.nome;
        return opt;
    }
}