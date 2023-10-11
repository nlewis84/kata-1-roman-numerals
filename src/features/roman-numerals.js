const readline = require('readline');

const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const convertRomanToNumber = (romanNumeral) => {
  romanNumeral = romanNumeral.toUpperCase();
  let convertedNumber = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
      const currentValue = romanNumerals[romanNumeral[i]];
      const nextValue = romanNumerals[romanNumeral[i + 1]] || 0;

      // Check if the current numeral is valid
      if (!currentValue) {
          throw new Error(`${romanNumeral[i]} is not a valid Roman numeral.`);
      }

      // Check for two or more of the non-repeatable numerals in a row
      if (["V", "L", "D"].includes(romanNumeral[i]) && romanNumeral[i] === romanNumeral[i + 1]) {
        throw new Error(`Invalid sequence found: ${romanNumeral.substring(i, i + 2)}`);
      }

      // Check for four of the same numerals in a row (e.g., "IIII")
      if (i < romanNumeral.length - 3 
          && romanNumeral[i] === romanNumeral[i + 1] 
          && romanNumeral[i] === romanNumeral[i + 2] 
          && romanNumeral[i] === romanNumeral[i + 3]) {
          throw new Error(`Invalid sequence found: ${romanNumeral.substring(i, i + 4)}`);
      }

      convertedNumber += currentValue < nextValue ? -currentValue : currentValue;
  }

  return convertedNumber;
}


const convertNumberToRoman = (number) => {
  if (number <= 0 || number > 3999) {
    throw new Error(`${number} cannot be converted to a standard Roman numeral.`);
  }

  let convertedRomanNumeral = '';
  
  const numerals = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
  ];
  
  for (const [roman, value] of numerals) {
      while (number >= value) {
          convertedRomanNumeral += roman;
          number -= value;
      }
  }

  return convertedRomanNumeral;
}

// Check if the input is a number
const isNumeric = (value) => {
  return /^\d+$/.test(value);
}

const main = () => {
const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  // Display the ASCII art
  console.log(`
                                     ___---___
                               ___---___---___---___
                         ___---___---         ---___---___
                   ___---___---                      ---___---___
             ___---___---                                  ---___---___
       ___---___---                                              ---___---___
  __---___---_________________________________________________________---___---__
  ===============================================================================
   ||||                                                                     ||||
   |---------------------------------------------------------------------------|
   |___-----___-----___-----___-----___-----___-----___-----___-----___-----___|
   / _ \\===/ _ \\   / _ \\===/ _ \\   / _ \\===/ _ \\   / _ \\===/ _ \\   / _ \\===/ _ \\ 
  ( (.\\ oOo /.) ) ( (.\\ oOo /.) ) ( (.\\ oOo /.) ) ( (.\\ oOo /.) ) ( (.\\ oOo /.) )
   \\__/=====\\__/   \\__/=====\\__/   \\__/=====\\__/   \\__/=====\\__/   \\__/=====\\__/
      |||||||         |||||||         |||||||         |||||||         |||||||
      |||||||         |||||||         |||||||         |||||||         |||||||
      |||||||         |||||||         |||||||         |||||||         |||||||
      |||||||         |||||||         |||||||         |||||||         |||||||
      |||||||         |||||||         |||||||         |||||||         |||||||
      |||||||         |||||||         |||||||         |||||||         |||||||
      |||||||         |||||||         |||||||         |||||||         |||||||
      |||||||         |||||||         |||||||         |||||||         |||||||
      (oOoOo)         (oOoOo)         (oOoOo)         (oOoOo)         (oOoOo)
      J%%%%%L         J%%%%%L         J%%%%%L         J%%%%%L         J%%%%%L
     ZZZZZZZZZ       ZZZZZZZZZ       ZZZZZZZZZ       ZZZZZZZZZ       ZZZZZZZZZ
    ===========================================================================
    |_________________________________________________________________________|
   |___________________________________________________________________________|
  |_____________________________________________________________________________|
 |_______________________________________________________________________________|
  `);

  rl.question('Please enter a number or a Roman numeral: ', (input) => {
      if (isNumeric(input)) {
          console.log(`Converted: ${convertNumberToRoman(parseInt(input))}`);
      } else {
          console.log(`Converted: ${convertRomanToNumber(input.toUpperCase())}`);
      }

      rl.close();
  });
}



// This ensures the main function is called only when this script is run directly, and not when imported elsewhere
if (require.main === module) {
  main();
}

module.exports = { convertRomanToNumber, convertNumberToRoman };
