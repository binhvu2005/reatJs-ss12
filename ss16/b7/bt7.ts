let num1: number = 10;
let num2: number = 5;
let num3: number;

num3 = num1 + num2;
console.log("Tổng:", num3);

num3 = num1 - num2;
console.log("Hiệu:", num3);

num3 = num1 * num2;
console.log("Tích:", num3);

num3 = num1 / num2;
console.log("Thương:", num3);

// doi thanh kieu giu lieu string
num1 = "20" as unknown as number;

// doi thanh kieu giu lieu boolean
num2 = true as unknown as number;

num3 = num1 + num2;
console.log("Tổng với kiểu dữ liệu không phù hợp:", num3);
