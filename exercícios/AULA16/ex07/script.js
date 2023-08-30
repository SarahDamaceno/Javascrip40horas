let num= document.querySelector('input#txt1')
let res= document.querySelector('div#res')
let lista= document.querySelector('select#flista')
let valores= []

function isNumero(n){
  if(Number(n)>=1 && Number(n)<=100){
    return true
  } else {
    return false 
  }

}
function inList(n,l){
  if(l.indexOf(Number(n)) != -1){   //lê: Se na lista o Number de n for diferente de -1 (-1 significa q n esta na lista) ou seja, se ele estiver na lista , então...
    return true
  }else{
    return false 
  }
}

function adicionar(){
  if(isNumero(num.value) && !inList(num.value,valores)){
    valores.push(Number(num.value))
    let item= window.document.createElement('option')
    item.text= `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML= ''
  }else{
    window.alert('valor inválido')
  }
  num.value= '' //pra que apague o nuemro do espaço de escrever assim que foi adicionado
  num.focus() //e o cursor volte a piscar para que o usuario adicione outro numero

  }

  function finalizar(){
    if(valores.length== 0){
      window.alert('Adicione um número!')
    }else{
      let tot= valores.length
      let maior= valores[0] //a contagem começa de cima pra baixo entao se apenas 1 posição foi analisada, esta é a maior e a menor pois não tem outro para comparar ainda
      let menor=[0]
      let soma= 0
      let media= 0
      for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior ){//ou seja, deixa de ser o anterior e passa a ser esse
            maior= valores[pos] 
        }if( valores [pos]< menor){
        menor= valores[pos]
      }
      }
        
      
      media= soma/tot
      res.innerHTML= ''
      res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados </p>`
      res.innerHTML += `<P> O maior valor informado foi ${maior} </P>`
      res.innerHTML += `<P> O menor valor informado foi ${menor} </P>`
      res.innerHTML += `<P> Somando todos os valores temos ${soma} </P>`
      res.innerHTML += `A média dos valores digitados é ${media}`
    }

}

/*

   Push é adicionar elemento no vetor
   ! significa "não"
   esse -1 é pra quando o numero não é encontrado no vetor
   o indezOf é para buscar valores no vetor
   na função finalizar é onde vai analisar os dados
 */



