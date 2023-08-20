//Sistema para formatar números
const cpf = "12345678900";
//const cpf = "12309";
const cnpj = "12345678000199";
//const cnpj = "12345678900";

function validarCPF (numero) {
    if (numero.length === 11){
        console.log (`${numero.slice(0, 3)}.${numero.slice(3, 6)}.${numero.slice(6, 9)}-${numero.slice(9)}`);
    } else {
        console.log ("CPF Inválido");
    }
}

function validarCNPJ (numero) {
    if (numero.length === 14){
        console.log (`${numero.slice(0, 2)}.${numero.slice(2, 5)}.${numero.slice(5, 8)}/${numero.slice(8, 12)}-${numero.slice(12)}`);
    } else {
        console.log ("CNPJ Inválido");
    }
}

validarCPF (cpf);
validarCNPJ (cnpj);