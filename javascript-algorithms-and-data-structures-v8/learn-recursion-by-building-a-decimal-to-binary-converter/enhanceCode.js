const decimalToBinary = (input) => {
  const inputs = [];
    const quotients = [];
    const remainders = [];
  
    if (input === 0) {
      result.innerText = "0";
      return;
    }
  
    while (input > 0) {
      const quotient = Math.floor(input / 2);
      const remainder = input % 2;
  
      inputs.push(input);
      quotients.push(quotient);
      remainders.push(remainder);
      input = quotient;
    }
  
    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);
  
    result.innerText = remainders.reverse().join("");
  }