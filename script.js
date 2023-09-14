function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 6 && hora < 12){
        //Manhã
        msg.innerHTML = `Agora são <strong>${hora} horas</strong>`
        imagem.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#FECE83'
    } else if(hora >= 12 && hora < 18){
        //Começo da tarde
        msg.innerHTML = `Agora são <strong>${hora} horas</strong>`
        imagem.src = 'fototarde.png'
        document.body.style.backgroundColor = '#4D83B5'
    } else if( hora >= 18 && hora < 19){
        //Final da tarde
        msg.innerHTML = `Agora são <strong>${hora} horas</strong>`
        imagem.src = 'fotofinaltarde.png'
        document.body.style.backgroundColor = '#86535A'
    } else{
        //Noite
        msg.innerHTML = `Agora são <strong>${hora} horas</strong>`
        imagem.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#112832'
    }
}
