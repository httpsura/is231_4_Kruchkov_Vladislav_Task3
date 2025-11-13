const lower = -20;
const upper = 100;
const threshold = 30;
let a = Math.floor(Math.random() * (upper - lower + 1)) + lower;
let greek = Math.floor(Math.random() * 11);

console.log("Текущее значение переменной a - " + a);

let partOne;
let conditionInfo;
let probability;

if (a < threshold) {
  partOne = upper - lower + 1;
  conditionInfo = "a меньше threshold";
  probability = (threshold - lower) / (upper - lower + 1);
} else if (a > threshold) {
  partOne = a * threshold;
  conditionInfo = "a больше threshold";
  probability = (upper - threshold) / (upper - lower + 1);
} else {
  partOne = "Вам невероятно повезло!";
  conditionInfo = "a равно threshold";
  probability = 1 / (upper - lower + 1);
}

console.log("Новое значение partOne: " + partOne);
console.log("По какому условию оно прошло: " + conditionInfo);
console.log("Какая вероятность того что оно могло попасть в это условие: " + probability.toFixed(4));

let greekRoman;
switch (greek) {
  case 1: greekRoman = "I"; break;
  case 2: greekRoman = "II"; break;
  case 3: greekRoman = "III"; break;
  case 4: greekRoman = "IV"; break;
  case 5: greekRoman = "V"; break;
  case 6: greekRoman = "VI"; break;
  case 7: greekRoman = "VII"; break;
  case 8: greekRoman = "VIII"; break;
  case 9: greekRoman = "IX"; break;
  case 10: greekRoman = "X"; break;
  default: greekRoman = "0";
}

console.log("Значение greek в греческой записи: " + greekRoman);

console.log("Значение a " + (a % 2 === 0 ? "четное" : "нечетное"));
