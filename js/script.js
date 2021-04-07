function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  sendMail(message,email,name);

}

function sendMail(message, email, name){
    var mail = {
        email: email,
        name: name,
        message: message,
    }

    axios
        .post(
            "https://kyle-node-mailer.herokuapp.com/api/send-mail",
            mail
        )
        .then((response) => {
            if(response.data.sent){
                document.querySelector('.status').innerHTML = "Email sent.";
                document.getElementById('message').value = "";
                document.getElementById('email').value = "";
                document.getElementById('name').value = "";
               }
               else{
                document.querySelector('.status').innerHTML = "Email not sent.";
        }})
        .catch((error) => console.log(error.message))
}