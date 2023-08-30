function soma(n1,n2){
    return n1+n2

}


console.log(soma(2,5))

/*
   Se nesse ex não fosse colocado dois parametros e ficasse assim: 
    
     console.log(soma(2))
     o n2 ficaria como undefined 
     mas posso resolver isso

     se eu por acaso não passar o n1 eu quero que ele considere 0 n1=0 e assim tbm o n2

     ex:
        function soma(n1=0,n2=0){
        return n1+n2

}


       console.log(soma(7))
       e o resultado sera 7

*/ 


