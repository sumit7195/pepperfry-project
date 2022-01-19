


// async function RegisterUser(){
//   const data={
//     id:document.getElementById('id').value,  get all the field data  and store the values in data
//     name:document.getElementById('name').value,
//     price:document.getElementById('price').value
// //   }

// {
//   "name":"Vishnu",
// "mobile":1234567890,
// "email":"vish@vish.com",
// "role":["seller"], if not mentioned it defaults to customer
// "password":123,
// "address":"home"
// }

//   //make a POST request

//   let respose=await fetch('http://localhost:8000/register',{
//     method:'POST',
//     body:JSON.stringify(data),
//     headers:{
//       'Content-Type':'application/json',
//     }
//   })

//   let token=await response.json();
//   console.log(token)
// }



// async function SigninUser(){
//   const data={
//     id:document.getElementById('id').value,  get all the field data  and store the values in data
//     name:document.getElementById('name').value,
//     price:document.getElementById('price').value
// //   }

// {
//   "email":"mu@mu.com",
//   "password":123
//   }

//   //make a POST request

//   let respose=await fetch('http://localhost:8000/login',{
//     method:'POST',
//     body:JSON.stringify(data),
//     headers:{
//      headers:{
        //   'Authorization':'Bearer token',
        // }
//     }
//   })

//   let res=await response.json();
//   console.log(res)
// }


function SignUpFunction() {
    email = document.getElementById("signup_email_field").value;
    pswd = document.getElementById("signup_pass_field").value;

    firebase.auth().createUserWithEmailAndPassword(email, pswd).then(function(){
        // console.log('User Created !! ');

        var user = firebase.auth().currentUser;

        user.updateProfile({
            photoURL: document.getElementById("signup_image_field").value,
            displayName: document.getElementById("signup_uname_field").value
        });

    
    }).catch(function(error){
        window.alert(error.message);
        console.log('Error !!!');
    });

}

firebase.auth().onAuthStateChanged(user => {
    if(user){
        window.open('index.html', target="_self");
        document.title = "PROFILE PAGE";

    }
})