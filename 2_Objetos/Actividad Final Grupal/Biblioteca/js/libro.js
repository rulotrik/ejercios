var idL=0, contL=0;
var titulo="", autor="", editorial="";
var aL = [];

function Libro (idL, titulo, autor, editorial, biblioteca){
    this.idL = idL;
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.biblioteca=biblioteca;
    
    this.getId=function(){
        return this.idL;
    }
    
    this.getTitulo=function(){
        return this.titulo;
    }
    this.getAutor=function(){
        return this.autor;
    }
    this.getEditorial=function(){
        return this.editorial;
    }
    this.getBiblioteca=function(){
        return this.biblioteca;
    }
    this.setId=function(idL){
        this.idL=idL;
    }
    this.setTitulo=function(titulo){
        this.titulo=titulo;
    }
    this.setAutor=function(autor){
        this.autor=autor;
    }
    this.setEditorial=function(editorial){
        this.editorial=editorial;
    }
    
    this.setBiblioteca=function(biblioteca){
        this.biblioteca=biblioteca;
    }
}