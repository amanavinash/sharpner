function aman(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.emailId.value;
    const passward = event.target.passward.value;
    
const obj = {
        name,
        email,
        passward
    }
    console.log(obj);
    axios.post("http://localhost:3000/user/singup",obj)
    
        .then((response) => {

         //    showNewUserOnScreen(response.data.newUserDetails)
            // console.log("aman",response.data.newUserDetails)

if(response==201){
    window.location.href="../Login/login.html"
}else{
    throw new error('failed to login')
}


        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + 
            console.log(err)
        });
}
