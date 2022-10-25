let obterResultado = () => {
  let veiculo = Number(document.querySelector('#veiculo').value);
  let entrada = Number(document.querySelector('#entrada').value);
  let parcela = Number(document.querySelector('#parcela').value);

  let resultado = document.querySelector('#resultado');

  let total_parcelas = (veiculo - entrada) / parcela;

  resultado.innerHTML = `Total de parcelas: ${total_parcelas.toFixed()}`;
};
