function verificarAnagramas(palavra1, palavra2) {
    let p1 = palavra1.split('').sort().join('');
    let p2 = palavra2.split('').sort().join('');
  
    return p1 === p2;
  }
  
  console.log(verificarAnagramas("amor", "roma"));  
  console.log(verificarAnagramas("amor", "rama"));  
  console.log(verificarAnagramas("tabela", "alebat"));
  