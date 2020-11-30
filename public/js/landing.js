document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formKeyword').addEventListener('submit', setKeyword);
    // setKeyword2()
});


function setKeyword2(event) {
    event.preventDefault();

    console.log("asfas");
}

async function setKeyword(event) {
    event.preventDefault();

    let url = BASEURL + 'admin/landing/inicio/setkeywords';
    var data = {
        keytext: 'test',
        section: '1',
    };

    let response = await fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), 
    // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    });
    let pokemon = await response.json();
    console.log(pokemon);
    // .then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));
    // log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
}
