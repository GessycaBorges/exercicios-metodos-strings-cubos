//URL amigável
const texto = "Aprenda programar do zero na Cubos Academy";

function alterarTexto (original, text, newText){
    let textoAmigavel = original.toLowerCase();
    while (textoAmigavel.includes(text)) {
        textoAmigavel = textoAmigavel.replace(text, newText);
    }
    console.log (textoAmigavel);
}

alterarTexto (texto, " ", "-");