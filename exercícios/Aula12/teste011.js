
var hora = 4
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >=0 && hora <=4 ){
    console.log('Boa madrugada')
}else if (hora <=12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
}else {
    console.log('Boa noite!')
} 


    //Para colocar pra rodae a hora do sistema var agora= new Date()
   //var hora = agora.getHours()