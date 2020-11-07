primitive = "this is a string"
obj = new String(primitive)
obj2 = obj
obj3 = new String(obj)

console.log(primitive == primitive)
console.log(primitive == obj)
console.log(primitive === primitive)
console.log(primitive === obj)
console.log(obj == obj2)
console.log(obj === obj2)
console.log(primitive === "this is a string")