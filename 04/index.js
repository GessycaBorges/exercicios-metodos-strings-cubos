//Sistema de formatação de dados do formulário
let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

//Verificar identidicador
if (identificador.length < 6){
    identificador = identificador.padStart(6, "0");
}

//Verificar nome
let escrever = "";
for (let item of nome.split(" ")) {
    escrever += item.charAt(0).toUpperCase() + item.slice(1) + " ";
}
nome = escrever.trim();

//Verificar email
email = email.trim();

console.log (identificador);
console.log (nome);
console.log (email);