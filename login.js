function matchpass(){
    var x=document.forms["f1"]["email"].value;
    var firstpassword=document.f1.password.value;
    var secondpassword=document.f1.password2.value;
    if(x=="" || firstpassword=="" || secondpassword==""){
        alert("Fields can't be empty");
        return false;
    }
    if(firstpassword==secondpassword){
        alert("Welcome to my Website!");
    return true;
    }
    else{
    alert("password must be same!");
    return false;
    }
}
