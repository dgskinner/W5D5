Function.prototype.myBind = function (context){
  var fn = this // function we want to bind
  return function () { 
    fn.apply(context);
  }
};

obj = {
  name: "Earl Watts"
};

function greet() {
  console.log( "My name is: " + this.name);
}


// function greet2(msg) {
//   console.log( msg + ": " + this.name);
// }

console.log(greet.myBind(obj));
// greet2.myBind(obj)("binding in action")