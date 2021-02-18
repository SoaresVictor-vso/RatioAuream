//main.js e main.css são arquivos genéricos que setam característica para elementos que serão usados em todas páginas

const barTopo = window.document.getElementsByTagName('nav')[0]; //barTopo é o objeto do menu
const topOfBar = barTopo.offsetTop; //top é o ponto mais alto do menu

window.onscroll = function(){ //funções aqui dentro são chamadas cada vez que o mouse é scrollado
    fixMenu();
}

function fixMenu() //se o site não estiver no topo, fixa o menu no topo
{
    if(window.pageYOffset >= topOfBar)
    {
        barTopo.classList.add("pin");
    }
    else
    {
        barTopo.classList.remove("pin");
    }
}