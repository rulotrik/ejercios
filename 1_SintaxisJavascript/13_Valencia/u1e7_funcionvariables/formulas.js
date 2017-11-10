

function areaTriangulo(b, h) {
    'use strict';
    return (b * h) / 2;
}

function perimetroTrianguloEquilatero(l) {
    'use strict';
    return 3 * l;
}

function perimetroTrianguloIsosceles(b, h, c) {
    'use strict';
    return b + h + c;
}

function perimetroTrianguloEscaleno(b, h, c) {
    'use strict';
    return b + h + c;
}

function areaCuadrado(a) {
    'use strict';
    return a * a;
}

function perimetroCuadrado(a) {
    'use strict';
    return a * 4;
}

function areaRectangulo(b, h) {
    'use strict';
    return (b * h);
}

function perimetroCuadrado(a) {
    'use strict';
    return a * 4;
}

function areaCirculo(r) {
    'use strict';
    return Math.PI * (r * r);
}

function longitudCircunferencia(r) {
    'use strict';
    return 2 * Math.PI * r;
}

function perimetroTriangulo(a) {
    alert(a);
    perimetroTrianguloEquilatero(a);
}

function perimetroTriangulo(a, b) {
    alert(a);
    alert(b);
    perimetroTrianguloIsosceles(a, b);
}

function perimetroTriangulo(a, b ,c){

    if (b===undefined && c===undefined){
        alert(a);
        alert("Resultado: "+perimetroTrianguloEquilatero(a));
    } else if (c===undefined){
        alert(a);
        alert(b);
        alert("Resultado: "+perimetroTrianguloIsosceles(a, b));
    } else {
        alert(a);
        alert(b);
        alert(c);

        alert("Resultado: "+perimetroTrianguloEscaleno(a, b, c));
    }
}

function perímetroParalelogramo(a, b){
    if(b===undefined){
        alert("Resultado: "+perimetroCuadrado(a));
    } else {
        alert("Resultado: "+perimetroTriangulo(a, b));
    }
}