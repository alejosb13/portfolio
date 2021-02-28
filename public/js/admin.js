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

function fileUpload(){

    $('input[type="file"]').change(function(){
        var label = $(this).parent().find('span'); 
        if(typeof(this.files) !='undefined'){ // fucking IE      
        if(this.files.length == 0){
            label.removeClass('withFile').text(label.data('default'));
        }else{
            var file = this.files[0]; 
            var name = file.name;
            var size = (file.size / 1048576).toFixed(3); //size in mb 
            label.addClass('withFile').html(name + ' (' + size + 'mb)'+'<i class="bx bx-x"></i>');
        }
        }
        else{
        var name = this.value.split("\\");
            label.addClass('withFile').html(name[name.length-1]+'<i class="bx bx-x"></i>');
        }
        return false;
    });  

}