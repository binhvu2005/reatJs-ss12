"use strict";
function ac(value, index1, index2) {
    if (index1 > 0 && index1 < value.length && index2 < value.length && index2 > 0) {
        let temp = value[index1];
        value[index1] = value[index2];
        value[index2] = temp;
        return value;
    }
}
