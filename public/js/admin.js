$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $("#sidebarCollapse").toggleClass('open');
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });


    mueveReloj()
});

function mueveReloj(){
    let dias    = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let meses   = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let elemHr =  document.querySelector(".horafull")
    let elemStrDate =  document.querySelector(".strFullDate")
    
    let dateObj = new Date()
    let year    = dateObj.getFullYear()
    let month   = dateObj.getMonth()
    let date    = dateObj.getDate() 
    let day     = dateObj.getDay()
    let hora    = (dateObj.getHours().toString().length == 1)?  "0"+dateObj.getHours() : dateObj.getHours();
    let minuto  = (dateObj.getMinutes().toString().length == 1)?  "0"+dateObj.getMinutes() : dateObj.getMinutes()
    // let segundo = dateObj.getSeconds()

    let horafull = `${hora}:${minuto}`;
    let strDate =`${dias[day]}, ${date} de ${meses[month]} de  ${year}.`;

    elemHr.innerHTML= horafull
    elemStrDate.innerHTML= strDate
    setInterval("mueveReloj()",1000)
}