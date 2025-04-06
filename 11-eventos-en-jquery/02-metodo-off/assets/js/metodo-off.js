//  -----------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------
//  ----------  /11-eventos-en-jquery/  -----------------
//  ----------  /02-metodo-off/  ------------------------
//  ----------  /assets/js/metodo-off.js  ---------------
//  -----------------------------------------------------



export const metodoOff = ($) => {

    //  -----  referencias al HTML  -----
    const $div = $(".div");
    const $btnAllOffEvent = $("#btnAllOffEvent");
    const $btnClickOffEvent = $("#btnClickOffEvent");
    const $btnOffEventHandler = $("#btnOffEventHandler");
    

    //  -----  1er evento click en el div  -----
    $div.on("click", gestionClic);
    

    //  -----  función manejadora de eventos  -----
    function gestionClic() {
        $(this).text($(this).text() + " / primer evento clic");
    }


    //  -----  2do evento click en el div  -----
    $div.on("click", function () {
        $(this).text($(this).text() + " / otro click");
    });


    //  -----  one, solo ejecuta una vez los eventos  -----
    $div.one("mouseenter", function () {
        $(this).text($(this).text() + " / entraste solo esta vez");
    });


    //  -----  boton que quita todos los eventos  -----
    $btnAllOffEvent.on("click", function () {
    
        //  -----  quitar todos los eventos  -----
        $div.off();
    });


    //  -----  boton que quita todos los manejadores de 1 tipo de evento, en este caso el click  -----
    $btnClickOffEvent.on("click", function () {
    
        //  -----  quitar todos los manejadores de tipo click  -----
        $div.off("click");
    });

   

    //  -----  boton que quita un manejador en concreto...  -----
    $btnOffEventHandler.on("click", function () {
        
        //  -----  quitar un manejador en concreto  -----
        $div.off("click", gestionClic);
    });
    
    
}
