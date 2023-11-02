document.addEventListener("DOMContentLoaded", function() {
  
const qtdImoveisInput = document.getElementById("qtdImoveis");
const qtdVeiculosInput = document.getElementById("qtdVeiculos");
const imoveisRendaInput = document.getElementById("imoveisRenda");
const veiculosRendaInput = document.getElementById("veiculosRenda");
const outrosRendaInput = document.getElementById("outrosRenda");
const imoveisMercadoInput = document.getElementById("imoveisMercado");
const veiculosMercadoInput = document.getElementById("veiculosMercado");
const outrosMercadoInput = document.getElementById("outrosMercado");
const impRendaInput = document.getElementById("impRenda");
const escrituraInput = document.getElementById("escritura");
const mercadoInput = document.getElementById("mercado");
const itbiPrefInput = document.getElementById("itbiPref");
const itbiMuniInput = document.getElementById("itbiMuni");
const valorVendaInput = document.getElementById("valorVenda");
const itbiVendidoInput = document.getElementById("itbiVendido");
const quotaHoldingInput = document.getElementById("quotaHolding"); // Talvez seja 0
const aluguelAnualInput = document.getElementById("aluguelAnual");
const somaResultado1 = document.getElementById("soma1");
const somaResultado2 = document.getElementById("soma2");
const venderPessoal = document.getElementById("calculoCpf");
const venderHolding = document.getElementById("calculoHolding");
const quotaVenda = document.getElementById("calculoQuota");
const quotaEconomia = document.getElementById("ecoQuota");
const vendaEconomia = document.getElementById("economiaVenda");
const cpfInventario = document.getElementById("cpfInventario");
const holdingInventario = document.getElementById("holdingInventario");
const economiaInventario = document.getElementById("economiaInventario");
const aluguelAno = document.getElementById("calculoAluguel");
const aluguelAnoHolding = document.getElementById(
  "calculoAluguelHolding"
);
const aluguelEconomia = document.getElementById("economiaAluguel");
const itbiRecuperado = document.getElementById("recuperaItbi");
const nossosHonorariosA = document.getElementById("honorarioA");
const nossosHonorariosB = document.getElementById("honorarioB");

// CALCULOS

function calcular() {
  // valor no imposto de renda
  const imoveisRenda = parseInt(imoveisRendaInput.value);
  const veiculosRenda = parseInt(veiculosRendaInput.value);
  const outrosRenda = parseInt(outrosRendaInput.value);
  // valor de mercado
  const imoveisMercado = parseInt(imoveisMercadoInput.value);
  const veiculosMercado = parseInt(veiculosMercadoInput.value);
  const outrosMercado = parseInt(outrosMercadoInput.value);
  // Outros
  const qtdImoveis = parseInt(qtdImoveisInput.value);
  const qtdVeiculos = parseInt(qtdVeiculosInput.value);

  const impRenda = parseInt(impRendaInput.value);
  const escritura = parseInt(escrituraInput.value);
  const mercado = parseInt(mercadoInput.value);
  const itbiPref = parseInt(itbiPrefInput.value);
  const itbiMuni = parseInt(itbiMuniInput.value);
  const valorVenda = parseInt(valorVendaInput.value);
  const itbiVendido = parseInt(itbiVendidoInput.value);
  // const quotaHolding = parseInt(quotaHoldingInput.value);
  const aluguelAnual = parseInt(aluguelAnualInput.value);

  // FORMULAS DOS CALCULOS

  const somaImposto = imoveisRenda + veiculosRenda + outrosRenda;
  const somaMercado = imoveisMercado + veiculosMercado + outrosMercado;
  const valorPessoal = (escritura - impRenda) * 0.15;
  const valorHolding = impRenda * 0.0673;
  const vendaQuota = valorPessoal;
  const economiaQuota = vendaQuota;
  const economiaVenda = valorPessoal - valorHolding;
  const inventarioPessoal = somaMercado * 0.145;
  const inventarioHolding = imoveisRenda * 0.02 + 1000;
  const inventarioEconomia = inventarioPessoal - inventarioHolding;
  const valorAluguelAnual = aluguelAnual * 0.275;
  const valorAluguelHolding = aluguelAnual * 0.1133;
  const economiaAluguel = valorAluguelAnual - valorAluguelHolding;
  const recuperacaoItbi =
    itbiPref + (itbiVendido - (valorVenda * itbiMuni) / 100);
  const honorariosA =
    (qtdImoveis * 1200 +
      imoveisRenda * 0.005 +
      veiculosRenda * 0.002 +
      outrosRenda * 0.002 +
      qtdVeiculos * 200 +
      6000) *
    1.15 *
    1.2;
  const honorariosB = recuperacaoItbi * 0.3;

  // EXIBIR OS CALCULOS

  somaResultado1.textContent = somaImposto;
  somaResultado2.textContent = somaMercado;
  venderPessoal.textContent = parseInt(valorPessoal);
  venderHolding.textContent = parseInt(valorHolding);
  quotaVenda.textContent = parseInt(vendaQuota);
  vendaEconomia.textContent = parseFloat(economiaVenda).toFixed(1);
  cpfInventario.textContent = parseInt(inventarioPessoal);
  holdingInventario.textContent = parseInt(inventarioHolding);
  economiaInventario.textContent = parseInt(inventarioEconomia);
  aluguelAno.textContent = parseInt(valorAluguelAnual);
  aluguelAnoHolding.textContent = parseInt(valorAluguelHolding);
  aluguelEconomia.textContent = parseInt(economiaAluguel);
  itbiRecuperado.textContent = parseInt(recuperacaoItbi);
  nossosHonorariosA.textContent = parseInt(honorariosA);
  nossosHonorariosB.textContent = parseInt(honorariosB);
  quotaEconomia.textContent = parseInt(economiaQuota);
}

// retornar strings


  // Seu código aqui
  


imoveisRendaInput.addEventListener("input", calcular);
veiculosRendaInput.addEventListener("input", calcular);
outrosRendaInput.addEventListener("input", calcular);
imoveisMercadoInput.addEventListener("input", calcular);
veiculosMercadoInput.addEventListener("input", calcular);
outrosMercadoInput.addEventListener("input", calcular);
qtdImoveisInput.addEventListener("input", calcular);
qtdVeiculosInput.addEventListener("input", calcular);
impRendaInput.addEventListener("input", calcular);
escrituraInput.addEventListener("input", calcular);
mercadoInput.addEventListener("input", calcular);
itbiPrefInput.addEventListener("input", calcular);
itbiMuniInput.addEventListener("input", calcular);
valorVendaInput.addEventListener("input", calcular);
itbiVendidoInput.addEventListener("input", calcular);
// quotaHoldingInput.addEventListener("input", calcular);
aluguelAnual.addEventListener("input", calcular);
});