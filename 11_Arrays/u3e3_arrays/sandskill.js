function Sandskill(nom, edad, especialidad, comp){
    this.nombre = nom;
    this.edad = edad;
    if(especialidad == 1 || especialidad == 2 || especialidad == 3){
        if(especialidad == 1)
            this.especialidad = "sistemas";
        if(especialidad == 2)
            this.especialidad = "web";
        if(especialidad == 3)
            this.especialidad = "multiplataforma";
    }else{
        this.especialidad = null;
    }
    this.comp = comp;

    //SETTER
    this.setId = function(idB){
        this.idB = idB;
    }

    this.setNombre = function(nombre){
        this.nombre = nombre;
    }

    this.setEdad = function(edad){
        this.edad = edad;
    }

    this.setEspecialidad = function(espacialidad){
        if(especialidad == 1 || especialidad == 2 || especialidad == 3){
            if(especialidad == 1)
                this.especialidad = "sistemas";
            if(especialidad == 2)
                this.especialidad = "web";
            if(especialidad == 3)
                this.especialidad = "multiplataforma";
        }else{
            this.especialidad = null;
        }
    }

    this.setEspecialidadNombre = function(especialidadNom){
        if(especialidadNom.toLowerCase() == "sistemas" || especialidadNom.toLowerCase() == "web" || especialidadNom.toLowerCase() == "multiplataforma"){
            if(especialidadNom.toLowerCase() == "sistemas")
                this.especialidad = 1;
            if(especialidadNom.toLowerCase() == "web")
                this.especialidad = 2;
            if(especialidadNom.toLowerCase() == "multiplataforma")
                this.especialidad = 3;
        }else{
            this.especialidad = null;
        }
    }

    this.setComp = function(comp){
        this.companero = comp;
    }


    //GETTER
    this.getNom=function(){
        return this.nombre;
    }
    this.getEdad=function(){
        return this.edad;
    }
    this.getEspecialidad=function(){
        return this.especialidad;
    }
    this.getComp=function(){
        return this.comp;
    }

    //Devuelve el nombre del compañero que tiene asociado el objeto
    this.getNombreCompanero=function(){
        return this.comp.getNom();
    }

    //Devuelve todos los valores del objeto asociado
    this.getCompanero=function(){
        return this.getComp().getNom()+" "+this.getComp().getEdad()+" "+this.getComp().getEspecialidad()+" "+this.getComp().getComp();
    }

    //Devuelve todda la informacion del objeto
    this.mostrar = function(){
        return this.getNom() +" "+this.getEdad()+" "+this.getEspecialidad()+" /// Compañero: "+this.getComp().getNom();
    }
}