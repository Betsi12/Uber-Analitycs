//funciones complementarias a MaterializeCSS
 
$(document).ready(function(){
    //Navbar
    $('.sidenav').sidenav();
        
    //barra filtrar y ordenar
    $('.collapsible').collapsible();

    //Elemento seleccion
    $('select').formSelect();

    indexView();
});
