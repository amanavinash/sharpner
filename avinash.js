// let multiply = function (x,y)
// {
//  console.log(x*y)   ;
// }


let multiply = function (x)
{
return function(y)
{
console.log(x*y) ;
}   
}

let multiplyBYTwo=multiply( 2 ) ;
multiplyBYTwo(5) ;

















// let multiplyBYTwo=multiply.bind( this,2 ,5) 
// // let multiplyBYTwo=multiply.bind( this,2) ; 
// multiplyBYTwo(5) ;
// multiplyBYTwo(15) ;




















