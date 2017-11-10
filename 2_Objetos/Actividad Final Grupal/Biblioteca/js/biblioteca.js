var idB=0, nLibros=0, contB=0;
var  nombre="", localidad="", responsable="";
var aB = [];

function Biblioteca(idB, nombre, localidad, responsable, nLibros){
    this.idB=idB;
    this.nombre=nombre;
    this.localidad=localidad;
    this.responsable=responsable;
    this.nLibros=nLibros;
    
    this.getId = function(){
        return this.idB;
    }
     this.getNombre = function(){
        return this.nombre;
    }
      this.getLocalidad = function(){
        return this.localidad;
    }
       this.getResponsable = function(){
        return this.responsable;
    }
        this.getNLibros = function(){
        return this.nLibros;
    }
    this.setId = function(idB){
        this.idB = idB;
    }
    this.setNombre = function(nombre){
        this.nombre = nombre;
    }
    this.setLocalidad = function(localidad){
        this.localidad = localidad;
    }
    this.setResponsable = function(responsable){
        this.responsable=responsable;
    }
    this.setNLibros = function(nLibros){
        this.nLibros=nLibros;
    }
}