//Gerador de Nickname
const nome = 'Guido Cerqueira';
function nickname (texto) {
    while (texto.includes (" ")){
        texto = texto.replace(" ", "");
    }
    texto = "@" + (texto.slice(0, 12)).toLowerCase();
    console.log (texto);
}
nickname (nome);