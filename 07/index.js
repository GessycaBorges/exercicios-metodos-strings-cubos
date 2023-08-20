// Validação de e-mail
const email = "aluno@cubos.academy";

function validarEmail (texto) {
    if (texto.includes("@") && texto.includes(".") && texto.lastIndexOf (".", 0) === (-1) && texto.lastIndexOf(".", (texto.length - 1)) !== (texto.length - 1)) {
        console.log ("E-mail válido");
    } else {
        console.log ("E-mail inválido");
    }
}
validarEmail (email);