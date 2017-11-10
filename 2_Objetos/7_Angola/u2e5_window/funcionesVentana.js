var win;

//Funcion que crea una ventana y le añade un evento de escucha que impide que la pagina pueda redimensionarse
function createWindow(src, width, height){
    win = window.open(src, "_blank", "width="+width+",height="+height);
    win.document.write("<script src='funcionesVentana.js'></script> <button onclick='opener.parrafoColor(\"Rojo\")'>Rojo</button><button onclick='opener.parrafoColor(\"Azul\")'>Azul</button><button onclick='opener.parrafoColor(\"Verde\")'>Verde</button><button onclick='opener.parrafoColor(\"Amarillo\")'>Amarillo</button><button onclick='opener.parrafoColor(\"Rosa\")'>Rosa</button><button onclick='opener.parrafoColor(\"Negro\")'>Negro</button></br></br> X: <input type='text' id='x' value='0'><br>Y: <input type='text' id='y' value='0'><br><button onclick='situarVentana()'>Aplicar</button></br></br><button onclick='window.close()'>Cerrar ventana</button>");
    win.moveTo(450,250);
    win.addEventListener("resize", function(){
        win.resizeTo(width, height);
    });
}

//Funcion que hace que la ventana se cierre
function cerrarVentana(){
    win.close();
}

//Funcion que imprime la propia ventana
function imprimir(){
    win.print();
}

//Dependiendo del boton pulsado mostrara el nombre de ese boton
function parrafoColor(color){
    document.write("<p>"+color+"</p>");
}

//Situa la ventana en la posicion indicada
function situarVentana(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    window.moveTo(x,y);
}