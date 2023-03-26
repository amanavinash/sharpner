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
    axios.post('http://localhost:3000/user/login',obj)
    
        .then((response) => {

    alert(response.data.message)

  }).catch((err) => {
console.log(jason.stringyfy(err))
            document.body.innerHTML+= `<div style="colored:red;">${err.message}<div>`; 
            console.log(err)
        });
}
