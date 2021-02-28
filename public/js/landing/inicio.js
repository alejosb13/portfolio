document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formdatainicio').addEventListener('submit', updatedata);



    document.getElementById('formKeyword').addEventListener('submit', setKeyword);
    
    let elementDeleteNodeList = document.querySelectorAll("[data-item-keyword]")
    if( elementDeleteNodeList.length > 0){
        let elementDelete = Array.from(elementDeleteNodeList)
        elementDelete.map((element)=>{
            element.addEventListener('click', deleteKeyword);
        })
    }

    fileUpload()

});


async function setKeyword(event) {
    event.preventDefault();
    let keyword = document.querySelector("#formKeyword input[name='keyword']").value
    let url = BASEURL + 'admin/landing/inicio/setkeywords';
    var data = {
        keytext: keyword,
        section: 1,
    };

    let response = await fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), 
    // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    });
    let respuesta = await response.json();
    console.log(respuesta);
    if(respuesta.status){
        swal("Guardado con Éxito!", "Tu Keyword se cargo correctamente.", "success")
        .then(() => {
            location.reload();
        });
    }else{
        swal("Ocurrio algun problema!", "Falló el envío de tu mensaje. Por favor intenta más tarde o contacta al administrador por otro medio.", "error")
        .then(() => {
            location.reload();
        });
    }

}

function deleteKeyword(event) {
    // event.preventDefault();
    value = event.target.dataset.itemKeyword
    keyword = event.target.parentElement.innerText
    // console.log(event);

    let url = BASEURL + 'admin/landing/inicio/deletekeywords';
    var data = {
        id: value,
    };
    swal({
        title: "¿Desea eliminar la Keyword?",
        text: `Una vez eliminada no podra recuperar la Keyword "${keyword}".`,
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"],
        dangerMode: true,
    })
    .then(async(willDelete) => {
        if (willDelete) {
            let response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data), 
                headers:{
                    'Content-Type': 'application/json'
                }
            });

            let respuesta = await response.json();
            if(respuesta.status){
                swal("Eliminado con Éxito!", "Tu Keyword fue eliminada correctamente.", "success")
                .then(() => {
                    location.reload();
                });
            }

        } 
    });

}

async function updatedata(event) {
    event.preventDefault();
    let title       = document.getElementById("title").value ||""
    let subtitle    = document.getElementById("subtitle").value ||""
    let img         = document.getElementById("image").files[0] || ""        
    let url         = BASEURL + 'admin/landing/inicio/updatedata';
    const formData  = new FormData()

    formData.append('file',img) 
    formData.append('title',title) 
    formData.append('subtitle',subtitle) 
    
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
    }

    // console.log(respuesta);
}