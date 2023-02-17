function login()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="admin" && password =="NOTHING")
    {
        //alert("Login Successful.");
        alert("Thank You for Login & You are Redirecting to TinDog Website");
        window.open("https://vishnu611.github.io/tindog/");
        /*window.open('');
return false;*/
    }
    else{
        alert("Plese Enter Correct Username/Password.")
    }
}