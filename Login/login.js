
function aman(event) {
    event.preventDefault()
    const email = event.target.emailId.value;
    const passward = event.target.passward.value;
    
const obj = {  
        email,
        passward
    }
    console.log(obj);
    axios.post('http://localhost:3000/user/login',obj).then(response=>{
        alert(response.data.message)
    })

.catch((err) => {
    console.log(JSON.stringify(err));

            document.body.innerHTML+= `<div style="color:red;">${err.message}<div>`; 
            
        });
}


















