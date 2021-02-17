var val = 0;
var a = window.document.getElementById('div2')
a.addEventListener('click', clicar)
var b = window.document.getElementById('num')
b.innerText = val


var p1, p2, r;



function clicar()
{
    /*a.innerText = "Obrigado por clicar!"
    a.style.backgroundColor = '#000000';*/
    val ++
    b.innerText = val
}

function somar()
{
    p1 = Number(window.document.getElementById('ent1').value)
    p2 = Number(window.document.getElementById('ent2').value)
    r = p1+p2
    window.document.getElementById('result').innerHTML= `O resultado de ${p1} + ${p2} = <b>${r}</b>.`
}