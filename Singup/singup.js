async function aman(e) {
    try{
   e.preventDefault();
   const name = e.target.name.value;
   const email = e.target.emailId.value;
   const passward = e.target.passward.value;
   
const obj = {
       name,
       email,
       passward
   }
   
console.log(obj);
const response= await axios.post('http://localhost:3000/user/singup',obj)
        
if(response.status===201){
window.location.href="../Login/login.html"
}else{

throw new Error('failed to login')

}

}
catch(err) {
document.body.innerHTML+= `<div style="color: red;">${err} <div>`; 
       
       }
   }



   