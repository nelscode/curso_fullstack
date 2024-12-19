// capturando elementos
const container = document.querySelector(".container");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const buttonSubmit = document.querySelector("#buttonSubmit");

// função do calculo IMC
const calculoIMC = (peso, altura) => {
  return peso / altura ** 2;
};

// Função para exibir o resultado
const exibirResultado = (texto, resultadoCalculo, grau) => {
  resultado.textContent = `${texto} ${resultadoCalculo.toFixed(2)} ${grau}`;
};

// Evento de click
buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  // Capturando valores dos Inputs
  const inputPesoValue = inputPeso.value;
  const inputAlturaValue = inputAltura.value;

  // Convertendo valores dos Inputs
  const pesoNumber = Number(inputPesoValue);
  const alturaNumber = Number(inputAlturaValue);

  // Verificações/Tratamentos
  if (isNaN(pesoNumber) || isNaN(alturaNumber)) {
    alert("Digite apenas números!");
    return;
  }

  // Calculando o IMC
  const resultadoCalculo = calculoIMC(pesoNumber, alturaNumber);

  // Capturando elemento de resultado
  let resultado = document.getElementById("resultado");

  // Verificando se o elemento de resultado não existe, se isso for true, criaremos um
  if (!resultado) {
    resultado = document.createElement("p");
    resultado.id = "resultado";
    container.appendChild(resultado); // Adiciona o elemento ao container
  }

  // Condicionais e exibição
  if (resultadoCalculo < 18.5) {
    exibirResultado("Seu IMC é:", resultadoCalculo, "(Magreza)");
  } else if (resultadoCalculo >= 18.5 && resultadoCalculo <= 24.9) {
    exibirResultado("Seu IMC é:", resultadoCalculo, "(Normal)");
  } else if (resultadoCalculo >= 25.0 && resultadoCalculo <= 29.9) {
    exibirResultado("Seu IMC é:", resultadoCalculo, "(Sobrepeso)");
  } else if (resultadoCalculo >= 30.0 && resultadoCalculo <= 39.9) {
    exibirResultado("Seu IMC é:", resultadoCalculo, "(Obesidade)");
  } else if (resultadoCalculo > 40.0) {
    exibirResultado("Seu IMC é:", resultadoCalculo, "(Obesidade Grave)"); // Chamando função de exibição
  } else if (isNaN(resultadoCalculo)) {
    alert("Preencha os campos!");
  }
});
