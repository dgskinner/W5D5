obj = {
  name: "Earl Watts"
};

function greet(msg) {
  console.log(msg + ": " + this.name);
}

// obj.greet("Hello");

greet.apply(obj, ["hello"]);