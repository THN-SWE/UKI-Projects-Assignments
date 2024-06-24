type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// if (customer !== null && customer !== undefined){}
// instead we can use

// Optional property access operator

console.log(customer?.birthday); // so now this code will work if out put is not null nor undefined
