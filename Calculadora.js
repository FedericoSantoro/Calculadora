const uno = document.getElementById("uno"),
  dos = document.getElementById("dos"),
  tres = document.getElementById("tres"),
  cuatro = document.getElementById("cuatro"),
  cinco = document.getElementById("cinco"),
  seis = document.getElementById("seis"),
  siete = document.getElementById("siete"),
  ocho = document.getElementById("ocho"),
  nueve = document.getElementById("nueve"),
  cero = document.getElementById("cero"),
  masMenos = document.getElementById("masMenos"),
  punto = document.getElementById("punto"),
  divide = document.getElementById("divide"),
  raiz = document.getElementById("raiz"),
  por = document.getElementById("por"),
  porcentaje = document.getElementById("porcentaje"),
  menos = document.getElementById("menos"),
  unoDivide = document.getElementById("unoDivide"),
  mas = document.getElementById("mas"),
  igual = document.getElementById("igual"),
  CE = document.getElementById("CE"),
  C = document.getElementById("C"),
  pantalla = document.getElementById("pantalla"),
  retroceso = document.getElementById("retroceso");

let valorPantalla = "0",
  operacionAnterior = "no",
  escrito = true,
  valor,
  solucion,
  decimal = false;

const escribir = function (x) {
  if (valorPantalla == "0" || escrito == true) {
    if (x == ".") {
      pantalla.textContent = "0.";
      valorPantalla = valorPantalla + x;
      decimal = true;
    } else {
      pantalla.textContent = x;
      valorPantalla = x;
    }
  } else {
    if (x == "." && decimal == false) {
      pantalla.textContent = pantalla.textContent + x;
      valorPantalla = valorPantalla + x;
      decimal = true;
    } else if (x == "." && decimal == true) {
    } else {
      pantalla.textContent = pantalla.textContent + x;
      valorPantalla = valorPantalla + x;
    }
  }
  escrito = false;
};

const borrar = function (x) {
  if (x == 0) {
    valorPantalla = "0";
    valor = 0;
    decimal = false;
    operacionAnterior = "no";
  } else if (x == 1) {
    solucion = valorPantalla.substring(
      valorPantalla.length - 1,
      valorPantalla.length
    );
    if (solucion == ".") {
      decimal = false;
    }
    valorPantalla = valorPantalla.substring(0, valorPantalla.length - 1);
    if (valorPantalla.length == 0) {
      valorPantalla = "0";
    }
  } else {
    valorPantalla = "0";
    decimal = false;
  }
  pantalla.textContent = valorPantalla;
};

const operacion = function (x) {
  igualar();
  valor = Number(valorPantalla);
  operacionAnterior = x;
  escrito = true;
};

const igualar = function () {
  if (operacionAnterior == "no") {
    pantalla.textContent = valorPantalla;
  } else {
    solucion = valor.toString() + operacionAnterior + valorPantalla;
    solucion = eval(solucion);
    pantalla.textContent = solucion.toString();
    valorPantalla = solucion.toString();
    operacionAnterior = "no";
    escrito = true;
  }
};

const raices = function () {
  solucion = Math.sqrt(Number(valorPantalla));
  valorPantalla = solucion.toString();
  pantalla.textContent = valorPantalla;
};

const porciento = function () {
  solucion = Number(valorPantalla) / 100;
  valorPantalla = solucion.toString();
  pantalla.textContent = valorPantalla;
};

const division = function () {
  solucion = 1 / Number(valorPantalla);
  valorPantalla = solucion.toString();
  pantalla.textContent = valorPantalla;
};

const negar = function () {
  solucion = "0 - " + valorPantalla;
  solucion = eval(solucion);
  valorPantalla = solucion.toString();
  pantalla.textContent = valorPantalla;
};

uno.addEventListener("click", function () {
  escribir("1");
});
dos.addEventListener("click", function () {
  escribir("2");
});
tres.addEventListener("click", function () {
  escribir("3");
});
cuatro.addEventListener("click", function () {
  escribir("4");
});
cinco.addEventListener("click", function () {
  escribir("5");
});
seis.addEventListener("click", function () {
  escribir("6");
});
siete.addEventListener("click", function () {
  escribir("7");
});
ocho.addEventListener("click", function () {
  escribir("8");
});
nueve.addEventListener("click", function () {
  escribir("9");
});
cero.addEventListener("click", function () {
  escribir("0");
});
punto.addEventListener("click", function () {
  escribir(".");
});
C.addEventListener("click", function () {
  borrar(0);
});
retroceso.addEventListener("click", function () {
  borrar(1);
});
CE.addEventListener("click", function () {
  borrar(2);
});
mas.addEventListener("click", function () {
  operacion("+");
});
menos.addEventListener("click", function () {
  operacion("-");
});
por.addEventListener("click", function () {
  operacion("*");
});
divide.addEventListener("click", function () {
  operacion("/");
});
igual.addEventListener("click", igualar);
raiz.addEventListener("click", raices);
porcentaje.addEventListener("click", porciento);
unoDivide.addEventListener("click", division);
masMenos.addEventListener("click", negar);

window.onload = function () {
  document.onkeydown = teclaPulsada;
  
};

const teclaPulsada = function ( tecla ) {
  let pulsado = tecla.key.toString();
  if ( ( tecla.key >= 0 && tecla.key < 10 ) || ( tecla.key === "." ) ) {
    escribir (pulsado);
  }
  else if ( tecla.key === "+" || tecla.key === "-" || tecla.key === "*" || tecla.key === "/" ) {
    operacion (pulsado);
  }
  else if ( tecla.key === "Backspace"){
    borrar (1);
  }
  else if ( tecla.key === "Delete"){
    borrar (0);
  }
  else if ( tecla.key === "Home"){
    borrar (2);
  }
  else if ( tecla.key === "Enter"){
    igualar();
  }
  /*
  else if ( pulsado.toLowerCase() === "r" ){
    raices();
  }
  else if ( tecla.key === "Enter"){
    igualar();
  }
  */
}
