console.log(`all right`)
var now = new Date().getHours() ;

if(now <= 6)
{
    window.document.getElementById(`bb`).style.backgroundColor = '#000000';
}
else if(now <=12)
{
    window.document.getElementById(`bb`).style.backgroundColor = '#4599ff';
}
else if(now <= 18)
{
    window.document.getElementById(`bb`).style.backgroundColor = '#f3f33e';
}
else
{
    window.document.getElementById(`bb`).style.backgroundColor = '#505050';
}