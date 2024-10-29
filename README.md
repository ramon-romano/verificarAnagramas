# Função para Verificar Anagramas em JavaScript

Este projeto contém uma função em JavaScript que verifica se duas palavras são anagramas. Um anagrama é formado quando as letras de uma palavra podem ser reorganizadas para formar outra palavra.

## Como funciona

A função `verificarAnagramas(palavra1, palavra2)` recebe duas strings como argumentos e retorna `true` se elas forem anagramas ou `false` caso contrário. Para isso, a função realiza os seguintes passos:

1. Divide cada palavra em um array de caracteres.
2. Ordena os caracteres em ordem alfabética.
3. Junta os caracteres de volta em uma string.
4. Compara as duas strings ordenadas; se forem iguais, as palavras são anagramas.

### Exemplo

```javascript
function verificarAnagramas(palavra1, palavra2) {
    let p1 = palavra1.split('').sort().join('');
    let p2 = palavra2.split('').sort().join('');
  
    return p1 === p2;
}

console.log(verificarAnagramas("amor", "roma"));   // true
console.log(verificarAnagramas("amor", "rama"));   // false
console.log(verificarAnagramas("tabela", "alebat")); // true
