window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var clic = 1;
/*
function mostrarOcultarMenu(){ 
   if(clic===1){
     document.getElementById("menu").className = "menuCenter";
     clic = clic + 1;
   } else{
       document.getElementById("menu").className = "menuLeft";      
    clic = 1;

   } 

}
*/
var myScroll;

function loaded () {
    myScroll = new IScroll('#wrapper', {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapSpeed: 400,
        keyBindings: true,
        indicators: {
            el: document.getElementById('indicator'),
            resize: false
        }
    });
}

document.addEventListener('touchmove', function (e) {
 e.preventDefault(); 
}, false);

var homePage =
    '<div>' +
        '<div id="header">'+
              '<table width="100%" height="48px;" border="0"><tr><td width="54px"><button alt="Compartir aplicacion" class="imgMenu" onclick="mostrarOcultarMenu();"></button></td>'+
              '<td><div id="title"><img src="images/Logo.png" alt="heroico por la niñez de cartagena" width="80%"></div></td><td width="54px"><button style="background:transparent;" onclick="panico()"><div class="btn-der"><p style="margin-top:10px">S.O.S</p></div></button></div></td></tr></table>'+    
         '</div>'+ 
         '<div id="curva-header"></div>'+   

          '<div id="wrapperP">'+
                   '<div class="scroller">'+
                       
                           '<div class="personaje-home">'+
                                 '<table><tr><td width="50%"><img src="images/personaje-home.png" alt="Hola, soy heroico" width="200px;"></td>'+
                               '<td><div class="Text-Home"><img src="images/Text-Home.png" alt="Juntos combatiremos la explotacion sexual contra los niños" width="150px;"></td></tr></table>'+
                           '</div>'+
                           '<div class="contenedor-cajas">'+
                           
                                '<div class="caja1"></div>'+
                                '<div class="caja2"></div>'+
                                '<div class="caja3"></div>'+

                                    '<div class="contendor-botones">'+
                                        '<table width="100%" border="0">'+
                                        '<tr><td colspan="4" align="center"><div style="padding-bottom:10px; color:#1f8ec6; font-size:18px;">EDUCATE</div></td></tr>'+
                                        '<tr>'+
                                        '<td align="center"><a href="#page1"><button class="btn-circ rojo">Como prevenir?</button></a></td>'+
                                        '<td align="center"><button class="btn-circ rojo" onclick="cargaDenuncia()">Donde denunciar?</button></td>'+
                                        '<td align="center"><a href="#page3"><button class="btn-circ rojo">Actores Involucrados</button></a></td>'+
                                        '<td align="center"><a href="#page4"><button class="btn-circ rojo">Jornadas y calendarios?</button></a></td>'+
                                        '</tr></table>'+
                                    '</div>'+

                           '</div>'+
                               

                                
                       
                  '</div>' +    
           '</div>' +


        '<div id="footer" class="naranja">'+
          '<div style="margin-left:5%;"><table width="90%" align="center" border="0"><tr><td width="80%" align="right"><a href="#page2"><button class="btn-rec blanco">HACER UN DENUNCIO</button></a></td><td align="center"><a href="tel:3017693991"><img src="images/Botonllamame.png" width="40px"></img> </a></td></tr></table></div>'+
        '</div>'+

    
    '<div id="light" class="modal">'+
     '<div id="header">'+
              '<table width="100%" height="48px;" border="0"><tr><tdpng" width="80%"></div></td><td width="54px"><button class="btn-izq" onclick="ocultarVentana();"></button></td>'+
              '<td><div id="title"><img src="images/Logo.png" width="80%"></div></td><td width="54px"><button style="background:transparent;" onclick="panico()"><div class="btn-der"><p style="margin-top:10px">S.O.S</p></div></button></div></td></tr></table>'+    
         '</div>'+ 
         '<div id="curva-header"></div>'+ 
          '<div id="wrapperB">'+
         '<div class="scroller">'+  
                       '<div id="contenido"></div>' +
          '</div>'+ 
          '</div>'+               
              '</div>'+
 '<div id="footer" class="naranja">'+
          '<div style="margin-left:5%;"><table width="90%" align="center" border="0"><tr><td width="80%" align="right"><a href="#page2"><button class="btn-rec blanco">HACER UN DENUNCIO</button></a></td><td align="center"><img src="images/Botonllamame.png" width="40px"></img> </td></tr></table></div>'+
        '</div>'+
              
                
    '</div>'


              ;

var detailsPage =

    '<div>' +
        '<div id="header">'+
              '<table width="100%" height="48px;" border="0"><tr><td width="54px"><a href="#"><button class="btn-izq" onclick=""></button></a></td>'+
              '<td><div id="title"><img src="images/Logo.png" width="80%"></div></td><td width="54px"><a href="#page10"></div></td></tr></table>'+    
         '</div>'+ 
         '<div id="curva-header"></div>'+  
'<div id="wrapperB">'+
        '<div class="scroller">' +
                '<div class="titulosPreguntas">{{titulo}}</div>' +
                '{{contenido}}'
                
            
        '</div>' +
          '</div>' +
    '</div>'
   ;


var conoce = 
'<div style="margin-top:40px;">'+
'<div class="contenidoConoce">'+
  '<table><tr><td width="30%"><img src="images/1.png" width="140px;"></td>'+
'<td><div class="text-id">1. IDENTIFICACION DE CASOS</div><p>DETECTA, INFORMA LOS CASOS DE ABUSOS Y ESCNNA, FORMAS: VERBAL, ESCRITA, TELEFONICA, ANONIMA</p></td></tr></table>'+
'</div>'+
'<div class="flecha"></div>'+
'<div class="contenidoConoce">'+
  '<table><tr><td width="30%"><img src="images/2.png" width="140px;"></td>'+
'<td><div class="text-id">2. RECEPCION DE CASOS</div><p>RECIBE EL CASO Y LO DENUNCIA, VERIFICA DERECHOS, REALIZAN PREVENCION</p></td></tr></table>'+
'</div>'+
'<div class="flecha"></div>'+
'<div class="contenidoConoce">'+
  '<table><tr><td width="30%"><img src="images/3.png" width="140px;"></td>'+
'<td><div class="text-id">3. RESTABLECIMIENTO DE DERECHOS</div><p> INVESTIGAN Y ARTICULAN SERVICIOS DE ASISTENCIA. VERIFICAN GARANTIA Y RESTABLECIMIENTO DE DERECHOS</p></td></tr></table>'+
'</div>'+
'</div>';

var denunciar =
'<table width="100%" align="center" border="0">'+
 '<tr>'+
        '<td align="center">Ingresa la informacion requerida</td>'+
    '</tr>'+
    '<tr>'+
        '<td align="center"><textarea id="descripcion" placeholder="Descripcion" class="caja-text"></textarea></td>'+
    '</tr>'+
    '<tr>'+
        '<td align="center"><select id="sexo" placeholder="Sexo" class="caja-text"><option>M</option><option>F</option></select></td>'+
    '</tr>'+
    '<tr>'+
        '<td align="center"><input id="edad" type="number" placeholder="Edad" class="caja-text"></td>'+
    '</tr>'+
    '<tr>'+
        '<td align="center"><input id="telefono" type="number" placeholder="Telefono" class="caja-text"></td>'+
    '</tr>'+
     '<tr>'+
        '<td align="center"></br><button onclick="enviarDenuncia()" class="btn-rec rojo" style="width:90%">ENVIAR DENUNCIA</button></td>'+
    '</tr>'+
'</table>'
;

var victima = '<div style="margin-left:23%;"><img src="images/victima.png" width="140px;"></div>'+
'<div style="background-color:#161324; width:100%; height:auto; padding:10px;">'+
'<div class="text-T">PERSONAL DEL PRIMER CONTACTO</div>'+
'<div class="cont-T">Detectan los casos (la familia, maestros, médicos, amigo, vecinos, policía, equipos psicosociales y comunidad en general).</div>'+

'<div class="text-T">PERSONAL DEL SEGUNDO CONTACTO</div>'+
'<div class="cont-T">Instituciones que brindan atención y apoyo a los niños en riesgo ( ICBF, Comisarias de Familia, casas de justicias, Fiscalia y ONG’S</div>'+

'<div class="text-T">PERSONAL DEL TERCER CONTACTO</div>'+
'<div class="cont-T">Amplia gama de servicios para restablecer derechos y capacidades de los niños, como son, los médicos, psicológos, coaiales, laborales financieros y de albergue.</div>'+

'</div>'+
'';

var calendarios = '<div id="contenido"></div>'+

'{{evento}}'
;

var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;
  clic = 1;
    if (hash === "#page1") {
        page = merge(detailsPage, {titulo: "CONOCE EL PROCESO",contenido:conoce});
//        slider.slide($(page), "right");
    } else if (hash === "#page2") {
        page = merge(detailsPage, {titulo: "DENUNCIAR",contenido:denunciar});
//        slider.slide($(page), "right");
    } else if (hash === "#page3") {
        page = merge(detailsPage, {titulo: "PROCESO DE ATENCION",contenido:victima});
//        slider.slide($(page), "right");
    }else if (hash === "#page4") {
        page = merge(detailsPage, {titulo: "CALENDARIO",contenido:calendarios,evento:cargarJornadas()});
//        slider.slide($(page), "right");
    }else {
        page = homePage;
//        slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{titulo}}", data.titulo)
                .replace("{{contenido}}", data.contenido)
                 .replace("{{evento}}", data.evento)
            ;              
}

route();


function cargaDenuncia(){

var carruselDenunciar = 

'<div class="titulosPreguntas">DONDE DENUNCIAR?</div>'+
'<div id="viewport">'+
    '<div id="wrapper">'+
        '<div id="scroller">'+
           ' <div class="slide">'+
              ' <img src="images/fiscalia.jpg" width="256px"></img>'+
              '<div class="texto">RECEPCIONA la denuncia, Remite al ICBF como medida de proteccion cuando la'+
                'victima es un NNA; Solicita dictamen a medicina legal, inicia las acciones judiciales'+
                'necesarias para la investigacion; Dicta medidas de proteccion provisionales, Remite al'+
                'sector salud.'+
                '</div>'+
            '</div>'+
            '<div class="slide">'+
                '<img src="images/policia.jpg" width="256px"></img>'+
                '<div class="texto">'+
'ORIENTA sobre las acciones legales a seguir; Recepciona quejas y denuncias; Acta de'+
'manera inmediata para garantizar los derechos de las victimas, pone el caso en'+
'conocimiento de las autoridades competentes; Orienta a la victima sobre la'+
'prevencion de las pruebas.'+
                '</div>'+
            '</div>'+
            '<div class="slide">'+
                '<img src="images/familia.jpg" width="256px"></img>'+
                '<div class="texto">'+
'RECEPCIONA el caso y orienta sobre las acciones legales a instaurar. Remite'+
'a la salud para la atenci?n de urgencia; Remite de oficio el caso a la Fiscalia '+
'o recibe la denuncia. Solicita dictamen a Medicina Legal. Toma medidas de '+
'proteccion.'+
                '</div>'+
            '</div>'+
            '<div class="slide">'+
                '<img src="images/salud.jpg" width="256px"></img>'+
                              '<div class="texto">'+
'BRINDA atencion en crisis; Brinda atenciin medica; Elabora la historia clinica; Pone en'+
'conocimiento el caso ante la Fiscalia, Comisaria de Familia y el ICBF; Brinda atenciin'+
'integral a trav?s de la Red de salud publica; Activacion de redes intersectoriales; Notifica '+
'al sistema de vigilancia; da aviso a las instituciones de proteccion cuando se trate de un '+
'NNA; Ordena examenes y controles.'+
                '</div>'+

            '</div>'+
            '<div class="slide">'+
                '<img src="images/icbf.jpg" width="256px"></img>'+
                                          '<div class="texto">'+
'RECEPCIONA el caso. Verifica garantia de derechos. Brinda atenci?n en crisis por parte'+
'del equipo interdisciplinario. Remite a Fiscalia y a salud para atencion urgente; Adopta'+ 
'medidas de restablecimiento de derechos para los niños, las niñas y adolescentes.' +
'Remite y gestiona atencion en servicios especializados.'+
                '</div>'+
            '</div>'+
            '<div class="slide">'+
                '<img src="images/medicinaLegal.jpg" width="256px"></img>'+
                                   '<div class="texto">'+
'REALIZA dictamen medico-legal. Recomienda otros examenes o actuaciones'+
'en salud. Remite el dictamen a Fiscal?a o Comisaria de Familia.'+
                '</div>'+
            '</div>'+
            '<div class="slide">'+
                '<img src="images/ministerio.jpg" width="256px"></img>'+
                '<div class="texto">'+
'(Procuraduria General de la Naci?n, Defensoria del Pueblo, Personeria)'+
'RECIBE Y TRAMITA las quejas y peticiones; Remite a la Fiscalia; Aboga por'+ 
'una atenci?n oportuna, promociona y divulga los derechos humanos.'+
                '</div>'+
            '</div>'+
            '<div class="slide">'+
                '<img src="images/educativas.jpg" width="256px"></img>'+
                '<div class="texto">'+
'IDENTIFICA los casos; notifica y pone en conocimiento de la Fiscalia o'+
'Comisaria de Familia; Gestiona el traslado de la victima a otra Institucion'+ 
'oEducativa de ser necesario; Gestiona la inclusin de la v?ctima a programas'+ 
'de re-vinculacion al sistema educativo; realiza seguimiento de casos.'+
                '</div>'+
            '</div>'+
            '<div class="slide">'+
                '<img src="images/civil.jpg" width="256px"></img>'+
                 '<div class="texto">'+
                 'IDENTIFICA los casos; activa las redes interinstitucionales para la atencion y el '+
'restablecimiento de derechos de las v?ctimas; Pone el caso en conocimiento de la'+
'Fiscalia o Comisaria de Familia; Remite a otras entidades o programas; Realiza '+
'actividades de promocion y prevencion : Acompaña y orienta a la victima.'+
                 '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'+

'<div id="indicator">'+
    '<div id="dotty"></div>'+
'</div>';

document.getElementById('light').style.display = 'block';
document.getElementById("contenido").innerHTML= carruselDenunciar;
loaded();
}

function ocultarVentana(){
 document.getElementById('light').style.display = 'none';   
}