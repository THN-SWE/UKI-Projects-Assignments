// set the type of the parameter
// Best Practice alway set the return type of the funcition

// turned on in tsconfig
// "noUnusedParameters": true, => to warn unused parameters
// "noImplicitReturns": true, => to warn implicit return conflicts
// "noUnusedLocals": true, => to warn unsued local variables

function calculateTac(income: number, taxRate: number = 0.1): number {
  if (income > 50_000) {
    return income * 2 * taxRate;
  }
  // otherwise js always returns undefined
  // but it is conflicting with our return type
  else {
    return income * taxRate;
  }
}

// if we try to add more arguments ts will throw error
// but in js you can pass as much arguments as you wish
calculateTac(55000, 0.1); 