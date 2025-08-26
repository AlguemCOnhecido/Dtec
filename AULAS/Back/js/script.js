const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML += numero;
texto.innerHTML += `<p><strong>A raís é:</strong> ${Math.sqrt(numero)}</p>`
texto.innerHTML += `<p><strong>Se o numero é inteiro: ${Math.round(numero)}</strong></p>`
texto.innerHTML += `<p><strong>Se o numero é NaN(Valor invalido)</strong> ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p><strong>Arredondar para baixo<strong> ${Math.floor(numero)}</p>`
texto.innerHTML += `<p><strong>Arredondar para cima<strong> ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p><strong>Formatar duas casas decimais<strong> ${(numero.toFixed(2))}</p>`