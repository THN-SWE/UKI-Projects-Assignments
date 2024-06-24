type Employee = {
  readonly id: number;
  name: string;
  fax?: number; // ? means that is optional
  retire: (date: Date) => void;
};

// now we have a common place to define our object

let employee1: Employee = {
  id: 7,
  name: "Thulasikan",
  retire: (date: Date) => {
    console.log(date);
  },
};
