let employee: {
  readonly id: number;
  name: string,
  fax?: number, // ? means that is optional
  retire: (date: Date) => void; 
} = {
  id: 7,
  name: "Thulasikan",
  retire: (date: Date) =>{
    console.log(date);  
  }
};

//  employee.id = 0; // to avoid this, use readonly modifier

// so there are some problems in this implementation
// 1 => if you want to create another object , have to redo all this. 
// always follow DRY - Don't repeat yourself

// 2 => the other employee object may have some other properties/ methods
// because we don't have a single place to define the object

// this is where we use type alias

