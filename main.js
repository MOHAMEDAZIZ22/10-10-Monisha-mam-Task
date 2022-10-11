
// Fibonacci Series

// const number = parseInt(prompt('Enter the number'));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }


// Fibonacci Series
// var count = 20;
// var n1 = 0, n2 = 1, nextdigit;
// console.log(count + " of fibonacci series:")
// for (i = 1; i <= count; i++) {
//     console.log(n1);
//     nextdigit = n1 + n2;
//     n1 = n2;
//     n2 = nextdigit;

// }

// Email ODD Number

// var email = prompt("Enter Your Mail");
// var l = email.length;
// for (i = 0; i < l; i++) {
//     if (email[i] == 1 || email[i] == 3 || email[i] == 5 || email[i] == 7 || email[i] == 9) {
//         console.log(email[i]);
//     }
// }




// var string = prompt('Enter a string');

// var out = check(string)

// function check(string) {
    // var len = string.length;

//     for (let i = 0; i < len; i++) {
//         return 'it is palindrome';
//     }

//     if (string[i] == string[len - 1 - i]) {
//         return 'it is not a palindrome';
//     }
// }
// console.log(string);



var string = prompt('Enter a String');  

function check(string) {  
   
    var len = string.length;  
   
    for (let i = 0; i < len / 2; i++) {  
  
        if (string[i] !== string[len - 1 - i]) {  
            alert( 'it is not a palindrome');  
        }  
    }  
    alert( 'it is palindrome');  
}  
var out = check(string);    
console.log(out);  
