let moedaOrigem = 'BRL';
let moedaDestino = 'USD';
let valorDinheiro = 500; 

let valorConvertido;

let taxaCambioBRLtoUSD = 0.1875;

  let taxaCambioBRLtoEUR = 0.1520;
  let taxaCambioUSDtoBRL = 5.3333;
  let taxaCambioEURtoBRL = 6.5789;

if (moedaOrigem === 'BRL' && moedaDestino === 'USD') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoUSD;
  } else if (moedaOrigem === 'BRL' && moedaDestino === 'EUR') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoEUR;
  } else if (moedaOrigem ==='USD' && moedaDestino === 'BRL' ) {
    valorConvertido = valorDinheiro * taxaCambioUSDtoBRL;
  } else if (moedaOrigem === 'EUR' && moedaDestino === 'BRL') {
    valorConvertido = valorDinheiro * taxaCambioEURtoBRL;
  } 
  console.log(`${valorDinheiro} ${moedaOrigem} equivalem a ${valorConvertido.toFixed(2)} ${moedaDestino}.`);
