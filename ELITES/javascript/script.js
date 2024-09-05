var string='hello there';
var isRad= true;
var items=['motor','wires','controllers'];
if(number==15)
{
    console.log('correct');
}
else
{
    console.log('wrong');
}
document.getElementById('box').innerHTML= number+5;
function listitems(){
for(var i=0;i<items.length;i++)
{
    console.log(items[i]);
}
}
listitems();

document.getElementById('box').addEventListener('click', function(){alert('i got clicked')});