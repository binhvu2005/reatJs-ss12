"use strict";
function mergeObjects(obj1, obj2) {
    let mergedObject = Object.assign(Object.assign({}, obj1), obj2);
    for (let key in obj1) {
        if (typeof obj1[key] === 'object' && obj1[key] !== null && !Array.isArray(obj1[key])) {
            mergedObject[key] = mergeObjects(obj1[key], obj2[key]);
        }
    }
    for (let key in obj2) {
        if (!(key in obj1) || (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key]))) {
            mergedObject[key] = mergeObjects(mergedObject[key] || {}, obj2[key]);
        }
    }
    return mergedObject;
}
let object1 = { a: 1, b: {}, c: 2, d: [3, 4] };
let object2 = { a: 5, b: { c: 6, d: [7, 8], e: {} }, g: 10, f: 9 };
console.log(mergeObjects(object1, object2));
