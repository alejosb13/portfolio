document.addEventListener('DOMContentLoaded', () => {
    let formulariosCollection = document.getElementsByClassName('formsocialmedia');
    let formularios = Array.from(formulariosCollection);
    
    formularios.map((val,index)=>{
        return val.addEventListener('submit', setServices);
        
    }) 
    
    fileUpload()

});

async function setServices(event) {
    event.preventDefault();
    let submit = event.currentTarget;

    let name            = submit.querySelector("#name").value
    let urlvalue        = submit.querySelector("#url").value
    let tag             = submit.querySelector("#tag").value        
    let html            = submit.querySelector("#html").value        
    let idsocialmedia   = submit.querySelector("#nsocialmedia").value        
 
    let url         = BASEURL + `admin/config/socialmedia/${ idsocialmedia }`;
    
    let  formData  = new FormData()
    formData.append('name',name) 
    formData.append('url',urlvalue) 
    formData.append('tag',tag) 
    formData.append('html',html) 
    
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