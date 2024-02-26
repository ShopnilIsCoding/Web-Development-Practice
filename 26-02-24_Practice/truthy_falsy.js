//console.log("OUTPUT :",[]+null+1)

let obj1 = { name: "John", age: 30 };
let obj2 = { name: "John", age: 30 };

function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    
    return true;
}

//console.log(compareObjects(obj1, obj2)); // Output: true



var print10=(a=0)=>a+10

console.log(print10(12));


