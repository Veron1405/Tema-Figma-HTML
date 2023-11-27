const trocarTema = document.getElementById('trocar');

const body = document.body;

trocarTema.addEventListener('click', () =>{
    body.classList.toggle('tema-diferente');
})
