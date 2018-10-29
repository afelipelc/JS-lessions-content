"use strict"

class Nodo {
  constructor(valor) {
    this.siguiente = null; // inicializamos el siguiente nodo
    this.valor = valor;
  }
  // crear un método que devuelva el siguiente Nodo
  getSiguiente() {
    return this.siguiente;
  }

  // método que asigne siguiente nodo
  setSiguiente(nodo) {
    this.siguiente = nodo;
  }
}

class Lista{
  constructor(){
    this.cabeza = null;
  }

  insertar(nodo) {
    // colocar el nuevo nodo
    // como cabeza
    nodo.setSiguiente(this.cabeza);
    this.cabeza = nodo;
  }

  recorrer(){
    // imprima los elementos de la lista
    if (!this.cabeza) {
      console.log("La lista está vacía");
      return;
    }

    let nodoActual = this.cabeza;
    while (nodoActual) {
      console.log(nodoActual.valor);
      // pasar al siguiente nodo
      nodoActual = nodoActual.getSiguiente();
    }
  }
}

class App {
  constructor(){
    this.lista = new Lista();
  }

  insertar(){
    const valor = prompt("Ingresa un valor");
    const nodo = new Nodo(valor);
    //insertar nodo en la lista
    this.lista.insertar(nodo);
  }

  menu() {
    // ciclar el menú
    const opcion = prompt("Ingresa 1 para insertar");
    switch (opcion) {
      case "1":
        this.insertar();
        break;
      case "2":
        this.lista.recorrer();
      default:
        break;
    }

    // simular recorrido
    this.lista.recorrer();
  }
}

const miApp = new App();
//miApp.menu(); //ejecutar app

const url_blog = 'https://blog.miapp.com/conoce-la-historia-de-la-arepa-en-su-dia-internacional/';
console.log(url_blog.split('/')[3]);


