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
    if(respuesta.status){
        location.reload();
    }

}

async function deleteKeyword(event) {
    // event.preventDefault();
    value = event.target.dataset.itemKeyword
    // console.log(value);

    let url = BASEURL + 'admin/landing/inicio/deletekeywords';
    var data = {
        id: value,
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
    if(respuesta.status){
        location.reload();
    }
}
