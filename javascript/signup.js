var form = document.getElementById('formregistration')

form.addEventListener('submit',function(e){
  e.preventDefault()
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var address = document.getElementById('address').value
  var password = document.getElementById('password').value
  var id = document.getElementById('id').value
  var phonenumber = document.getElementById('phonenumber').value
var link = "http://localhost:3002/Userdata";
  fetch(link,{
    method: 'POST',
    body:JSON.stringify({
      id : id,
      name :name,
      email : email,
      address:address,
      phonenumber:phonenumber,
      password:password

    }),
    headers:{
      "Content-Type":"application/json; charset=UTF-8"
    }
  })
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    window.location.href = "login.html";
   
  })
})