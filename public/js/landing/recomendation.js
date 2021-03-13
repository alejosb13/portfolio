document.addEventListener('DOMContentLoaded', () => {
    let formulariosCollection = document.getElementsByClassName('formrecomendation');
    let formularios = Array.from(formulariosCollection);
    
    formularios.map((val,index)=>{
        return val.addEventListener('submit', setRecomendation);
        
    }) 
    
    fileUpload()

});

async function setRecomendation(event) {
    event.preventDefault();
    let submit = event.currentTarget;

    let idrecomendation        = submit.querySelector("#nrecomendation").value
    let name        = submit.querySelector("#name").value
    let work        = submit.querySelector("#work").value
    let dateworkIni = submit.querySelector("#dateworkIni").value        
    let comment     = submit.querySelector("#comment").value        
    let img         = submit.querySelector("#image").files[0] || ""        
    let url         = BASEURL + `admin/landing/recomendations/${ idrecomendation }`;
    
    let  formData  = new FormData()
    formData.append('name',name) 
    formData.append('work',work) 
    formData.append('dateworkIni',dateworkIni) 
    formData.append('comment',comment) 
    formData.append('file',img) 
    
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