// with union types we can give a variable/function parameter more than one type

function kgToLbs(weight: number | string): number{
    // narrowing
    if (typeof weight === 'number' ){
        return weight * 2.2;
    }
    else{
        return parseInt(weight) * 2.2;
    }
}
// can be string or number
console.log(kgToLbs(10));
console.log(kgToLbs('20'));
