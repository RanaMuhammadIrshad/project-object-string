console.log(`******01******`);
// write your code here
/**
 * The function truncate, truncates a string to a certain number of words.
 * @param {string} str - The given string
 * @param {number} numOfWords - The number of words to truncate
 * @returns {string} - returns the truncated string
 */
const truncate = function (str, numOfWords) {
  return str.split(" ").splice(0, numOfWords).join(" ");
};

console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"
console.log(`******02******`);
// write your code here
/**
 * The function alphabetize_string, alphabetize the given string.
 * @param {string} str - The given string
 * @returns {string}  - returns the alphabetize string
 */
const alphabetize_string = function (str) {
  return str.split("").sort().join("").trim();
  // return str.split('').sort().join('').trim();
};
console.log(alphabetize_string("United States"));
//"SUadeeinsttt"
console.log(`******03******`);
// write your code here
/**
 * The function ascii_to_hexa, convert ASCII to Hexadecimal format.
 * @param {string} str- The given string
 * @returns {string} returns converted string from ASCII to Hexadecimal format
 */
const ascii_to_hexa = function (str) {
  let myArray = [];
  for (let i = 0; i < str.length; i++) {
    let hex = Number(str.charCodeAt(i).toString(16));
    myArray.push(hex);
  }
  return myArray.join("");
};
console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030
console.log(`******04******`);
// write your code here
/**
 * The function humanize, humanize number with the correct suffix such as 1st, 2nd, 3rd or 4th.
 * @param {number} number - The given number
 * @returns {string} returns the string of humanized number.
 */
const humanize = function (number) {
  if (number % 100 >= 11 && number % 100 <= 13) return number + "th";
  switch (number % 10) {
    case 1:
      return number + "st";
    case 2:
      return number + "nd";
    case 3:
      return number + "rd";
  }
  return number + "th";
};
console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"
console.log(`******05******`);
// write your code here
/**
 * The function successor, returns the successor of a string.
console.log(`******05******`); 
 * @param {string} str - The given string 
 * @returns {string} returns the successor of a string 
 */
const successor = function (str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz",
    length = alphabet.length,
    result = str,
    i = str.length;

  while (i >= 0) {
    let last = str.charAt(--i),
      next = "",
      carry = false;

    if (isNaN(last)) {
      index = alphabet.indexOf(last.toLowerCase());

      if (index === -1) {
        next = last;
        carry = true;
      } else {
        let isUpperCase = last === last.toUpperCase();
        next = alphabet.charAt((index + 1) % length);
        if (isUpperCase) {
          next = next.toUpperCase();
        }

        carry = index + 1 >= length;
        if (carry && i === 0) {
          let added = isUpperCase ? "A" : "a";
          result = added + next + result.slice(1);
          break;
        }
      }
    } else {
      next = +last + 1;
      if (next > 9) {
        next = 0;
        carry = true;
      }

      if (carry && i === 0) {
        result = "1" + next + result.slice(1);
        break;
      }
    }

    result = result.slice(0, i) + next + result.slice(i + 1);
    if (!carry) {
      break;
    }
  }
  return result;
};

console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("< >")); // "< >"
console.log(successor("1999zzz")); // "2000aaa"
console.log(successor("ZZZ9999")); // "AAAA0000"
console.log(`******06******`);
// write your code here
let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
/**
 * The function sortByTitleValue, sort the array of objects by title value.
 * @param {string} a
 * @param {string} b
 * @returns {object} returns the sorted object
 */
const sortByTitleValue = function (a, b) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
};
console.log(library.sort(sortByTitleValue));
console.log(`******07******`);
// write your code here
/**
 * The function num_string_range, fill an array with values (numeric, string with one character) on supplied bounds.
 * @param {string} start - The starting point
 * @param {string} end  - The ending point
 * @param {number} step  - The step size
 * @returns {array} returns an array with values (numeric, string with one character) on supplied bounds
 */
const num_string_range = function (start, end, step) {
  const range = [];
  if (
    step === 0 ||
    typeof start === "undefined" ||
    typeof end === "undefined" ||
    typeof start != typeof end
  )
    return false;

  if (end < start) {
    step = -step;
  }

  if (typeof start === "number") {
    while (step > 0 ? end >= start : end <= start) {
      range.push(start);
      start += step;
    }
  } else if (typeof start === "string") {
    start = start.charCodeAt(0);
    end = end.charCodeAt(0);

    while (step > 0 ? end >= start : end <= start) {
      range.push(String.fromCharCode(start));
      start += step;
    }
  }

  return range;
};

console.log(num_string_range("a", "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
console.log(`******08******`);
// write your code here
class my_Clock {
  /**
   * created a class of my_Clock
   */
  constructor() {
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
  }

  run() {
    setInterval(this.update.bind(this), 1000);
  }
  update() {
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  }
  /**
   *
   * @param {number} sec
   */
  updateTime(sec) {
    this.seconds += sec;
    if (this.seconds >= 60) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes >= 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }
  }
}
/**
 * clock is the instance of my_clock
 */
let clock = new my_Clock();
clock.run();
// "14:37:42";
// "14:37:43";
// "14:37:44";
// "14:37:45";
// "14:37:46";
// "14:37:47";
console.log(`******09******`);
// write your code here
/**
 * The function all_properties, prints all the methods in an JavaScript object.
 * @param {object} obj - The JavaScript object
 * @returns {methods} returns all the methods in an JavaScript object
 */
const all_properties = function (obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
};
console.log(all_properties(Array));
// ["isArray", "from", "of"]
console.log(all_properties(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]
console.log(`******10******`);
// write your code here
/**
 * The function  all_properties1, print all the properties in an JavaScript object.
 * @param {object} object - The JavaScript object
 * @returns {properties} returns all the properties in an JavaScript object.
 */
const all_properties1 = function (object) {
  return Object.getOwnPropertyNames(object);
};

console.log(all_properties1(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties1(Array));
// ["length", "name", "prototype", "isArray", "from", "of"]
