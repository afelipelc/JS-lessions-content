// source: https://www.dofactory.com/javascript/singleton-design-pattern

var Singleton = (function () {
  var instance;

  function createInstance() {
      var object = new Object(`I am the instance ${Math.random()}`);
      return object;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();

const singleA = Singleton.getInstance();
console.log(singleA);
// console.log(singleA.getInstance());
console.log(Singleton.getInstance());
console.log(Singleton.getInstance());
