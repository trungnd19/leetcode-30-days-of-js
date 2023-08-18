// Complexity Analysis
// Time complexity: O(1)O(1)O(1), where each operation (addition, subtraction, multiplication, division, power) are all constant-time operations.

// Space complexity: O(1)O(1)O(1), as the space required does not increase with the size of the input. 
// We only maintain a single variable result irrespective of the number of operations performed.
  
class Calculator {
  returnedValue: number;
    
  constructor(value : number) {
    this.returnedValue = value
  }
    
  add(value : number) : Calculator {
    return new Calculator(this.returnedValue + value)
  }
    
  subtract(value : number) : Calculator {
    return new Calculator(this.returnedValue - value)
  }
    
  multiply(value : number) : Calculator {
    return new Calculator(this.returnedValue * value)
  }

  divide(value : number) : Calculator {
    if(value === 0) {
      throw new Error("Division by zero is not allowed")
    }

    return new Calculator(this.returnedValue / value)
  }
    
  power(value : number) : Calculator {
    return new Calculator(Math.pow(this.returnedValue, value))
  }

  getResult() : number {
    return this.returnedValue   
  }
}
