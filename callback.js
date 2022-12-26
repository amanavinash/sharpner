
console.log('person:1 show ticket') ;
console.log('person:2 show ticket') ;



const preMovie=async()=> {
const promiseWifeBringTricks=new promise ((resolve,reject)=> {
  setTimeout(()=>resolve('ticket'),3000);
 }) ;
const getpopcorn =new promise ((resolve,reject)=> resolve(`popcorn`)) ;

const get coldrinks =new promise ((resolve,reject)=> resolve(`coldrinks`)) ;
let ticket= await promiseWifeBringTricks ;

console.log('wife :i have a ticket') ;
console.log('husband :should we go now') ;
console.log('wife :no i am hungary') ;


let popcorn = await getpopcorn

console.log('husband :i got popcorn') ;
console.log('husband :should we go now') ;
console.log('wife :no i need coldrinks') ;


let coldrinks = await getpopcorn

console.log('husband  :ok') ;
console.log('husband :should we go now') ;
console.log('wife :yes') ;
 return ticket;
}


preMovie().then((m)=>console.log(m));

console.log('person:4 show ticket') ;
console.log('person:5 show ticket') ;


























