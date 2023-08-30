var idade= 13
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Não vota!')
} else if(idade < 18 || idade > 65){ 
    console.log ('Voto opcional')
}else {
    console.log('Voto obrigatório!') //Se a idade não é menor do que 18, obviamente ela é maior ou igual a 18 então não precisa escrver (idade >=18)
   }
//Aqui a gente não usa document.wrte pq não estamos dentro do navegador, portanto usa-se console.log 

//Prestar atenção se o código tem erro sintatico ou de logica, pois pode não ter um e ter outro