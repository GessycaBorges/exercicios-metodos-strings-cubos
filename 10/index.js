//Validação de arquivos
const nomeArquivo = 'Foto da Familia.pdf';
//const nomeArquivo = 'Foto da Familia.png';
function validacao (texto) {
    if (texto.slice (-4) === ".jpg" || texto.slice (-5) === ".jpeg" || texto.slice (-4) === ".gif" || texto.slice (-4) === ".png"){
        console.log ("Arquivo válido");
    } else {
        console.log ("Arquivo inválido");
    }
}
validacao (nomeArquivo);