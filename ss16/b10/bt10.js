"use strict";
function sum(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        if (isNaN(Number(a)) || isNaN(Number(b))) {
            return 'khong hop le';
        }
        else
            return Number(a) + Number(b);
    }
    else
        return Number(a) + Number(b);
}
function subtraction(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        if (isNaN(Number(a)) || isNaN(Number(b))) {
            return 'khong hop le';
        }
        else
            return Number(a) - Number(b);
    }
    else
        return Number(a) - Number(b);
}
function multi(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        if (isNaN(Number(a)) || isNaN(Number(b))) {
            return 'khong hop le';
        }
        else
            return Number(a) * Number(b);
    }
    else
        return Number(a) * Number(b);
}
function division(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        if (isNaN(Number(a)) || isNaN(Number(b))) {
            return 'khong hop le';
        }
        else
            return Number(a) / Number(b);
    }
    else
        return Number(a) / Number(b);
}
console.log(sum(1, "2"));
console.log(subtraction(1, "a"));
console.log(multi(1, 2));
console.log(division(1, 2));
