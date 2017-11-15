var sandskillArray = new Array();

function insertarObjInicio() {
    var nombre = prompt("Introduce el nombre");
    var edad = prompt("Introduce la edad");
    var especialidad = prompt("Introduce la especialidad");
    var companero = prompt("Introduce el companero");

    var sandskill = new Sandskill(nombre, edad, especialidad, companero);
    sandskillArray.unshift(sandskill);
}

function insertarObjIFinal() {
    var nombre = prompt("Introduce el nombre");
    var edad = prompt("Introduce la edad");
    var especialidad = prompt("Introduce la especialidad");
    var companero = prompt("Introduce el companero");

    var sandskill = new Sandskill(nombre, edad, especialidad, companero);
    sandskillArray.push(sandskill);
}

function borrarObjInicio() {
    sandskillArray.shift();
}

function borrarObjFinal() {
    sandskillArray.pop();
}

function mostrarArray() {
    for (i = 0; i < sandskillArray.length; i++) {
        alert(sandskillArray[i].getNom() + " * " + sandskillArray[i].getEdad() + " * " + sandskillArray[i].getEspecialidad() + " * ")
    }
}
//FALTA
function mostrarArrayOrdenado() {

    //Ordena el array teniendo en cuenta el nombre de cada objeto
    sandskillArray.sort(function (o1, o2) {
        if (o1.nombre > o2.nombre) {
            return 1;
        } else if (o1.nombre < o2.nombre) {
            return -1;
        }
        return 0;
    });
    
    for (i = 0; i < sandskillArray.length; i++) {
        alert(sandskillArray[i].getNom() + " * " + sandskillArray[i].getEdad() + " * " + sandskillArray[i].getEspecialidad() + " * ");
    }
}

function buscarObjParametro() {
    var paramBusqueda = prompt("Introduce el nombre a bucar");

    for (i = 0; i < sandskillArray.length; i++) {
        if (sandskillArray[i].getNom() == paramBusqueda) {
            alert(sandskillArray[i].getNom() + " * " + sandskillArray[i].getEdad() + " * " + sandskillArray[i].getEspecialidad() + " * ");
        }
    }
}

function buscarObjPosicion() {
    var paramPosicion = prompt("Introduce la posicion que quieres visualizar");
    paramPosicion = parseInt(paramPosicion);

    alert(sandskillArray[paramPosicion].getNom() + " * " + sandskillArray[paramPosicion].getEdad() + " * " + sandskillArray[paramPosicion].getEspecialidad() + " * ");
}
