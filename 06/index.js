//Formatar número de celular
const celular = 7199918888;
//const celular = 99918888;

function formataCelular (numero){
    let numeroString = String(numero);
    let numeroFormatado = "";
    if (numeroString.length === 8 || numeroString.length === 9){
        if (numeroString.length === 8){
            numeroString = "9" + numeroString;
        }
        numeroFormatado = `${numeroString.slice(0, 1)} `;
    }
    if (numeroString.length === 10 || numeroString.length === 11){
        if (numeroString.length === 10){
            numeroString = numeroString.slice(0, 2) + "9" +numeroString.slice(2);
        }
        numeroFormatado = `(${numeroString.slice(0, 2)}) ${numeroString.slice(2, 3)} `;
    }
    finalDoNumero = `${numeroString.slice(-8, -4)}-${numeroString.slice(-4)}`;
    console.log (numeroFormatado + finalDoNumero);
}
formataCelular (celular);