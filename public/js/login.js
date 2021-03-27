$(document).ready(function () {
    let Loginform = $("#loginForm")
    
    Loginform.on("submit",(e)=> {
        e.preventDefault();
        
        let username  = $("#username").val()
        let password  = $("#password").val()
        let csrf  = $("#csrf").val()
        
        if(username && password){
            $.ajax({
                type: "post",
                url: BASE_URL+"admin/auth",
                data: {
                    username,
                    password,
                    _csrf:csrf
                },
                dataType: "json",
                success: function (response) {
                    if(response.status){
                        window.location = BASE_URL+"admin/home"
                    }else{
                        swal("¡Error!", response.message, "error")
                        .then(() => {
                            location.reload();
                        });
                    }
                },
                error: function (jqXHR, exception) {
                    let XHR = jqXHR.responseJSON

                    swal("¡Error!", XHR.message, "error")
                    .then(() => {
                        location.reload();
                    });
                },
            });
        }
    });
});
