document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formKeyword').addEventListener('submit', setKeyword);
    
    let elementDeleteNodeList = document.querySelectorAll("[data-item-keyword]")
    if( elementDeleteNodeList.length > 0){
        let elementDelete = Array.from(elementDeleteNodeList)
        elementDelete.map((element)=>{
            element.addEventListener('click', deleteKeyword);
        })
    }


});


async function setKeyword(event) {
    event.preventDefault();
    let keyword = document.querySelector("#formKeyword input[name='keyword']").value
    let url = BASEURL + 'admin/config/keywords';
    let csrf  = document.querySelector('meta[name="csrf-token"]').getAttribute('content')  
    var data = {
        keytext: keyword,
        section: 2,
        _csrf:csrf
    };



    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json'
        }
    });
    let respuesta = await response.json();

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
    let idkeyword   = event.target.dataset.itemKeyword
    let keyword     = event.target.parentElement.innerText
    let url         = BASEURL + `admin/config/keywords/${ idkeyword }`;
    let csrf        = document.querySelector('meta[name="csrf-token"]').getAttribute('content')  


    swal({
        title: "¿Desea eliminar la Keyword?",
        text: `Una vez eliminada no podra recuperar la Keyword "${ keyword }".`,
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"],
        dangerMode: true,
    })
    .then(async(willDelete) => {
        if (willDelete) {
            const formData  = new FormData()
            formData.append('_csrf',csrf) 

            let response = await fetch(url, {
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: formData, 
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
