function tabuada(){
    var num= window.document.getElementById('txtn')
    var tab= window.document.getElementById('seltab')
 
    if(num.value.length==0){ //se deixar vazio
        window.alert('por favor,digite um número!')
    }else{
       var n= Number(num.value)
       var c= 1
       tab.innerHTML= '' //PRA LIMPAR ANTES DE começar outra tabuada
       while (c<=10){
         var item= document.createElement('option')
         item.text= `${n} x ${c}= ${n*c}`
         item.value= `tab ${c}`//pro js não faz tanto sentido, é mais par outras ling como php
         tab.appendChild(item)
         c++ 
       }

    }
}
/*

  Para adicionar ao elemento tabuada seltb 
    1- cria um uma variavel de opção
    depois adiciona o texto na variavel
    depois adiciona a variavek ao elemnto tab 
     Explicação linha 10 
        
     enquanto o contador for menor ou igual a dez...
     agr tenho que adicionar elemntos no meu select. pra eu criar elementos qualquer que seja dentro js eu preciso criar uma variavel = docuent.creatElement ('option') crio um elemnto do tipo option dentro do select pq pra colocar opções tem que ter option. e preciso de um value
     item.text= `${num} x ${c}= ${num*c}`
     pra fazer o resultado aparecer:
     tab.appendChild(item)
     (adicionar um elemnto filho)
*/