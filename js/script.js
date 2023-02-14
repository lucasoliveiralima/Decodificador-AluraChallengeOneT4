const entrada = document.querySelector(".entrada");
const saida = document.querySelector(".saida");
const imagemSaida = document.getElementById("imagem-texto");

entrada.focus();
// Butão de criptografar
function btnCriptografar() {
  if (entrada.value == "") {
    alert("Digite o texto para ser criptografado!");
  } else {
    imagemSaida.style.backgroundImage = "none";
    const stringEncript = encript(entrada.value);
    saida.value = stringEncript;
    entrada.value = "";
  }
}

// Botão de copiar
function btnCopiar() {
  const textoCopiado = saida.value;
  entrada.value = textoCopiado;
  saida.value = "";
}

// botão de descriptografar
function btnDescriptografar() {
  const stringDescript = descript(entrada.value);
  saida.value = stringDescript;
  entrada.value = "";
  entrada.focus();
}

// função de criptografar o texto
function encript(textoEncriptado) {
  const mapa = new Map([
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ]);

  textoEncriptado = textoEncriptado.toLowerCase();

  for (const [key, value] of mapa) {
    if (textoEncriptado.includes(key)) {
      textoEncriptado = textoEncriptado.replace(key, value);
    }
  }

  return textoEncriptado;
}

// função de descriptografar o texto
function descript(textoDescriptografado) {
  const mapa = new Map([
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ]);

  textoDescriptografado = textoDescriptografado.toLowerCase();

  for (const [key, value] of mapa) {
    if (textoDescriptografado.includes(key)) {
      textoDescriptografado = textoDescriptografado.replace(key, value);
    }
  }

  return textoDescriptografado;
}
