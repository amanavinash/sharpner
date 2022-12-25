
const post=[
   { title:'post one', body: 'this is  post one'} ,
   {title:'post two' , body:'this is  post one'}
] ;
function getPost() {
setTimeout (()=> {   
 let output= '';
  post.forEach((post,index)=>{
output+=`<li>${post.title}</li>` ;
} ); 
document.body.innerHTML=output;
},1000) ;

}
function creatPost(post,callback){
    setTimeout(()=>{
    posts.push(post);
    callback();   
    },2000) ;
 }
// getPost();



creatPost({title:'post three',body:'Thish is post three'},getPost );


























