//  -----------------------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------------------
//  ----------  /10-mainipulacion-avanzada-del-contenido/  ----------
//  ----------  /01-inyeccion-append-prepend/  ----------------------
//  ----------  /assets/js/index.js  --------------------------------
//  -----------------------------------------------------------------


export const inyeccionAfterBefore = ($) => {

    $("#div1, #div2").css("background-color", "rgb(166, 191, 228)");

    $("<div> <b> negrita </b>, insertamos antes de mi division </div>")
        .insertBefore("#div1");

    $("<div> Insertamos <b> después </b> de mi division </div>")
        .insertAfter("#div1");

    $("#div2")
        .after("<p> hola despues </p>");

    $("#div2")
        .before("<p> hola antes </p>");

}
