//Remover pontuação
const cpf = "011.022.033-44";
const cnpj = "12.345.678/0001-99";

function removerPontuacao (texto){
    let novoTexto = texto;
    while (novoTexto.includes (".") || novoTexto.includes ("-") || novoTexto.includes ("/")){
        novoTexto = novoTexto.replace(".", "");
        novoTexto = novoTexto.replace("-", "");
        novoTexto = novoTexto.replace("/", "");
    }
    console.log (novoTexto);
}
removerPontuacao (cpf);
removerPontuacao (cnpj);