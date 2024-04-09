function carregamento(){
    const tela = document.querySelector('.back')
    const load = document.querySelector('.load')
    

    setTimeout(() =>{
        load.style.display = 'none'
        tela.style.display = 'flex'
        
    }, 2000)
}