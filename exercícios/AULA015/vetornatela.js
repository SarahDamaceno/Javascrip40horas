let valores= [8, 1, 7, 4, 2, 9]
console.log(valores)

for(let pos in valores){
    console.log(`A posição ${pos} tem o ${valores[pos]}`)
}

//3 a maneira mais simplificada ainda 


/*
maneira mais trabalhosa e menos inteligente 1
console.log (valores[0])
console.log (valores[1])
console.log (valores[2])
.
.
jeito 2 de fazer um pouco+ simplificado
for( let pos= 0 ; pos< valores.length;  pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 

lemmbrando q esse é o código tradicional de percurso para exibição do vetor:
    for(let pos=0; pos<num.length ; pos++){
        console.log(num[pos])
    }

vou usar o 

   for ( let pos  in  num ){
      console.log( num[pos])
   }

   a primeira coisa que vamos colocar é o indice, e do lado o nome da ver comp. lÊ-se: Para cada posição dentro de num eu vou mostrar o num pos. Essa sintaxe do for so funciona pra arrays e onjetos
*/