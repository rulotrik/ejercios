
function Socio (id,nombre,apellido, edad, biblioteca, libro){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.biblioteca=biblioteca;
    this.libro=libro;
    
    /*Getter and Setter*/
    this.getId = function(){
        return this.id;
    }
    this.getNombre = function(){
        return this.nombre;
    }
    this.getApellido = function(){
        return this.apellido;
    }
    this.getEdad = function(){
        return this.edad;
    }
     this.getBiblioteca = function(){
        return this.biblioteca;
    }
      this.getLibro = function(){
        return this.libro;
    }
    this.setId = function(id){
        this.id = id;
    }
    this.setNombre = function(nombre){
        this.nombre = nombre;
    }
    this.setApellido = function(apellido){
        this.apellido = apellido;
    }

    this.setEdad = function(edad){
        this.edad = edad;
    }
    this.mostrar = function(){
          /* document.getElementById("f1c2").innerHTML += "<br>ID: "+this.getId()+". Nombre: "+this.getNombre()+". Apellido: "+this.getApellido()+". Edad: "+this.getEdad()+". Biblioteca: "+this.getBiblioteca().getNombre()+". Libro: "+this.getLibro().getTitulo();*/
        document.getElementById("socios").innerHTML+="<tr><td>"+this.getId()+"</td><td>"+this.getNombre()+"</td><td>"+this.getApellido()+"</td><td>"+this.getEdad()+"</td><td>"+this.getBiblioteca().getNombre()+"</td><td>"+this.getLibro().getTitulo()+"</td></tr>";

    }
}