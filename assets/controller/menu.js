
window.onload = () => {
    document.querySelector(".menu_open").addEventListener("click", () =>{
        if(document.querySelector(".menu nav ul").style.display === 'flex'){
            document.querySelector(".menu nav ul").style.display = 'none'
        }
        else{
            document.querySelector(".menu nav ul").style.display = 'flex'
        }
    })
}
alert("Benvindo ao Mercadinho do Galvão \nClique nas Imagens para fazer o melhor uso do Site ")