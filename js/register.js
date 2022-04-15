$(document).ready(function(){
    function checkName(){
        let name = $('#txtName').val();
        let nameRegex = /^[a-zA-Z\s]+$/;
        if(nameRegex.test(name)){
            return true
        }
        return false
    }
    $("#register").click(function(e){
        e.preventDefault();
        if(checkName()){
            $("#statusOfName").text('Invalid')
            $("#statusOfName").css('color','#196619')
        }else{
            $("#statusOfName").text('Name is required.')
            $("#statusOfName").css({'color':'red'})
        }
    })
})
$(document).ready(function(){
    function checkEmail(){
        let email = $('#email').val();
        let emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(emailRegex.test(email)){
            return true
        }
        return false
    }
    $("#register").click(function(e){
        e.preventDefault();
        if(checkEmail()){
            $("#statusOfEmail").text('Invalid')
            $("#statusOfEmail").css('color','#196619')
        }else{
            $("#statusOfEmail").text('Email is required.')
            $("#statusOfEmail").css('color','red')
        }
    })
})
$(document).ready(function(){
    function checkPassword(){
        let password = $('#password').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passwordRegex.test(password)){
            return true
        }
        return false
    }

    $("#register").click(function(e){
        e.preventDefault();
        if(checkPassword()){
            $("#statusOfPassword").text('Invalid')
            $("#statusOfPassword").css('color','#196619')
        }else{
            $("#statusOfPassword").text('Password is required.')
            $("#statusOfPassword").css('color','red')
        }
    })
})
$(function () {
    $("#register").click(function () {
        var password = $("#password").val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        var confirmPassword = $("#comfirm-password").val();
        if (password != confirmPassword) {
            document.getElementById("statusOfCPassword").innerHTML="Passwords do not match.";
            document.getElementById("statusOfCPassword").style.color="red";
        }
        else{
            if(passwordRegex.test(password)){
                document.getElementById("statusOfCPassword").innerHTML="Invalid";
                document.getElementById("statusOfCPassword").style.color="#196619";
            }
            else{
                document.getElementById("statusOfCPassword").innerHTML="Password is required.";
                document.getElementById("statusOfCPassword").style.color="red";
            }
        }
    });
});
$(document).ready(function(){
    $("#register").click(function(){
        var Job = $("#selectJob :selected");
        if(Job.val() === "")
        {
            document.getElementById("statusOfJob").innerHTML="Select is required.";
            document.getElementById("statusOfJob").style.color="red";
        }
        else{
            document.getElementById("statusOfJob").innerHTML=" "+Job.val()+"";
            document.getElementById("statusOfJob").style.color="#196619";
        }
})
})