
//var HeadTitle =document.getElementById("main-header");
//console.log();
//console.log(document.getElementById("main-header"));
//var headerTitle =document.getElementById("main-header");
//console.log( headerTitle);
//headerTitle.textContent='hello' ;
//headerTitle.innerHTML='<h1>hello</h1>' ;
//headerTitle.style.color='green';
//headerTitle.style.borderBlock='solid 3px #000';

//HeadTitle.textContant='hello' ;
var items =document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent="hello" ;

for(var i=0;i<items.length;i++)
{
items[i].style.fontWeight='bold' ;
}
items[1].style.backgroundColor='green' ;






