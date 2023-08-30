function carregar(){
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data= new Date()
    var hora= 8//data.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src='fotomanha.png'
        document.body.style.background='#6f597e'
    }else if (hora >= 12 && hora<= 18){
        //BOA TARDE!
        img.src='fototarde.png'
        document.body.style.background='#854725'
    } else{
        //BOA NOITE!
        img.src='fotonoite.png'
        document.body.style.background= '#3c5060'
    }
}


//Aqui no Js vamos comecar criando a interação para o primeiro id (msg) referente a imagem da manha

// A gente puxou no onload a função carregar, que executa o codigo da função