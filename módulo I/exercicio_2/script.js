let obterMedia = () => {
  const TOTAL_INPUTS = 3;

  let a = Number(document.querySelector('#a').value);
  let b = Number(document.querySelector('#b').value);
  let c = Number(document.querySelector('#c').value);

  let result = document.querySelector('#resultado');

  let media = (a + b + c) / TOTAL_INPUTS;

  result.innerHTML = `Média: ${media.toFixed(2)}`;
};
