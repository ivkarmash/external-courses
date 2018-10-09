var obj1 = {a: 1, name: "Ivan", value: true};
delete obj1['value'];
console.log(obj1);


var obj2 = {basicValue: undefined, b: false, 21: 3};
delete obj2.b;
console.log(obj2);