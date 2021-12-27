function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    fetch('http://localhost:3002/Userdata')
        .then(response => response.json())
        .then(json => {
            var authenticate = false;
            Object.keys(json).forEach(id => {

                console.log(json[id])
                console.log(json[id].username)
                if (email == json[id].email && password == json[id].password) {
                    authenticate = true;
                }
            })
            if (authenticate == true) {
                window.location.href = "../Pages/homepage.html"
            } else {

                alert("Login failed please type correct username and password")

            }
        })
}