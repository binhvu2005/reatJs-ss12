function sum<T , U>(a:T|U,b:T|U):T|string|number{
    if (typeof a === 'string' || typeof b === 'string'){
        if (isNaN(Number(a)) || isNaN(Number(b))){
            return 'khong hop le';
        }
        else
            return Number(a) + Number(b);
    }
    else 
        return Number(a) + Number(b); 
}
function subtraction<T , U>(a:T|U,b:T|U):T|string|number{
    if (typeof a === 'string' || typeof b === 'string'){
        if (isNaN(Number(a)) || isNaN(Number(b))){
            return 'khong hop le';
        }
        else
            return Number(a) - Number(b);
    }
    else 
        return Number(a) - Number(b); 
}

function multi<T , U>(a:T|U,b:T|U):T|string|number{
    if (typeof a === 'string' || typeof b === 'string'){
        if (isNaN(Number(a)) || isNaN(Number(b))){
            return 'khong hop le';
        }
        else
            return Number(a) * Number(b);
    }
    else 
        return Number(a) * Number(b); 
}

function division<T , U>(a:T|U,b:T|U):T|string|number{
    if (typeof a === 'string' || typeof b === 'string'){
        if (isNaN(Number(a)) || isNaN(Number(b))){
            return 'khong hop le';
        }
        else
            return Number(a) / Number(b);
    }
    else 
        return Number(a) / Number(b); 
}

console.log(sum<number,string>(1,"2"));
console.log(subtraction<number,string>(1,"a"));
console.log(multi<number,string>(1,2));
console.log(division<number,string>(1,2));



