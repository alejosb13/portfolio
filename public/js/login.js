$(document).ready(function () {
    let Loginform = $("#loginForm")
    
    Loginform.on("submit",(e)=> {
        e.preventDefault();
        
        let username  = $("#username").val()
        let password  = $("#password").val()
        
        if(username && password){
            $.ajax({
                type: "post",
                url: "./auth",
                data: {
                    username:username,
                    password:password
                },
                dataType: "json",
                success: function (response) {
                    if(response.valid){
                        window.location ="./home"
                    }else{
                        console.log(response.message);
                    }
                }
            });
        }
    });
});
