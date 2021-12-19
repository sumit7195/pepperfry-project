let homtbtn  = document.getElementById("homeBtn");



function updateProfile(){
    var user = firebase.auth().currentUser;
    

    user.updateProfile({
        displayName: document.getElementById("username_updated_val").value,
        photoURL: document.getElementById("image_file_field").value

    }).then(function(){
        window.alert('Profile Updated !!!');

    }).catch(function(error){

        window.alert('Error in Updating  Profile!!')
        console.log(error);
    });

}


firebase.auth().onAuthStateChanged(function(user) {
    if(user){
        document.title = "PROFILE PAGE";

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if (user != null) {
            var email_id = user.email;
             var uname = user.displayName;
             var dp_url = user.photoURL;

              document.getElementById("user_name_from_database").value = uname;
             document.getElementById("user_email_from_database").value = email_id;
            //  document.getElementById("profilepic").src = dp_url;
            // let btn1 = document.createElement("btn1");
            // btn1.addEventListener("click", function(){
            //     window.location.href = "./home.html";
            // })
            
            alert(`Welcome ${email_id}`);
            homtbtn.addEventListener("click",function(){
                window.location.href="./home.html"
            })
            //  window.location.href = "home.html"
            
        }
    }

    else{
        document.title = "Login Here"
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});



function login(){
    var email_address = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;
    
    firebase.auth().signInWithEmailAndPassword(email_address, password).catch(function(error){
        console.log(error);
        // alert(`welcome ${email_address}`)
        // window.location.href = "home.html"
    });
    
}

function logout(){
    firebase.auth().signOut();
}