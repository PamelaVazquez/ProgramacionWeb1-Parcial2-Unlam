var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
var regexcodigo = /^[0-9]{6}$/;

$(document).ready(function() {
    
    $("#form").submit(function() {
        validar();
    });
    
    $("#producto").keyup(function() {
        validar();
    });

    $("#codigo").keyup(function() {
        validar();
    });

    $("#reCodigo").keyup(function() {
        validar();
    });

    $("#tipo").change(function() {
        validar();
    });

    $("#email").keyup(function() {
        validar();
    });
});

function validar(){
    var mensaje ="";
    var error =0; 

    reset();

    if($("#producto").val().length<3 || $("#producto").val().length>20){
        mensaje+= "<p>El campo Producto debe tener entre 3 y 20 caracteres </p>";
        error++;
        $("#producto").addClass('error');
    } 

    if(!$("#codigo").val().match(regexcodigo)){
        mensaje+= "<p>Debe contener hasta 6 digitos </p>";
        error++;
        $("#codigo").addClass('error');
    }
  
    if(!($("#codigo").val() == $("#reCodigo").val())){
        mensaje+= "<p>Repetir código debe ser igual al código </p>";
        error++;
        $("#reCodigo").addClass('error');        
    }

    //validamos un select con la propiedad selectedIndex
    if ($("#tipo option:selected").val()==0){
        mensaje+= "<p>Debe Seleccionar un tipo</p>";
        error++;
        $("#tipo").addClass('error');
    }

    if(!$("#email").val().match(regexemail)){
        mensaje+= "<p>Debe ser un email valido</p>";
        error++;
        $("#email").addClass('error');
    }

    if (error>0){        
        $("#mensaje").append(mensaje); 
        return false;
    }
    else{
        return true;
    }
}

function reset(){ 
    $("#producto").removeClass('error');
    $("#codigo").removeClass('error');
    $("#reCodigo").removeClass('error');
    $("#tipo").removeClass('error');
    $("#email").removeClass('error');
    $("#mensaje").empty(); 
}

