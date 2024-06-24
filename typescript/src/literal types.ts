// sometimes we have to limit the values assign to variables
// this is where we use literal type
// literal (exact, specific)

// let quantity : number = 10 ; instead of type annotation
// using literal type

// let quantity: 50 = 50; // now it can only be set to 50

// let quantity: 50 | 100 = 50; // we can use union operator 

// we can also cutom type the literal type 
type Quantity = 50 | 100;

let quantity: Quantity = 50;


