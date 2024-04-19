"use strict";
function flattenArray(arr) {
    let flattened = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            flattened.push(...flattenArray(element));
        }
        else {
            flattened.push(element);
        }
    }
    return flattened;
}
let arr = [1, [2, 5], 6];
console.log(flattenArray(arr));
