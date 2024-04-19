function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    let mergedObject :T & U = { ...obj1, ...obj2 };

    for (let key in obj1) {
        if (typeof (obj1 as any)[key] === 'object' && (obj1 as any)[key] !== null && !Array.isArray((obj1 as any)[key])) {
            mergedObject[key] = mergeObjects((obj1 as any)[key], (obj2 as any)[key]);
        }
    }

    for (let key in obj2) {
        if (!(key in obj1) || (typeof (obj2 as any)[key] === 'object' && (obj2 as any)[key] !== null && !Array.isArray((obj2 as any)[key]))) {
            mergedObject[key] = mergeObjects((mergedObject as any)[key] || {}, (obj2 as any)[key]);
        }
    }

    return mergedObject;
}

let object1 = { a: 1, b: {}, c: 2, d: [3, 4] };
let object2 = { a: 5, b: { c: 6, d: [7, 8], e: {} }, g: 10, f: 9 };

console.log(mergeObjects<object,object>(object1, object2));
