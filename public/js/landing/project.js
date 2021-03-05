document.addEventListener('DOMContentLoaded', () => {
    let formulariosCollection = document.getElementsByClassName('formproject');
    let formularios = Array.from(formulariosCollection);
    
    formularios.map((val,index)=>{
        return val.addEventListener('submit', setServices);
        
    }) 
    
    fileUpload()

});

async function setServices(event) {
    event.preventDefault();
    let submit = event.currentTarget;

    let title       = submit.querySelector("#title").value
    let text        = submit.querySelector("#text").value     
    let idProject   = submit.querySelector("#nproject").value        
    let img         = submit.querySelector("#image").files[0] || ""        
    let url         = BASEURL + `admin/landing/project/${ idProject }`;
    
    let  formData  = new FormData()
    formData.append('file',img) 
    formData.append('title',title) 
    formData.append('texto',text) 
 
    
// console.log(text);
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