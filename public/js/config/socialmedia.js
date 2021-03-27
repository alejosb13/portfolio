document.addEventListener('DOMContentLoaded', () => {

    let formulariosCollection = document.getElementsByClassName('formsocialmedia');
    let formularios = Array.from(formulariosCollection);
     
    formularios.map((val,index)=>{
        return val.addEventListener('submit', upodateSocialMedia);
    }) 
    
    fileUpload()

    // modal 
    let buttomModal = document.getElementById('modal-submit') // identifico el boton del modal insert
    let formModal = document.getElementById('insertSocialMedia') // identifico mi formulario de insert
    
    buttomModal.addEventListener('click', (e)=>{ //creo un evento para que se haga submit al presionar el boton
        e.preventDefault();
        
        // formModal.submit()
        insertSocialMedia()
    });

    // formModal.addEventListener('submit', ); evento para enviar el submit
});

async function upodateSocialMedia(event) {
    event.preventDefault();
    let submit = event.currentTarget;

    let name            = submit.querySelector("#name").value
    let urlvalue        = submit.querySelector("#url").value
    let tag             = submit.querySelector("#tag").value        
    let html            = submit.querySelector("#html").value        
    let idsocialmedia   = submit.querySelector("#nsocialmedia").value        
 
    let url         = BASEURL + `admin/config/socialmedia/${ idsocialmedia }`;
    let csrf        = document.querySelector('meta[name="csrf-token"]').getAttribute('content')  
    
    let  formData  = new FormData()
    formData.append('name',name) 
    formData.append('url',urlvalue) 
    formData.append('tag',tag) 
    formData.append('html',html) 
    formData.append('_csrf',csrf) 
    
    let response = await fetch(url, {
        method: 'PUT',
        body: formData, 
    });

    let respuesta = await response.json();
    if (respuesta.status) {
        swal("Modificación éxitosa!", "Tus datos se modificaron correctamente.", "success")
        .then(() => {
            location.reload();
        });
    }else{
        swal("Error!", "Tenemos un problema.", "error")
        .then(() => {
            location.reload();
        });
    }


}

async function insertSocialMedia(event) {
    let name      = document.getElementById("iname").value
    let urlvalue  = document.getElementById("iurl").value
    let tag       = document.getElementById("itag").value        
    let html      = document.getElementById("ihtml").value        
 
    if(name =="" || urlvalue =="" || tag=="" || html==""){
        swal("¡Error!", "Debe completar todos los campos.", "error")
        .then(() => {
            // location.reload();
        });
        
        return false;
    }

    let url        = BASEURL + `admin/config/socialmedia`;
    let csrf        = document.querySelector('meta[name="csrf-token"]').getAttribute('content')  

    let  formData  = new FormData()
    formData.append('name',name) 
    formData.append('url',urlvalue) 
    formData.append('tag',tag) 
    formData.append('html',html) 
    formData.append('_csrf',csrf) 

    let response = await fetch(url, {
        method: 'POST',
        body: formData, 
    });

    let respuesta = await response.json();
    if (respuesta.status) {
        swal("Modificación éxitosa!", "Tus datos se modificaron correctamente.", "success")
        .then(() => {
            location.reload();
        });
    }else{
        swal("Error!", "Tenemos un problema.", "error")
        .then(() => {
            location.reload();
        });
    }


}