
// Below is a series of functions, each function has a
// description before it that explains what each of them
// should do. Complete the function so that it satisfies
// it's description.



// 1.
// Should always return the value 5

function giveMeFive() {

  return 5;
}

//---------

// 2.
// This function should accept 1 parameter
// and return the exact same thing. This type
// of function is called a no-op as in (no operation)

function noOp(parameter) {

  return parameter;

}

//---------

// 3.
// This function should accept 1 parameter; a number.
// It should return the number doubled. Doubled meaning
// it should return a number twice the size as the number
// that is passed in.

function double(myNum) {

  return myNum * 2;

}

//---------

// 4.
// This function should accept 1 parameter; a number.
// It should return the number squared. Squared meaning
// it should return the number multiplied by itself.

function square(myNum) {

  return myNum * myNum;

}

//---------

// 5.
// This function should accept 1 parameter; an array
// of numbers. It should calculate the sum (the total
// of all the numbers in the array added together)
// and return it.

function sum(myArr) {

  newNum = 0;

  for (i = 0; i < myArr.length; i++ ) {

    newNum += myArr[i];
  }
  
  return newNum;

}
//---------

// 6.
// This function should accept 1 parameter; a single
// letter string (like "g".) It should return the index
// of that letter in the alphabet. For example "a" would
// be 1 and "z" would be 26. This should work for both
// lowercase and capital letters.

// HINT: use an array and a for loop

function letterIndex(myLtr) {

  alphaArray = { "A" : 1, "B" : 2, "C" : 3, "D" : 4, "E" : 5, "F" : 6, "G" : 7, "H" : 8, "I" : 9, "J" : 10, "K" : 11, "L" : 12, "M" : 13, "N" : 14, "O" : 15, "P" : 16, "Q" : 17, "R" : 18, "S" : 19, "T" : 20, "U" : 21, "V" : 22, "W" : 23, "X" : 24, "Y" : 25, "Z" : 26};

  return alphaArray[myLtr.toUpperCase()];

}

//---------

// 7.
// This function should accept 1 parameter; a number.
// It should return the letter that corresponds with
// that number. For example, 1 would be "a" and 26
// would be "z". This is the inverse of the previous
// function.

// Note: this needs to work for numbers larger than 26.
// For example 27 should loop back around to "a".

// HINT: use an array and the modulo (%) operator

function reverseLetterIndex(myNum) {

  var alphaArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

  return alphaArray[(myNum - 1) % alphaArray.length];

}

//---------

// 8.
// This function should accept 1 parameter; a string.
// It should shift every letter in the string by 13
// places. This is a form of Caesar cipher known as
// ROT-13. If you are unsure of exactly what you are
// supposed to do read the wikipedia article that explains
// it quite well: http://en.wikipedia.org/wiki/ROT13

// HINT: use the previous 2 functions

function rot13(givenString) {

  newSentenceArray = [];

  words = givenString.split(" ");

    for (i = 0; i < words.length; i++ ) {

      myLettersArray = words[i].split("");
        
      for (newi = 0; newi < myLettersArray.length; newi++ ) {

        newNum = (letterIndex(myLettersArray[newi]) + 13);

        newSentenceArray.push(reverseLetterIndex(newNum));
          }

      newSentenceArray.push(" ");
      }
      
  cipherString = newSentenceArray.join("");

  return cipherString.trim();
}
