function flattenArray<T>(arr: (T | T[])[]): T[] {
    let flattened: T[] = [];

    for (let element of arr) {
        if (Array.isArray(element)) {
            flattened.push(...flattenArray(element));
        } else {
            flattened.push(element as T);
        }
    }

    return flattened;
}

let arr: (number | number[])[] = [1, [2, 5], 6];

console.log(flattenArray<number>(arr));
