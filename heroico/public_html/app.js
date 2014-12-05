window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var clic = 1;
function mostrarOcultarMenu(){ 
   if(clic===1){
     document.getElementById("menu").className = "menuCenter";
     clic = clic + 1;
   } else{
       document.getElementById("menu").className = "menuLeft";      
    clic = 1;

   } 

}
var homePage =
    '<div>' +
        '<div id="header">'+
              '<table width="100%" height="48px;" border="0"><tr><td width="54px"><button class="imgMenu" onclick="mostrarOcultarMenu();"></button></td>'+
              '<td><div id="title"><img src="images/logo.png" width="80%"></div></td><td width="54px"><a href="#page10"><div class="btn-der">Alerta Rapida</div></a></div></td></tr></table>'+    
         '</div>'+ 
         '<div id="curva-header"></div>'+   

          '<div id="wrapperP">'+
                   '<div class="scrollerAmarillo">'+
                       
                           '<div class="personaje-home">'+
                                 '<table><tr><td width="50%"><img src="images/personaje-home.png" width="200px;"></td>'+
                               '<td><div class="Text-Home"><img src="images/Text-Home.png" width="150px;"></div></td></tr></table>'+
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
                                        '<td align="center"><a href="#page2"><button class="btn-circ rojo">Donde denunciar?</button></a></td>'+
                                        '<td align="center"><a href="#page3"><button class="btn-circ rojo">Soy victima?</button></a></td>'+
                                        '<td align="center"><a href="#page4"><button class="btn-circ rojo">Jornadas y calendarios?</button></a></td>'+
                                        '</tr></table>'+
                                    '</div>'+

                           '</div>'+
                               

                                
                       
                  '</div>' +    
           '</div>' +


        '<div id="footer" class="naranja">'+
          '<div style="margin-left:5%;"><table width="90%" align="center" border="0"><tr><td width="80%" align="right"><button class="btn-rec blanco">HACER UN DENUNCIO</button></td><td align="center"><img src="images/Botonllamame.png" width="40px"></img> </td></tr></table></div>'+
        '</div>'+

            '<div id="light" class="modal">'+
                  '<div id="consultaProduto"></div>'+
                  
            '</div>'+

              
                
    '</div>';

var detailsPage =
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<img src="images/{{img}}"/>' +
                '<h2>{{name}}</h2>' +
                '<p>{{description}}</p>' +
            '</div>' +
        '</div>' +
    '</div>';


var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;
  clic = 1;
    if (hash === "#page1") {
        page = merge(detailsPage, {img: "buildbot.jpg", name: "Build Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page2") {
        page = merge(detailsPage, {img: "medibot.jpg", name: "Medi Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page3") {
        page = merge(detailsPage, {img: "ripplebot.jpg", name: "Ripple Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    }else if (hash === "#page4") {
        page = merge(detailsPage, {img: "ripplebot.jpg", name: "Ripple Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    }else {
        page = homePage;
//        slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description);
}

route();