/*<!-----as chaves tem que estar na sintaxe javasripts no lughar certo----->
function a (){
    return
    {/
        mane: "leandro"
    };

}

function b (){
    return{
        mane: "leandro"
    };

}
console.log(a());
console.log(b());*/

/*
var sum = 0;
    for (var i = 0; i < 10; i++){
        console.log(i);
    sum = sum + i;
    }
    console.log("soma de 0 ha 9" + sum);
*/
/*
var a = {x: 7, d: 8};
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log(a);
console.log(b);

b.d = 10;
console.log(a);
console.log(b);
*/

/* passar por referencia verssos valor 
function changePrimitive(primValue) {
    console.log("o valor sete esta apontando para a função ...");
    console.log("sete é a principal");
    console.log(primValue);

    primValue = 5;
    console.log("after:");
    console.log(primValue);
}

var value = 7;
changePrimitive(value); //primValue = value
console.log("aqui estar changPrimitive, orige de value");
console.log(value);*/
/*
function changObjecto(objValue){
    console.log("os objetos vamos ver  no quye dar");
    console.log("befory");
    console.log(objValue);

    objValue.x = 5;
    console.log("after");
    console.log(objValue);
}

var value = {x: 7};
changObjecto (value);
console.log("aqui estar o objValue de orige");
console.log(value);
*/
/*
var literalCircle = {
     radius: 10,

 getArea: function () {
    var self = this;
    console.log(this);
    
    var increaseRadios = function (){
        self.radius = 20;
    };
    increaseRadios();
    console.log(this.radius);
    return Math.PI * Math.pow(this.radius, 2);
 }
};
console.log(literalCircle.getArea());
*/
/*
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    console.log(this.name + " likes barking! Bark!");
  }
  
  var max = new Dog("Max", "Buddy");
  max.bark();*/
/*
  var array = new Array();
  array[0] = "leo";
  array[1] = 2;
  array[2] = function(name){
    console.log("Ola " + name, " tudo bom " + name);
  };
  array[3] = {course: "HTML, CSS & js"};

  console.log(array);
  array[2]("@Leo_244");
  console.log(array[3].course);*/

  /*  
  var names = [
    "Lenadro Souza", 
    "Katlhen Kelly", 
    "Joseane Ribeiro"];
  for ( var i = 0; i < names.length; i++){
    console.log ("olá " + names[i]);
  }
  names[100] =" is";
  for(var i = 0; i < names.length; i++){
    console.log("olá " + names[i]);
}*/

function makeMultiplier (multiplier){
  return(
    function (x) {
      return multiplier * x;
    }
  );
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));