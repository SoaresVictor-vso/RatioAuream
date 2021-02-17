var a = window.document.getElementById('div2')
a.addEventListener('click', clicar)


function clicar()
{
    a.innerText = "Obrigado por clicar!"
    a.style.backgroundColor = '#000000';
}