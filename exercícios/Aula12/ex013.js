var agora= new Date()
var diaSem= agora.getDay()
diaSem= 8

/* 
   0=Domingo
   1=Segunda
   2=Terça
   3=Quarta
   4=Quinta
   5=Sexta
   6=Sábado
*/  

//console.log(diaSem)
// Não da pra usar o switch pra testar por ex "dia da semana entre 0 e 4" é para dados pontuais
//Não esquecer o break
//o switch é mais limitada que o if, mas é util

switch(diaSem){
    case 0:
     console.log('Domingo')
     break

    case 1:
        console.log('Segunda-Feira')
        break
    
    case 2:
        console.log('terça-Feira')
        break
    
    case 3:
        console.log('Quarta-feira')
        break

    case 4:
        console.log('Quinta-Feira')
        break
    
    case 5:
        console.log('Sexta-Feira')
        break
    
    case 5:
        console.log('Sábado')
        break

    default:
        console.log('Erro.Inválido!')
        break
}