1. Resolva as operações: 
- 10 + 15 = 25
- “10” + 2 = "102"
- “10” * 2 = 20
- “10” / 3 = 3.3
- “10” % 3 = 1
- 10 + true = 11
- 10 == ”10” = true
- 10 === “10” = false
- 10 < 11 = true
- 10 > 12 = false
- 10 <= 10.1 = true
- 10 > 9.99 = true
- 10 != “dez” = true
- 10 + true = 11
- “dez” + true = "deztrue"
- 10 + false = 10
- 10 * false = 0
- true + true = 2
- 10++ = 11
- 10-- = 9
- 1 & 1 = 1
- 1 & 0 = 0
- 0 & 0 = 0
- 1 & 0 = 0
- 0 / 1 = 0
- 5 + 5 == 10 = true
- “5” + ”5” == 10 = false
- “5” * 2 > 9 = true
- (10 + 10) * 2 = 40
- 10 + 10 * 2 = 30
---
2. Responda as perguntas de acordo com as variáveis. 
var branco = “preto”;

var preto = “cinza”;

var cinza = “branco”;

var carro = “preto”;

var valor = 30000;

var prestacao = 750;


a) branco == “branco” | **falso**

b) branco == cinza | **falso**

c) carro === branco | **verdadeiro**

d) var cavalo = carro == “preto” ? “cinza” : “marron”; **"cinza"**


e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação. 

```javascript
var valor = 30000; 
var prestacao = 750;
var entrada = 3000;
var numeroParcelas = (valor - entrada) / prestacao 
console.log(numeroParcelas) 
// 36
```

f) Somando as variáveis de cores é formada uma string de quantos caracteres?

```javascript
console.log((branco + preto + cinza).length)
// 16
```
