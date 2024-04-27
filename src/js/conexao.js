class Conexao{
  URL = "http://localhost:3000";

  async processa(verbo, servico, body){
        var myHeaders = new Headers();
        var myInit = {
            method: verbo,
            headers: myHeaders,
            mode: "cors",
            cache: "default",
            body: body
          };
        return fetch(this.URL+"/"+servico,myInit)
           .then(resposta => {
              if (resposta.ok){
                return resposta.json();
              }
              console.log(resposta);
              alert("Algo estranho aconteceu ao fazer a requisição");
           })
           .catch(error => {
                console.log(error.text());
                alert("Ocorreu um erro ao processar requisição");
            })
    }

    async get(servico){
        return this.processa("GET",servico, null);
    }
    async post(servico, body){
        return this.processa("POST",servico, body);
    }

    async put(servico, body){
        return this.processa("PUT",servico, body);
    }

    async del(servico){
        return this.processa("DELETE",servico, null);
    }

}