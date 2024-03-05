const romanNumerals = [
  { val: 1000, char: 'M' },
  { val: 900, char: 'CM' },
  { val: 500, char: 'D' },
  { val: 400, char: 'CD' },
  { val: 100, char: 'C' },
  { val: 90, char: 'XC' },
  { val: 50, char: 'L' },
  { val: 40, char: 'XL' },
  { val: 10, char: 'X' },
  { val: 9, char: 'IX' },
  { val: 5, char: 'V' },
  { val: 4, char: 'IV' },
  { val: 1, char: 'I' }
];

function toRoman(num) {
  let res = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].val) {
      res += romanNumerals[i].char;
      num -= romanNumerals[i].val;
    }
  }
  return res;
}

