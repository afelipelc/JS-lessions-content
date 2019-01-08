"use strict"

class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null; // Nodo
  }
  setSiguiente(nodo){
    this.siguiente = nodo;
  }
}

class Cola {
  constructor(){
    this.frente = null;
  }

  insertar(nodo) {
    if (!this.frente) { // si no hay frente
      // insertar frente
      this.frente = nodo;
    } else {
      // si ya hay un frente, insertar al final
      let nodoActual = this.frente;
      
      // mientras nodoActual.siguiente tenga valor o sea 
      // diferente de null y undefinied
      // tomar el siguiente nodo
      // -ver quien sigue-
      while(nodoActual.siguiente) {
        nodoActual = nodoActual.siguiente;
      }

      // insertar el nuevo nodo al final
      nodoActual.siguiente = nodo;
    }
  }

  mostrar() {
    //console.log(this.frente);
    // recorrer los nodos, y por cada nodo agregarlo
    // a una array que vamos a devolver al final
    const nodos = [];

    let nodoActual = this.frente;
    while(nodoActual) {
      nodos.push(nodoActual); 
      nodoActual = nodoActual.siguiente;
    }

    return nodos;
  }

  contar() {

  }

  extraer() {
    let nodoActual = this.frente;
    if(!this.frente){
       
    }
    else
    {
      this.frente=nodoActual.siguiente;
      return nodoActual.valor;
    }

  }

  colaVacia() {

  }

  vaciar() {

  }

  buscar(valor) {

  }

  tamano() {

  }
}

(function(){ // representar la UI
  // atributos
  const cola = new Cola();
  const valorTxt = document.getElementById('valorInput');
  const agregarBtn = document.getElementById('btn-agregar');
  const lista = document.getElementById('lista');
  // agregar los demas atributos

  // Acciones
  const agregar = function() {
    // leer el txt
    // console.log( valorTxt.value );            @afelipelc
    // llamar a cola.insertar( nodo )              HOLA :)
    cola.insertar(new Nodo( valorTxt.value ));
    // esperar respuesta de insertar
    console.log(cola);
    // llamar a UI.mostrar()
    mostrar();
    // limpiar el txt
    valorTxt.value = '';
  };

  const extraer = function() {

  };

  const mostrar = function() {
    // limpiar lista
    lista.innerHTML = '';
    // llamar a cola.mostrar()
    // esperar respuesta de cola.mostrar
    const nodos = cola.mostrar();
    // recorrer la lista de nodos a mostrar
    nodos.forEach((nodo) => {

      const liItem = document.createElement('li');
      const valor = document.createTextNode(nodo.valor);
      liItem.appendChild(valor);

      // mandarlos a la lista
      lista.appendChild(liItem);
    });
    // ->>  pintar en nodo en la UI.lista
  };

  // implementar las demás acciones

  /// ----- Asociar cada control a una acción de la UI
  agregarBtn.addEventListener('click', agregar);
  // asociar los demás controles a su acción

}());
