function verificar(){
    var data= new Date()
    var ano= data.getFullYear() //ano atual
    var fAno= window.document.getElementById('txtano') //ano do nascimento
    var res= window.document.getElementById('res')
     if(fAno.value.length == 0 || Number(fAno.value) > ano){
          window.alert('[ERRO] Verifique os dados e tente novamente')
     }else{
      var fsex= document.getElementsByName('radsex') //o radsex 0 é a do masculino e o 1 do feminino
      var idade= ano - Number (fAno.value) 
      var genero= ''
      var img= document.createElement('img')
      img.setAttribute('id', 'foto')

      if (fsex[0].checked){
         genero= 'Homem'
         if (idade >= 0 && idade < 12){
            //criança
            img.setAttribute('src', '2.png')
         }else if (idade < 21){
            //jovem
            img.setAttribute('src','jovemhomem.png')
         }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'homemadulto3.png')
         }else {
            //idoso
            img.setAttribute('src', 'srhomem.png')
         }
      } else if (fsex [1].checked ){
         genero= 'Mulher'
         if (idade >= 0 && idade < 12){
            //criança
            img.setAttribute('src', 'babyfem1.png')
         }else if (idade < 21){
            //jovem
            img.setAttribute('src','jovemmulher.png')
         }else if (idade < 50){
            //adulto
            img.setAttribute('src','mulheradulta.png')
         }else {
            //idoso
            img.setAttribute('src','senhora.png')
         }
      }
      res.style.textAlign= 'center'
      res.innerHTML= `Detectamos ${genero} com idade de ${idade} anos`
      res.appendChild(img) //adicionar um elemento, que é o elemento img
      //set attribute= Definir atributo
     }
   
}

//Importante ir testando o programa aos poucos
 //linha 12 se a posição 0 estiver marcada= Masculino
 // A variavel fsex na linha 9 da a opção de marcar apenas uma unica possibilidade
 //na linha 13 estamos atribuindo um id para foto no js. poderia ser feito no html também


 