//Sistema de filtro de comentários
const comentario = "Esse COVID é muito perigoso!";
//const comentario = "Pandemia de corona vírus";
//const comentario = "Vírus perigoso";

const palavra = ["Pandemia", "Covid"];
let palavrasProibidas = [];

for (let item of palavra) {
    palavrasProibidas.push(item);
    palavrasProibidas.push(item.toUpperCase());
    palavrasProibidas.push(item.toLowerCase());
}

function verificarComentario (text, palavra){
    for (let item of palavra){
        if (text.includes(item)){
            console.log ("Comentário bloqueado por conter palavras proibidas");
            return;
        }
    }
    console.log ("Comentário autorizado");
}

verificarComentario (comentario, palavrasProibidas);