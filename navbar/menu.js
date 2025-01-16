 //efeito de scroll
 window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 500)
  })


//Barra de pesquisa
let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})