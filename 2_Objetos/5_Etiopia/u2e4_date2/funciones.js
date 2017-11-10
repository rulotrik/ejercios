//Milisegundos
function milisegundos(milisegundos) {
    var dms = new Date(milisegundos);
    //var time = new Date();
    //time = dms.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    alert("Fecha en formato corto: "+dms.getDate()+"-"+dms.getMonth()+"-"+dms.getYear()+"\nFecha en formato largo: "+dms.getDate()+"-"+dms.getMonth()+"-"+dms.getYear()+" "+dms.getHours()+":"+dms.getMinutes()+":"+dms.getSeconds()+"."+dms.getMilliseconds());
}

//Parametros
function parametros (dia, mes , ano){
    var dms = new Date();
    dms.setDate(dia); dms.setMonth(mes); dms.setFullYear(ano);  
    alert("Fecha en formato corto: "+dms.getDate()+"-"+dms.getMonth()+"-"+dms.getYear()+"\nFecha en formato largo: "+dms.getDate()+"-"+dms.getMonth()+"-"+dms.getYear()+" "+dms.getHours()+":"+dms.getMinutes()+":"+dms.getSeconds()+"."+dms.getMilliseconds());

}

//Funcion que comprueba si se trata de un numero lo introducido
function comprobacion(){
    var control = document.getElementById('cant_milisegundos');
    var numero = parseInt(control.value);
    if (isNaN(numero)){
        alert('No es una cantidad válida');
    } else {
        milisegundos(numero);
    }

}

//Funcion que comprueba si se trata de un numero los introducidos
function comprobacion2(){
    var dia = document.getElementById('dia');
    var mes = document.getElementById('mes');
    var ano = document.getElementById('ano');
    var numero1 = parseInt(dia.value);
    var numero2 = parseInt(mes.value);
    var numero3 = parseInt(ano.value);
    if (isNaN(numero1) && isNaN(numero2) && isNaN(numero3)){
        alert('No es una cantidad válida');
    } else {
        parametros(numero1, numero2, numero3);
    }

}

//Funcion que devuelve la hora que es en distintos formatos
function hora(){
    var f=new Date();
    var time = new Date();
    time = time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
    alert("Hora en formato corto: "+f.getHours()+":"+f.getMinutes()+"\nHora en formato largo: "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+"\nHora con PM/AM: "+time);
}
