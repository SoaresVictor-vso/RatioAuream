var max = 10; //valor lomite
var primos = [2];

for(var i = 3; i<max; i++){
    var c =0;
    for(j=0; j< primos.length; j++)
    {
        if(i%primos[j]!=0)
        {
            //console.log("nd")
            c++;
            if(c==primos.length)
            {
                console.log(i);
                primos.push(i);
            }
        }
    }
}

console.log(primos)

