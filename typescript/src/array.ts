let numbers: number[] = [1, 2, 3, 4, 5];
// don't neccesarily put the type annotation
//   here since all elements are numbers
//  ts will automatically declare it

// let letters = []  // you don't want to this in typescript
// because it is now a normal js array
// type : any

let letters: string[] = []; // instead do this

numbers.forEach(n => {
    // another benifit of using ts is that you can now access
    // properties of elements of their respective type
    console.log(n.toString()); 
});
