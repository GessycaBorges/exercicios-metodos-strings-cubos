//Esconder número do cartão de crédito
const numeroCartao = '1111222233334444';

const primeirosDigitos = numeroCartao.slice (0, 4);
const ultimosDigitos = (numeroCartao.slice (-4)).padStart(12, "*");

console.log (primeirosDigitos + ultimosDigitos);