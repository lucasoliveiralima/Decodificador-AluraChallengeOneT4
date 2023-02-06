const entrada = document.querySelector(".entrada");
const saida = document.querySelector(".saida");
const imagemTexto = document.getElementById("#imagem");

entrada.focus();

// Butão de criptografar
function btnCriptografar() {
  const stringEncript = encript(entrada.value);
  saida.value = stringEncript;
  entrada.value = "";
}

// Botão de copiar


// função de criptografar o texto
function encript(textoEncriptado) {
  let arrayDeString = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  textoEncriptado = textoEncriptado.toLowerCase();

  for (let i = 0; i < arrayDeString.length; i++) {
    if (textoEncriptado.includes(arrayDeString[i][0])) {
      textoEncriptado = textoEncriptado.replaceAll(arrayDeString[i][0], arrayDeString[i][1]);
    }
  }

  return textoEncriptado;
}

// botão de descriptografar
function btnDescriptografar() {
  const stringDescript = descript(entrada.value);
  saida.value = stringDescript;
  entrada.value = "";
  entrada.focus();
}

// função de descriptografar o texto
function descript(textoDescriptografado) {
  let arrayDeString = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  textoDescriptografado = textoDescriptografado.toLowerCase();

  for (let i = 0; i < arrayDeString.length; i++) {
    if (textoDescriptografado.includes(arrayDeString[i][1])) {
      textoDescriptografado = textoDescriptografado.replaceAll(arrayDeString[i][1], arrayDeString[i][0]);
    }
  }

  return textoDescriptografado;
}
