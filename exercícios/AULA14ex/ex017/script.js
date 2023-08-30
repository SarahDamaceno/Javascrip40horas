function contar(){
    var ini= window.document.getElementById('txt1')
    var fim= window.document.getElementById('txt2')
    var pas= window.document.getElementById('pass')
    var res= window.document.getElementById('res')
    
    var i= Number(ini.value)
    var f= Number(fim.value)
    var p= Number (pas.value)
    if (i==0 || f==0 || p==0){
        window.alert('[Erro] impossível contar')
    }
    for(c=i; c<=f; c+= p ){
        res.innerHTML+= ` ${c}`
        
    }

}