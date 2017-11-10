//CARGA INICIAL DE DATOS
function cargaInicial(){
   
    var bib = new Biblioteca(idBib,"Biblioteca Municipal de Laredo","Laredo","Antonio", 2);
    aB.push(bib);
    idBib++;
     listBibliotecas();
    var lib1 = new Libro(idLib,"La luna","Ana Rosa","ISBN",bib);
    aL.push(lib1);
     idLib++;
     var lib2 = new Libro(idLib,"El sol","Ana Rosa","ISBN",bib);
    aL.push(lib2);
    idLib++;
    listLibro();
   
    var soc1 =  new Socio(idSoc,"Pablo","Lopez",6,bib,lib1);
    personas.push(soc1);
    idSoc++;
     var soc2 =  new Socio(idSoc,"Teresa","Martin",22,bib,null);
     personas.push(soc2);
    idSoc++;
    listSocio();
}
var idSoc=1;
var idBib=1;
var idLib=1;
//FUNCIONES DE MANEJO DE BIBLIOTECA
function newBiblioteca() {
    var biblio= new Biblioteca() ;
    biblio.idB=idBib;
    biblio.nombre=prompt("Teclea el nombre de la biblioteca");
    biblio.localidad=prompt("Teclea la localidad de la biblioteca");
    biblio.responsable=prompt("Teclea el nombre del responsable de la biblioteca");
    biblio.setNLibros(0);
    //biblio.nLibros=prompt("Teclea el número de libros de la biblioteca");
    aB[contB]=biblio;
    contB++;
    idBib++;
    alert("Datos registrados con éxito");
    listBibliotecas();
}
function updateBiblioteca(){
    var idModificar = prompt("Introduce el id de la biblioteca a modificar");
    for (i=0;i<aB.length;i++) {
        if(idModificar == aB[i].idB){
            alert("Se modificará la biblioteca con el id " + aB[i].idB);
            //aB[i].id=prompt("Teclea el identificador de la biblioteca");
            aB[i].nombre=prompt("Teclea el nombre de la biblioteca");
            aB[i].localidad=prompt("Teclea la localidad de la biblioteca");
            aB[i].responsable=prompt("Teclea el nombre del responsable de la biblioteca");
            /*aB[i].nLibros=prompt("Teclea el número de libros de la biblioteca");*/
        }
    }
    listBibliotecas();
}
function deleteBiblioteca(){
    var idModificar = prompt("Introduce el id de la biblioteca a modificar");
    for (i=0;i<aB.length;i++) {
        if(idModificar == aB[i].idB){
            /*alert("Se modificará la biblioteca con el id " + aB[i].idB);
            aB[i].idB=prompt("Teclea el identificador de la biblioteca");
            aB[i].nombre=prompt("Teclea el nombre de la biblioteca");
            aB[i].localidad=prompt("Teclea la localidad de la biblioteca");
            aB[i].responsable=prompt("Teclea el nombre del responsable de la biblioteca");
            aB[i].nLibros=prompt("Teclea el número de libros de la biblioteca");*/
            if(confirm("¿Borrar biblioteca?")){
                aB.splice(i,1);
            }
        }
    }
    listBibliotecas();
}
function findBiblioteca(){
    var idBusqueda = prompt("Introduce el id de la biblioteca a buscar");
    for (i=0;i<aB.length;i++) {
        if(idBusqueda == aB[i].idB){
            alert("Registro de bibliotecas: \nID: "+aB[i].idB+"\nNOMBRE:"+aB[i].nombre+"\nLOCALIDAD: "+aB[i].localidad+"\nRESPONSABLE: "+aB[i].responsable+"\nNº LIBROS:"+aB[i].nLibros);
        }
    }
}
function listBibliotecas(){
    //var literal = "<h5>- BIBLIOTECA -</h5>";
    var literal="<tr><th>ID</th><th>Nombre</th><th>Localidad</th><th>Responsable</th><th>Cantidad de libros</th></tr>";
    for (i=0;i<aB.length;i++) {
        /*literal += "<p>ID: "+aB[i].idB+" NOMBRE:      "+aB[i].nombre+" LOCALIDAD: "+aB[i].localidad+" RESPONSABLE: "+aB[i].responsable+" CANTIDAD LIBROS: "+aB[i].nLibros+"</p>";*/
        literal+="<tr><td>"+aB[i].idB+"</td><td>"+aB[i].nombre+"</td><td>"+aB[i].localidad+"</td><td>"+aB[i].responsable+"</td><td>"+aB[i].nLibros+"</tr>";
    }
    document.getElementById("bibliotecas").innerHTML = literal;
}
//FUNCIONES DE MANEJO DE SOCIO
var personas = [];
function newSocio(){
    var biblioEncontrada=false;
    var libroEncontrado=false;
    var nombre = prompt("Introduzca su nombre: ");
    var apellido = prompt("Introduzca su apellido: ");
    var edad = prompt("Introduzca su edad: ");
    var biblio = prompt("Introduzca id de la biblioteca: ");
    var libro = prompt("Introduzca id de la libro: ");
    var biblioObj;
    var libroObj;
    for(var i=0;i<aB.length;i++){
        if(biblio==aB[i].getId()){
            biblioEncontrada=true;
            biblioObj=aB[i];
        }
    }
    for(var i=0;i<aL.length;i++){
        if(libro==aL[i].getId()){
            libroEncontrado=true;
            libroObj=aL[i];

        }
    }
    if(libroEncontrado && biblioEncontrada){
        var s = new Socio(idSoc,nombre,apellido,edad,biblioObj,libroObj);
        idSoc++;
        personas.push(s);
        listSocio();
    }else{
        alert("No se ha encontrado libro o biblioteca con el identificador especificado.");
    }
}
function updateSocio(){
    var encontrado=false;
    var id = prompt("Introduzca el id del socio que quiere modificar: ");
    for(var i=0; i<personas.length;i++){
        if(id==personas[i].getId()){
            var nombre = prompt("Introduzca su nombre: ");
            var apellido = prompt("Introduzca su apellido: ");
            var edad = prompt("Introduzca su edad: ");
            var biblio = prompt("Introduzca id de la biblioteca: ");
            var libro = prompt("Introduzca id de la libro: ");
            var biblioObj;
            var libroObj;
            for(var i=0;i<aB.length;i++){
                if(biblio==aB[i].getId()){
                    biblioEncontrada=true;
                    biblioObj=aB[i];
                }
            }
            for(var i=0;i<aL.length;i++){
                if(libro==aL[i].getId()){
                    libroEncontrado=true;
                    libroObj=aL[i];
                }
            }
            encontrado=true;
            if(libroEncontrado && biblioEncontrada){
                var s = new Socio(id, nombre, apellido, edad,  biblioObj, libroObj);
                personas[i]=s;
            }else{
                alert("No se ha encontrado libro o biblioteca con el identificador especificado.");
            }
        }

    }

    if(!encontrado){
        alert("No se ha encontrado ningún usuario con el ID.");
    }else{
        listSocio();    
    }
}

function deleteSocio(){
    var encontrado=false;
    var id = prompt("Introduzca el id del socio que quiere eliminar: ");
    for(var i=0; i<personas.length;i++){
        if(id==personas[i].getId()){
            if(confirm("¿Borrar socio?")){
                personas.splice(i,1); 
            }
            encontrado=true;

        }
    }
    if(!encontrado){
        alert("No se puede borrar el socio introducido porque no existe.");
    }else{
        listSocio();    
    }
}

function findSocio(){
    var id = prompt("Introduzca el id del socio que quiere buscar: ");
    for(var i=0; i<personas.length;i++){
        if(id==personas[i].getId()){
            alert("Registro del socio:\n\tID: "+personas[i].getId()+"\n\tNombre: "+personas[i].getNombre()+"\n\tApellido: "+personas[i].getApellido()+"\n\tEdad: "+personas[i].getEdad()+"\n\tBiblioteca: "+personas[i].getBiblioteca().getNombre()+"\n\tLibro: "+personas[i].getLibro().getTitulo());
        }
    }

}

function listSocio(){
     //document.getElementById("f1c2").innerHTML = "<h5>- SOCIOS -</h5>";
    var literal =" <tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Biblioteca</th><th>Libro prestado</th></tr>";
   document.getElementById("socios").innerHTML=literal;
    for(var i=0; i<personas.length; i++){
        personas[i].mostrar();
    }
}
//FUNCIONES DE MANEJO DE LIBRO
function newLibro(){
    var biblioEncontrada=false;
    var libro= new Libro() ;
    libro.idL=idLib;
    libro.titulo=prompt("Teclea el titulo del libro");
    libro.autor=prompt("Teclea el autor del libro");
    libro.editorial=prompt("Teclea la editorial del libro");
    var biblio=prompt("Introduzca identificador de biblioteca");

    for(var i=0;i<aB.length;i++){
        if(biblio==aB[i].getId()){
            biblioEncontrada=true;
            aB[i].setNLibros(parseInt(aB[i].getNLibros())+1);
            libro.setBiblioteca(aB[i]);
        }
    }
    if(biblioEncontrada){
        aL[contL]=libro;
        contL++;
        idLib++;

        alert("Datos registrados con éxito");
        listLibro();
    }else{
        alert("No se ha podido añadir el libro porque no se ha encontrado ninguna biblioteca dónde guardarlo...");
    }
    listBibliotecas();

}
function updateLibro(){
    var biblioEncontrada=false;
    var idModificar = prompt("Introduce el id del libro a modificar");
    for (i=0;i<aL.length;i++) {
        if(idModificar == aL[i].idL){
            alert("Se modificará el libro con id " + aL[i].idL);
            //aL[i].idL=prompt("Teclea el identificador del libro");
            aL[i].titulo=prompt("Teclea el titulo del libro");
            aL[i].autor=prompt("Teclea el autor del libro");
            aL[i].editorial=prompt("Teclea la editorial del libro");
            var biblio=prompt("Introduzca identificador de biblioteca");

            for(var j=0;j<aB.length;j++){
                if(biblio==aB[j].getId()){
                    biblioEncontrada=true;
                    // alert("Libros en biblio antigua: "+aL[i].getBiblioteca().getNLibros());
                    //alert("Libros en biblio nueva: "+aB[j].getNLibros());
                    aL[i].getBiblioteca().setNLibros(parseInt(aL[i].getBiblioteca().getNLibros())-1);
                    aB[j].setNLibros(parseInt(aB[j].getNLibros())+1);
                    aL[i].setBiblioteca(aB[j]);
                    //alert("POST: Libros en biblio antigua: "+aL[i].getBiblioteca().getNLibros());
                    //alert("POST: Libros en biblio nueva: "+aB[j].getNLibros());
                }
            }
        }
    }
    listLibro();
    listBibliotecas();
}
function deleteLibro(){
    var idBorrar = prompt("Introduce el id del libro a borrar");
    for (i=0;i<aL.length;i++) {
        if(idBorrar == aL[i].idL){
            if(confirm("Se eliminará el libro con el id " + aL[i].idL)){
                aL[i].getBiblioteca().setNLibros(parseInt(aL[i].getBiblioteca().getNLibros())-1);
                aL.splice(i,1);
            }
        }
    }
    listLibro();
    listBibliotecas();
}
function findLibro(){
    var idBusqueda = prompt("Introduce el id del libro a buscar");
    for (i=0;i<aL.length;i++) {
        if(idBusqueda == aL[i].idL){
            alert("Registro del libro: \n\tID: "+aL[i].idL+"\n\tTITULO: "+aL[i].titulo+"\n\tAUTOR: "+aL[i].autor+"\n\tEDITORIAL"+aL[i].editorial+"\n\tBIBLIOTECA: "+aL[i].getBiblioteca().getNombre());
        }
    }
}
function listLibro(){
    //var literal = "<h5>- LIBRO -</h5>";
    var literal="<tr><th>ID</th><th>Titulo</th><th>Autor</th><th>Editorial</th><th>Biblioteca</th></tr>";
    for (i=0;i<aL.length;i++) {
        /*literal += "<p>ID: "+aL[i].idL+" TITULO:      "+aL[i].titulo+" AUTOR: "+aL[i].autor+" EDITORIAL: "+aL[i].editorial+" BIBLIOTECA: "+aL[i].getBiblioteca().getNombre()+"</p>";*/
        literal+="<tr><td>"+aL[i].idL+"</td><td>"+aL[i].titulo+"</td><td>"+aL[i].autor+"</td><td>"+aL[i].editorial+"</td><td>"+aL[i].getBiblioteca().getNombre()+"</tr>";
    }
    document.getElementById("libros").innerHTML = literal;
}
