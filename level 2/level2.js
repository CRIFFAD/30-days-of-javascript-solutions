// 1.Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
//2.Using console.log() print out the following quote by Mother Teresa:"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// 3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// 4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// 5.Check if 'on' is found in both python and jargon
// 6.I hope this course is not full of jargon. Check if jargon is in the sentence.
// 7.Generate a random number between 0 and 100 inclusively.
// 8.Generate a random number between 50 and 100 inclusively.
// 9.Generate a random number between 0 and 255 inclusively.
// 10.Access the 'JavaScript' string characters using a random number.
// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// 12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("There is no exercise better for the heart than reaching down and lifting people up.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
console.log(typeof '10' === 10);
   console.log(parseInt('10') === 10);

console.log(parseFloat('9.8') === 10);
   console.log(Math.round(parseFloat('9.8')) === 10);

let python = 'python';
   let jargon = 'jargon';
   console.log(python.includes('on'));
   console.log(jargon.includes('on'));

let sentence = 'I hope this course is not full of jargon';
   console.log(sentence.includes('jargon'));

console.log(Math.floor(Math.random() * 101));

console.log(Math.floor(Math.random() * 51) + 50);

console.log(Math.floor(Math.random() * 256));

let js = 'JavaScript';
   let randomIndex = Math.floor(Math.random() * js.length);
   console.log(js.charAt(randomIndex));

   console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
   
//    let sentence = 'You cannot end a sentence with because because because is a conjunction';
// let phrase = sentence.substring(31, 52);
// console.log(phrase);
