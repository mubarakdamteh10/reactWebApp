function map(f,a) {
    const result = new Array(a.length);
    for (let i = 0; i != a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}


function sumAllList(list) {
    return list.reduce((acc, item) => acc + item, 0);
}


const numbersList = [1, 2, 3, 4, 5];

function square(x) {
    return x + 1;
}

const numbers = [1, 2, 3, 4, 5,7];

const squaredNumbers = map(square, numbers);

console.log(squaredNumbers);

const sum = sumAllList(squaredNumbers);

console.log('sum list',sum);