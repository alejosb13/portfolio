$(document).ready(function () {
    let Loginform = $("#loginForm")
    
    Loginform.on("submit",(e)=> {
        e.preventDefault();
        
        let username  = $("#username").val()
        let password  = $("#password").val()
        
        if(username && password){
            $.ajax({
                type: "post",
                url: BASE_URL+"auth",
                data: {
                    username:username,
                    password:password
                },
                dataType: "json",
                success: function (response) {
                    if(response.valid){
                        window.location = BASE_URL+"home"
                    }else{
                        console.log(response.message);
                    }
                }
            });
        }
    });
});
