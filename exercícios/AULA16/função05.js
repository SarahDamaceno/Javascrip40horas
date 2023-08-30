//Recursividade (conceito mais avançado)

function fatorial(n){
    if (n==1){
        return 1
    }else{
        return n* fatorial(n-1)
    }

}
console.log(fatorial(5))


/*Posso também fazer  fatorial de maneira recursiva. recursão acontece quando uma função chama ela mesma. ex na função 05.js
   5 fatorial é basicamente o 4 fatorial. isto é, o fat de um numero pode ser calculado baseado no de outro
    5! = 5 X 4 X 3 X 2 X 1= 120
    5!= 5 X 4!

    n1! = n x (n-1)!
    1! = 1

*/