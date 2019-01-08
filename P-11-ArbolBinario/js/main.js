"use strict"

class NodoArbol {
  constructor(valor) {
    this.valor = valor;
    this.izquierdo = null; // NodoArbol
    this.derecho = null; // NodoArbol
  }

  insertar(valor) {
    if (valor <= this.valor) {
      if (!this.izquierdo) {
        this.izquierdo = new NodoArbol(valor);
      } else {
        this.izquierdo.insertar(valor);
      }
    } else { // si es >
      if (!this.derecho) {
        this.derecho = new NodoArbol(valor);
      } else {
        this.derecho.insertar(valor);
      }
    }
  }
}

class ArbolBinario {
  constructor(){
    this.raiz = null;
  }

  insertar(valor) {
    if (!this.raiz) { // si no hay raiz
      // insertar raiz
      this.raiz = new NodoArbol(valor);
    } else {
      this.raiz.insertar(valor);
    }
  }

  mostrar(raiz) {
    const uiItem = document.createElement('span');
    uiItem.classList.add("tree_item");

    if (!raiz) return uiItem;
    // generar el valor
    uiItem.classList.add("tree_line");
    const uiItemValor = document.createElement('span');
    const valor = document.createTextNode(raiz.valor);
    uiItemValor.appendChild(valor);
    uiItem.appendChild(uiItemValor);
    //generar el contenido
    const uiItemContent = document.createElement('div');
    uiItemContent.classList.add("tree_child");
    // obtener los elementos izq, der
    const uiItemLeft = this.mostrar(raiz.izquierdo);
    uiItemContent.appendChild(uiItemLeft);

    const uiItemRight = this.mostrar(raiz.derecho);
    uiItemContent.appendChild(uiItemRight);

    // generar elemento
    uiItem.appendChild(uiItemContent);

    // console.log(uiItem);

    return uiItem;
  }
}

(function(){ // representar la UI
  // atributos
  const arbolBinario = new ArbolBinario();
  const valorTxt = document.getElementById('valorInput');
  const agregarBtn = document.getElementById('btn-agregar');
  const arbol = document.getElementById('arbol');
  // agregar los demas atributos

  // Acciones
  const agregar = function() {
    // leer el txt
    // console.log( valorTxt.value );            @afelipelc
    // llamar a arbol.insertar( nodo )              HOLA :)
    arbolBinario.insertar(parseInt(valorTxt.value, 10));
    // llamar a UI.mostrar()
    mostrar();
    // limpiar el txt
    valorTxt.value = '';
  };


  const mostrar = function() {
    // limpiar arbol
    arbol.innerHTML = '';
    // llamar a arbol.mostrar()
    // esperar respuesta de arbol.mostrar()
    arbol.appendChild(arbolBinario.mostrar(arbolBinario.raiz));
  };

  // implementar las demás acciones

  /// ----- Asociar cada control a una acción de la UI
  agregarBtn.addEventListener('click', agregar);
  // asociar los demás controles a su acción
}());
